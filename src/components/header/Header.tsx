import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import logoWhite from '../../assets/logowhite.png';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Badge from '@mui/material/Badge';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Button from "@mui/material/Button"
import Drawer from "@mui/material/Drawer"
import api from "../../service/api"
import logo from "../../assets/logowhite.png"

import Header from "./header"
import { useNavigate } from "react-router-dom";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
import { useEffect, useState } from "react";
import { ItemsRow } from "../MainComponent/mainCss";
import { CategoriaItem } from "./CategoriaItem";
export const HeaderComponent = () => {
    const [loading, setLoading] = useState(false);

    const count = 1;
    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
        const intval = setTimeout(() => {
            navigate("/login");
            setLoading(false);

        }, 1000);
        return () => clearTimeout(intval)
    };
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (
    ) => {
        setDrawerOpen(open);
    };
    const [categorias, setCategoris] = useState<any[]>()

    const hendleSearchApi = async () => {
        const response = await api.categorias()
        setCategoris(response.categorias);
    }
    useEffect(() => {
        hendleSearchApi()
    }, [])
    return (
        <>
            <Header.areaHeader>
                <Header.container>
                    <Header.logo src={logoWhite} />
                    <Header.busca placeholder="Buscar..." />
                    <Header.ButtomService  >
                        <AddBusinessIcon />
                        Empresas
                    </Header.ButtomService>
                    <Header.car  >
                        <Badge badgeContent={count} color="error">
                            <RemoveShoppingCartIcon sx={{ color: 'white' }} />
                        </Badge>
                    </Header.car>
                    <Header.ButtomService onClick={handleLoginClick} >
                        <LogoutIcon />
                        Entrar
                    </Header.ButtomService>
                    <Header.ButtomService  >
                        <PersonAddAltIcon />
                        Cadastrar
                    </Header.ButtomService>
                    <Header.perfil>
                        <PerfilComponet />
                    </Header.perfil>
                </Header.container>
                <Button style={{ marginLeft: 25 }} onClick={toggleDrawer(true)}>
                    <MenuOpenRoundedIcon />
                </Button>

                <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
                    <div style={{
                        width: 250,
                        display: "flex",
                        flexDirection: "column",
                           background: "linear-gradient(135deg, #ff3c00 0%, #ff6a00 50%, #ff2e00 100%)",
                        padding: 22,
                    }}>
                        <img
                            src={logo} // substitua com o avatar real
                            alt="Logo da Empresa"
                            style={{ width: 78, height: "auto", objectFit: "contain" }}
                        />
                    </div>
                    {/* Coloque aqui o conteúdo que você quer mostrar no Drawer */}
                    <div style={{ width: 250, padding: 16, display: "flex", flexDirection: "column" }}>
                        {categorias?.flatMap(ItemsRow => (
                            <CategoriaItem nome={ItemsRow.nome} iconUrl={ItemsRow.icone} />

                        ))}


                    </div>
                </Drawer>

            </Header.areaHeader>
            {
                loading && <LoadingSecundary />

            }

        </>

    )
}