import { useContext, useEffect, useState } from "react"
import { LoadingRota, Section } from "./loading"
import { useNavigate } from "react-router-dom";
import { Logued } from "../service/Logued"
export const LoadingR = () => {
    const isLogged = Logued()
    const navigate = useNavigate();
    const validationUser = () => {
        const redirect =sessionStorage.getItem("redirectAfterLogin") || "/marketPlace";
               sessionStorage.removeItem("redirectAfterLogin");
            if ( isLogged || !isLogged) {
            navigate(redirect,{ replace: true, state: { refresh: Date.now() } });
            }
        // } else {
        //       console.log("logued "+isLogged)
        //     navigate("/login", { replace: false })
        // }
    };

    useEffect(() => {
         const clearIteval =  setTimeout(()=>{
     
            validationUser();
            },3000)
        return ()=>clearTimeout(clearIteval)

        
    }, []);

    return (
        <Section className="">
            <LoadingRota></LoadingRota>
            <div>Zapdai</div>
        </Section>
    )
}