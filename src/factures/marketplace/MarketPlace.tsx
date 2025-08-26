import { EmpresasParceirasComponent } from "../../components/empresasParceiras/empresasparceiras";
import { FootComponet } from "../../components/footer/Footter"
import { HeaderComponent } from "../../components/header/Header"
import { MainComponent } from "../../components/MainComponent/MainComponet"
import { BannerSlider } from "../../components/ProdutoCarrossel/produtoCarrossel";
import Makert from "./marcketplace"
import { useEffect, useState } from "react"
import Api from "../../service/api"
import api from "../../service/api";
export const MarketPlace = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (
    ) => {
        setDrawerOpen(open);
    };
     
    return (
        <Makert.container>
            <HeaderComponent />
             <BannerSlider ></BannerSlider>
            <MainComponent></MainComponent>
            <EmpresasParceirasComponent></EmpresasParceirasComponent>
            <FootComponet></FootComponet>
        </Makert.container>
    )
}