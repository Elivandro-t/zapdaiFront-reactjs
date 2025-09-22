import Template from "./pedidos_css"
import Api from "../../../service/api_cunsulto_produto"
import { useContext, useEffect, useState } from "react"
import { contextProvider } from "../../../reducer/userProvider/userProvider"
import type { Pedido } from "../../../types/pedidos"
import { useNavigate } from "react-router-dom"
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund"
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary"
import Chip from '@mui/material/Chip';

export const MeusPedidos = () => {
    const usuario = useContext(contextProvider);
    const [lista, setLista] = useState<Pedido[]>([])
    useEffect(() => {
        const hendleButton = async () => {
            if (usuario != null) {
                const resposta = await Api.pedidos(usuario?.usuarioId);
                if (resposta != null) {
                    setLista(resposta.pedidos)
                    console.log("resposta api pedidos " + resposta)
                }
            }
        }
        hendleButton()
    }, [usuario])
     const navigate = useNavigate()
      const [loading,setLoading] = useState(false);
       const navegarMaket = ()=>{
            setLoading(true);
          setTimeout(()=>{
                navigate("/marketPlace",{ replace: true, state: { refresh: Date.now() } })
            },2000)
        }

       const hendleDetalhesPedidos = (numero_do_pedido:string)=>{
            setLoading(true);
          setTimeout(()=>{
                navigate(`/detalhes-pedido?order=${numero_do_pedido}`,{ replace: true, state: { refresh: Date.now() } })
            },2000)
        }
    return (
        <Template.container>
             <HeaderSecund func={navegarMaket}></HeaderSecund>
            <Template.area_pedidos>
                <Template.titulo>Meus Pedidos</Template.titulo>
                <Template.pedidos>
                    {lista.length<=0 &&(
                       <>Carregando Pedidos...</>
                    )}
                    {lista.map((item, index) => (
                        <div key={item.id}>
                            <Template.dataPedido >
                                    {new Date(item.dataDeCriacao).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                                </Template.dataPedido>
                            <Template.cardItem onClick={()=>hendleDetalhesPedidos(item.numeroDoPedido)} >
                                <Template.card_item_header>
                                    <Template.numeroDoPedido>Pedido #{item.numeroDoPedido}</Template.numeroDoPedido>
                                    <Chip color="warning" label={item?.StatusDoPedido} variant="outlined" />
                                    {/* <Template.btnAguadandoPagamento>{item.StatusDoPedido}</Template.btnAguadandoPagamento> */}
                                </Template.card_item_header>
                                <Template.Hr />
                                <Template.card_item_center>
                                    <Template.Image src={item?.produtos[0]?.imageURL} />
                                    <Template.price>Total: R$ {item.precoTotal}</Template.price>
                                </Template.card_item_center>
                            </Template.cardItem>
                        </div>

                    ))}
                </Template.pedidos>
                {loading &&
                <LoadingSecundary></LoadingSecundary>
                }
            </Template.area_pedidos>
        </Template.container>
    )
}