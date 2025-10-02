import { HeaderSecund } from "../../components/header/headerSecundary/heandersecund"
import Templete from "./endereco_css"
import { useEffect, useState, type ChangeEvent } from "react"
import type { endereco_type } from "./endereco_type"
import type { carrinhoType } from "../../types/carrinhoType"
import { useNavigate } from "react-router-dom"
import MyMapComponent from "./mapaEntrega"
    const storeLocation = { lat: -2.6273897162643194, lng: -44.2625405303444 };

export const Endereco = () => {
    const navigate = useNavigate()
      const [enderecoSelecionado, setEnderecoSelecionado] = useState<any | null>(null) // 👈 novo state

    const [itens,setItens] = useState<carrinhoType[]>([])
    useEffect(() => {
        const itens = localStorage.getItem("carrinho");
         if (itens !== null) {
         const dados = JSON.parse(itens);
          setItens(dados )
    }
      }, []);
    const [check, setCheck] = useState<boolean | null>(true)
    const hendleValue = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === "true";
        setCheck(value)
        console.log("data ", value)
    }
   
    function hendleSelectBtn() {
        switch (check) {
            case true:
                 const retirada:endereco_type = {
                    retirar:check
                 }
                 navigate("/resumo_pedidos/payment",{state:retirada})
                break;
            case false:
                const endereco:endereco_type = {
                    retirar:check,
                    endereco:enderecoSelecionado
                    
                 }
                 navigate("/resumo_pedidos/payment",{state:endereco})
                break
            default:
                alert("Informe um campo")
        }
    }
    const [ativar,setAtivar] = useState("")
    return (
        <>
            <HeaderSecund func={function (): void {
                throw new Error("Function not implemented.")
            }}></HeaderSecund>
            {
                itens.length > 0  ? (
                    <Templete.container>
                <Templete.form>
                    <Templete.checkbox
                        type="radio"
                        name="opcao"       // mesmo name => só um marcado por vez
                        value="true"
                        onChange={hendleValue}
                        checked={check === true}
                    />
                    <Templete.Label>Retirar na Loja</Templete.Label>

                </Templete.form>
                <Templete.form>

                    <Templete.checkbox
                        type="radio"
                        name="opcao"
                        value="false"
                        onChange={hendleValue}
                        checked={check === false}
                    />
                    <Templete.Label>Entregar no Local</Templete.Label>
                </Templete.form>
                {
                    !check &&
                   <MyMapComponent empressLocation={{
                                    lat: storeLocation.lat,
                                    lng: storeLocation.lng
                                }} onAddressSelect={(endereco)=>setEnderecoSelecionado(endereco) }></MyMapComponent>
                }
                <Templete.btn onClick={hendleSelectBtn}>Salvar</Templete.btn>

            </Templete.container>
                ):(<>Carregando....</>)
            }
        </>
    )
}