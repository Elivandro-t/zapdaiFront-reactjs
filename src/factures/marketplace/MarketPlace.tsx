import { Outlet } from "react-router-dom";
import { FootComponet } from "../../components/footer/Footter"
import { HeaderComponent } from "../../components/header/Header"
import Makert from "./marcketplace"
import { useEffect } from "react";
import { CookiesBanner } from "../../components/cookies/CookiesComponets";

export const MarketPlace = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <Makert.container>
            <HeaderComponent />
            <Makert.Container_int>
                <Outlet></Outlet>
            </Makert.Container_int>
                  <CookiesBanner></CookiesBanner> 

            <FootComponet></FootComponet>
        </Makert.container>
    )
}