import { useNavigate } from "react-router-dom";
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund";
import Template from "./checkoutCss"
import { useContext, useEffect, useState } from "react";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_cunsulto_produto";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import type { Pedido } from "../../../types/pedidos";
import Checkout from "./teste";
const formdePagamento = [
  {
    id:1,
    name:"pix",
    titulo:"Aprovação imedita",
    icone:"",
    ativo:true,
    logo:""
  },
    {
    id:2,
    name:"Cartao de Credito",
    titulo:"Aprovação imedita",
    icone:"",
    ativo:true,
    logo:""
  },
    {
    id:3,
    name:"Ctrtão de Debito",
    titulo:"Aprovação imedita",
    icone:"",
    ativo:true,
    logo:""
  }
]
const CheckoutPedidos = () => {
  const usuario = useContext(contextProvider)
  const queryParams = new URLSearchParams(window.location.search);
  const numeroDoPedido: any = queryParams.get("order");
  const [pedido, setPedido] = useState<Pedido | null>(null)

  useEffect(() => {
            window.scrollTo(0, 0);

    if (usuario != null) {
      console.log("Minha api " + numeroDoPedido)
      const detalhes = async () => {
        const resposta = await api.pedidos_busca(usuario?.usuarioId as number, numeroDoPedido);
        if (resposta != null) {
          setPedido(resposta)
        }
      }
      detalhes()
    }
  }, [usuario])
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const navegarMaket = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/meus-pedidos", { replace: true, state: { refresh: Date.now() } })
    }, 2000)
  }
  return (
    <Template.Area>
      <HeaderSecund func={navegarMaket}></HeaderSecund>
      <Template.Container>
        {/* Status do pedido */}
        <Template.Card>
          <Template.SummaryRow>
            <Template.titulo>Forma de pagamento</Template.titulo>
          </Template.SummaryRow>
          <Template.SummaryRow>
            <Template.checkout>
              {/* <Checkout></Checkout> */}
              {formdePagamento.flatMap((item,index)=>(
                <Template.cardPagamento key={index}>
                <h1>fff</h1>
                <h2>ff</h2>
              </Template.cardPagamento>
              ))}
            </Template.checkout>
            <Template.detalhesItens>
               <span>
              Rua Nova, 35 - Próximo a igreja assembleia<br />
              Barreto - São Luís - MA<br />
              CEP: 65041-160
            </span>
            <span>Cartão de crédito</span>
            <span>
              Subtotal: R$ 15,80<br />
              Frete: R$ 0,00
            </span>
            </Template.detalhesItens>
          </Template.SummaryRow>
          <Template.Button>PAGAR {pedido?.precoTotal}</Template.Button>
        </Template.Card>
      </Template.Container>
      {loading &&
        <LoadingSecundary></LoadingSecundary>
      }
    </Template.Area>
  );
};

export default CheckoutPedidos;
