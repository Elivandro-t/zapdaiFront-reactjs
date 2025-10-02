import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "400px" };

type storeLocation = {
  lat: number,
  lng: number
}
type location = {
  empressLocation: storeLocation,
  onAddressSelect:(endereco:any)=>void
}
const MyMapComponent = ({ empressLocation,onAddressSelect }: location) => {
  const [customerLatLng, setCustomerLatLng] = useState<google.maps.LatLng | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [customerAddress, setCustomerAddress] = useState<any | null>(null);

  const [deliveryFee, setDeliveryFee] = useState<number | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const getAddressFromLatLng = (latLng: google.maps.LatLng) => {
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      return new Promise<string>((resolve, reject) => {
        geocoder.geocode({
          location: latLng
        }, (result, status) => {
          if (status === "OK" && result && result[0]) {
            const end = result[0];
            const components = end.address_components;

            const getComponent = (type: string) => {
              const comp = components.find(c => c.types.includes(type))
              return comp ? comp.long_name : "";
            }
            const jsonEnd = {
              numeroEndereco: getComponent("street_number"),
              longitude: latLng.lng().toString(),
              latitude: latLng.lat().toString(),
              logradouro: getComponent("route"),
              estado_sigla: getComponent("administrative_area_level_1"),
              cep: getComponent("postal_code"),
              bairro: getComponent("sublocality") || getComponent("political"),
              cidade: getComponent("administrative_area_level_2"),
              pais: getComponent("country"),
              complemento: end.formatted_address //
            }
            resolve(jsonEnd as any);
          } else {
            reject("Não foi possível obter o endereço");
          }
        })
      })
    }
  }

  // Evento clique no mapa
  const handleMapClick = async (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setCustomerLatLng(e.latLng);
      try {
        const endereco = await getAddressFromLatLng(e.latLng);
        setCustomerAddress(endereco || null);
        if(onAddressSelect) onAddressSelect(endereco)
      } catch (err) {
        console.error(err);
      }
    }
  };
  // Sempre que o cliente muda, calcula rota e distância
  useEffect(() => {
    console.log(empressLocation)

    if (!customerLatLng || !window.google || !window.google.maps) return;

    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: empressLocation,
        destination: customerLatLng,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
          // Calcula distância total em metros
          const route = result.routes[0].legs[0];
          setDistance(route.distance?.value || 0);
          setDeliveryFee(((route.distance?.value || 0) / 1000) * 1.3); // R$2 por km
        } else {
          console.error("Erro ao calcular rota:", status);
        }
      }
    );
  }, [customerLatLng]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDkSXAsRMs5QxbxqCCNC9PQS0eqYwULJ6k" libraries={["geometry", "places"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={empressLocation} zoom={5} onClick={handleMapClick}>
        <Marker position={empressLocation} label="Loja" />
        {customerLatLng && <Marker position={customerLatLng} label="Cliente" />}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      {distance && (
        <p>
          Distância da rota: {(distance / 1000).toFixed(2)} km <br />
          Valor do frete: R$ {deliveryFee?.toFixed(2)}
        </p>

      )}
      {customerAddress && <p>Endereço do cliente: {customerAddress?.complemento}</p>}

    </LoadScript>
  );
};

export default MyMapComponent;




// AIzaSyDkSXAsRMs5QxbxqCCNC9PQS0eqYwULJ6k