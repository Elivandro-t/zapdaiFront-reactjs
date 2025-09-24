import { useNavigate } from "react-router-dom";
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund";
import Template from "./resumo_css"
import HorizontalNonLinearStepper from "./stepper";
import { useContext, useEffect, useState } from "react";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_cunsulto_produto";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import type { Pedido } from "../../../types/pedidos";
const ResumoPedidos = () => {
  const usuario = useContext(contextProvider)

  useEffect(() => {
    window.scrollTo(0, 0);
     
  },[usuario])
  const navigate = useNavigate()
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
  return (
    <Template.Area>
      <HeaderSecund func={navegarMaket}></HeaderSecund>
      <Template.Container>
        {/* Status do pedido */}
        <Template.heanderPedido>
          <Template.tituloPedido>Resumo do  Pedido</Template.tituloPedido>
        </Template.heanderPedido>
             
        <Template.EmpresaLogo>
           <Template.logo src="fjjfjf"/>
              <small>Zapdai</small>
        </Template.EmpresaLogo>
        <Template.Card>
          <Template.ItemDetails>
            <Template.itemCard>
              <Template.ItemImage src="fjjfjf"/>
              <Template.itemDetalhes>
                 <Template.tituloPedido>Juçara da barbara</Template.tituloPedido>
                 <small>Qtd: 1Unitário: R$ 25,00</small>
              </Template.itemDetalhes>
              <Template.cardPrice>
                  <Template.tituloPedido>R$ 25,5</Template.tituloPedido>
              </Template.cardPrice>
            </Template.itemCard>
          </Template.ItemDetails>
        </Template.Card>
        <Template.itemDetalhes>
                 <Template.tituloPedido>Subtotal: R$ 25,00</Template.tituloPedido>
                 <small>Frete: R$ 0,63</small>
                 <small>Total: R$ 25,63</small>
              </Template.itemDetalhes>
        <Template.heanderPedido>

        </Template.heanderPedido>
        {/* {pedido?.produtos.flatMap((item, index) => (
          <Template.Card key={index}>
            <p>Vendido e entregue por <Template.Bold>{pedido.produtos[0]?.empresa?.nomeCompania}</Template.Bold></p>
            <Template.ItemContainer>
              <Template.ItemImage src={item.imageURL} />
              <Template.ItemDetails>
                <p><strong>Nome:</strong> {item.produtoName}</p>
                <p><strong>Quantidade:</strong> {item.quantidade}</p>
                <p><strong>Valor:</strong> R$ {item.amount}</p>
                <p><strong>Valor total:</strong> <Template.Bold>R$ {pedido.precoTotal}</Template.Bold></p>
              </Template.ItemDetails>
            </Template.ItemContainer>
          </Template.Card>

        ))} */}
        {/* <Template.heanderPedido>
          <Template.tituloPedido>Endereço de Entrega</Template.tituloPedido>
        </Template.heanderPedido> */}
        <Template.Card>
          <Template.SummaryRow>
            <span><strong>Endereço de entrega</strong></span>
            <span><strong>Forma de pagamento</strong></span>
            <span><strong>Resumo do pedido</strong></span>
          </Template.SummaryRow>
          <Template.SummaryRow>
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
          </Template.SummaryRow>
          <Template.TotalRow>
            <span>Valor total</span>
            <span>R$ 15,80</span>
          </Template.TotalRow>
        </Template.Card>
                  <Template.Button >Finalizar pedido</Template.Button>

      </Template.Container>
      
      {loading &&
        <LoadingSecundary></LoadingSecundary>
      }
    </Template.Area>
  );
};

export default ResumoPedidos;
