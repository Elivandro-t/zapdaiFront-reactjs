import { useEffect, useState } from "react"
import {LoadingRota, Section}  from "./loading"
import { useNavigate } from "react-router-dom";
export const LoadingR = ()=>{
    const [ativo,setAtivo]  = useState(true);
    const nagivate = useNavigate();

    useEffect(()=>{
       const timeout =  setInterval(()=>{
         if(ativo){
             nagivate("/marketPlace")
             setAtivo(false)
         }else{
             nagivate("/login")
              setAtivo(false)
 
         }
        },500)
          return () => clearTimeout(timeout); // limpa se o componente desmontar

     },[])
 
    return(
       <Section className="">
          <LoadingRota></LoadingRota>
          <div>Zapdai</div>
       </Section>
    )
}