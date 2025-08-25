import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import logoWhite from '../../assets/logowhite.png';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Badge from '@mui/material/Badge';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';


import Header from "./header"
import { useNavigate } from "react-router-dom";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
import { useState } from "react";
export const HeaderComponent = () => {
    const [loading, setLoading] = useState(false);

    const count = 1;
    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
    const intval =    setTimeout(() => {
            navigate("/login");
                setLoading(false);

        }, 1000); 
       return () => clearTimeout(intval)
    };
    return (
        <>
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
            {
                loading && <LoadingSecundary />

            }
        </>

    )
}