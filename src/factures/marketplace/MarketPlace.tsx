import { FootComponet } from "../../components/footer/Footter"
import { HeaderComponent } from "../../components/header/Header"
import { MainComponent } from "../../components/MainComponent/MainComponet"
import { BannerSlider } from "../../components/ProdutoCarrocel/produtoCarrossel";
import Makert from "./marcketplace"
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import { useState } from "react"

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
            <FootComponet></FootComponet>
        </Makert.container>
    )
}