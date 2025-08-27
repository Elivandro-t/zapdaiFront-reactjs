import { PerfilComponet } from "../perfilComponentHeader/perfilComponet"
import logoWhite from '../../assets/logowhite.png';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Badge from '@mui/material/Badge';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Button from "@mui/material/Button"
import api from "../../service/api"
import Header from "./header"
import { useNavigate } from "react-router-dom";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
import { useEffect, useState } from "react";
import { CarrinhoDeCompra } from "../carrinhodeCompra/carrinho";
import { Drower } from "../drawer/drower";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
export const HeaderComponent = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
        const intval = setInterval(() => {
            navigate("/login");
            setLoading(false);

        }, 1000);
        return () => clearInterval(intval)
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
    const [ativo, setAtivo] = useState(false)
    const hendleAtivoCarrinho = () => {
        setAtivo(true)
    }
    const hendleAtivoCarrinhoFalse = () => {
        setAtivo(false)
    }
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const [item,setItem] = useState<any[]>()
    const handleleng= () => {
        const json = localStorage.getItem("carditem")
        if(json!==null){
            const data = JSON.parse(json);
            setItem(data)
        }
        
    };
    useEffect(()=>{
        handleleng()
    },[])
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
                    <Header.car onClick={() => hendleAtivoCarrinho()}>
                        <Badge badgeContent={item?.length} color="error">
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
                <Header.categoriasItens>
                   <Button style={{ marginLeft: 25 }} onClick={toggleDrawer(true)}>
                    <MenuOpenRoundedIcon />
                </Button>
                <Stack direction="row" spacing={2}>
                    {
                        categorias?.flatMap(ItemsRow=>(
                    <Chip
                        label={ItemsRow.nome}
                        variant="outlined"
                        onClick={handleClick}
                        icon={<img width={24} height={15} src={ItemsRow.icone}/>}
                    />
                        ))
                    }
                </Stack>
                </Header.categoriasItens>
                <Drower drawerOpen={drawerOpen} toggleDrawer={toggleDrawer(false)} categorias={categorias || []} />

            </Header.areaHeader>
            {ativo && <CarrinhoDeCompra hendle={hendleAtivoCarrinhoFalse} />}
            {
                loading && <LoadingSecundary />

            }

        </>

    )
}