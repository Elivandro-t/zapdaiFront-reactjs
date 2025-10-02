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
import { useContext, useEffect, useState } from "react";
import { CarrinhoDeCompra } from "../carrinhodeCompra/carrinho";
import { Drower } from "../drawer/drower";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Logued } from "../../service/Logued"
import { contextProduto } from "../../reducer/ProdutoProvaider/providerProdutos";

export const HeaderComponent = () => {
    const { carrinho } = useContext(contextProduto) as any

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    const handleLoginClick = () => {
        setLoading(true);
        navigate("/login");
        setLoading(false);


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
        console.info('teste.');
    };
    const hendleHome = () => {
        navigate("/marketPlace")
    }

      const hendleCategoriasHome = (categorias:string) => {
        navigate(`/marketPlace/categorias?order=${categorias}`)
    }

    const navegarMaket = () => {
        setLoading(true)
        setTimeout(() => {
            navigate("/melhores-planos", { replace: true, state: { refresh: Date.now() } })
        }, 2000)
    }

    return (
        <>
            <Header.areaHeader>
                <Header.container>
                    <Header.logo src={logoWhite} onClick={() => hendleHome()} />
                    <Header.busca placeholder="Buscar..." />
                    <Header.ButtomService onClick={navegarMaket} >
                        <AddBusinessIcon />
                        Empresas
                    </Header.ButtomService>
                    {Logued() && (
                        <Header.car onClick={() => hendleAtivoCarrinho()}>
                            <Badge badgeContent={carrinho.length} color="error">
                                <RemoveShoppingCartIcon sx={{ color: 'white' }} />
                            </Badge>
                        </Header.car>
                    )}
                    {!Logued() && (
                        <>
                            <Header.ButtomService onClick={handleLoginClick} >
                                <LogoutIcon />
                                Entrar
                            </Header.ButtomService>
                            <Header.ButtomService  >
                                <PersonAddAltIcon />
                                Cadastrar
                            </Header.ButtomService>
                        </>
                    )}
                    {Logued() && (
                        <Header.perfil>
                            <PerfilComponet />
                        </Header.perfil>
                    )
                    }
                </Header.container>

                <Header.categoriasItens>
                    <Button style={{ marginLeft: 25 }} onClick={toggleDrawer(true)}>
                        Categorias <MenuOpenRoundedIcon />
                    </Button>
                    <Stack direction="row" spacing={2}>
                        {
                            categorias?.flatMap(ItemsRow => (
                                <Chip
                                    label={ItemsRow.nome}
                                    variant="outlined"
                                    onClick={()=>hendleCategoriasHome(ItemsRow.nome)}
                                    icon={<img width={24} height={15} src={ItemsRow.icone} />}
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