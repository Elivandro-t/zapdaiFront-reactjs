import { useEffect, useState } from "react"
import  Cookie  from "js-cookie";
import Templete from "./cookiesCss"
export const CookiesBanner = ()=>{
    const [isVisible,setVisible] = useState(false);
    
    useEffect(()=>{
        const acepted = Cookie.get("cookiesAccepted")
        if(!acepted){
            setVisible(true)
        }
    },[]);
    const handleAccept = () => {
    Cookie.set("cookiesAccepted", "true", { expires: 365 }); // expira em 1 ano
    setVisible(false);
  };

  const handleDecline = () => {
    Cookie.set("cookiesAccepted", "false", { expires: 365 });
    setVisible(false);
  };
    if (!isVisible) return null;

    return(
        <Templete.Section>
     <Templete.Banner>
      <Templete.Text>Usamos cookies para melhorar sua experiência. Você aceita?</Templete.Text>
      <Templete.Buttons>
        <Templete.Button variant="decline" onClick={handleDecline}>
          Recusar
        </Templete.Button>
        <Templete.Button variant="accept" onClick={handleAccept}>
          Aceitar
        </Templete.Button>
      </Templete.Buttons>
    </Templete.Banner>
    </Templete.Section>
    )
}