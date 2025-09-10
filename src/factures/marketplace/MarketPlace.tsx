import { EmpresasParceirasComponent } from "../../components/empresasParceiras/empresasparceiras";
import { FootComponet } from "../../components/footer/Footter"
import { HeaderComponent } from "../../components/header/Header"
import { MainComponent } from "../../components/MainComponent/MainComponet"
import { BannerSlider } from "../../components/ProdutoCarrossel/produtoCarrossel";
import Makert from "./marcketplace"

export const MarketPlace = () => {
    return (
        <Makert.container>
            <HeaderComponent />
            <Makert.Container_int>
                <MainComponent></MainComponent>
            </Makert.Container_int>
            <FootComponet></FootComponet>
        </Makert.container>
    )
}