import { useNavigate } from "react-router-dom";
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund";
import Template from "./resumo_css"
import { useContext, useEffect, useState } from "react";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_cunsulto_produto";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import type { Pedido } from "../../../types/pedidos";
import type { Order } from "../../../types/pedidos_criacao/createOrder";
import type { carrinhoType } from "../../../types/carrinhoType";
const ResumoPedidos = () => {
  const usuario = useContext(contextProvider)
  const [carrinho, setCarrinho] = useState<carrinhoType[] | null>([])
  const navigate = useNavigate()
   const order = localStorage.getItem("carrinho") as any
   const parsedOrder = JSON.parse(order);
  useEffect(() => {
    window.scrollTo(0, 0);
   
    if (order) {
      if (parsedOrder?.length <= 0) {
        navigate("/marketPlace")
      } else {
        setCarrinho(parsedOrder as any)
      }
    }

  }, [])
  const [loading, setLoading] = useState(false);
  const navegarMaket = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/meus-pedidos", { replace: true, state: { refresh: Date.now() } })
    }, 2000)
  }
  // const hendlePagamentoPedidos = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     navigate(`/pagamento-pedidos/checkout?order=${numeroDoPedido}`, { replace: true, state: { refresh: Date.now() } })

  //   }, 2000)

  // }
  const hendleCalc = ()=>{
   const total =  carrinho?.reduce((acc,item)=>acc+item.price * item.quantidade,0)
       return total;

  }
  const hendleCalcSaldo = (price:number,quanti:number)=>{
   const total =  (price* quanti)
       return total;

  }

  const hendleCreateOrder = () => {

  }
  return (
    <Template.Area>
        {carrinho?(
           <>
            <HeaderSecund func={navegarMaket}></HeaderSecund>
      <Template.Container>
        {/* Status do pedido */}
        <Template.heanderPedido>
          <Template.tituloPedido>Resumo do  Pedido</Template.tituloPedido>
        </Template.heanderPedido>
        <Template.EmpresaLogo>
          <Template.logo src={carrinho[0]?.imageUrl} />
          <small>{carrinho[0]?.nomeCompania}</small>
        </Template.EmpresaLogo>
        <Template.Card>
          {carrinho?.flatMap((item,index)=>(
            <Template.ItemDetails key={index}>
            <Template.itemCard>
              <Template.ItemImage src={item?.imageUrl} />
              <Template.itemDetalhes>
                <Template.tituloPedido>{item.nomeProduto}</Template.tituloPedido>
                <small>Qtd: {item.quantidade} Unitário: R$ {item.price.toFixed(2)}</small>
              </Template.itemDetalhes>
              <Template.cardPrice>
                <Template.tituloPedido>R$ {hendleCalcSaldo(item.price,item.quantidade).toFixed(2)}</Template.tituloPedido>
              </Template.cardPrice>
            </Template.itemCard>
          </Template.ItemDetails>
          ))}
        </Template.Card>
        <Template.itemDetalhes>
          <Template.tituloPedido>Subtotal: R$ {hendleCalc()?.toFixed(2)}</Template.tituloPedido>
          <small>Frete: R$ 0,63</small>
          <small>Total: R$ {hendleCalc()}</small>
        </Template.itemDetalhes>
        <Template.Card>
          <Template.SummaryRow>
            <span><strong>Endereço de entrega</strong></span>
            <span><strong>Resumo do pedido</strong></span>
          </Template.SummaryRow>
          <Template.SummaryRow>
            <span>
              Rua Nova, 35 - Próximo a igreja assembleia<br />
              Barreto - São Luís - MA<br />
              CEP: 65041-160
            </span>
            <span>
              Subtotal: R$ {hendleCalc()?.toFixed(2)}<br />
              Frete: R$ 0,00
            </span>
          </Template.SummaryRow>
          <Template.TotalRow>
            <span>Valor total</span>
            <span>R$ {hendleCalc()?.toFixed(2)}</span>
          </Template.TotalRow>
        </Template.Card>
        <Template.Button >Finalizar pedido</Template.Button>

      </Template.Container>

      {loading &&
        <LoadingSecundary></LoadingSecundary>
      }
           </>):(        <LoadingSecundary></LoadingSecundary>
)
        }
    </Template.Area>

  );
};

export default ResumoPedidos;
