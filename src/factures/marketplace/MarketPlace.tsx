import { FootComponet } from "../../components/footer/Footter"
import { HeaderComponent } from "../../components/header/Header"
import { MainComponent } from "../../components/MainComponent/MainComponet"
import Makert from "./marcketplace"
export const MarketPlace = ()=>{
    return(
        <Makert.container>
           <HeaderComponent/>
           <MainComponent></MainComponent>
           <FootComponet></FootComponet>
        </Makert.container>
    )
}