import { useNavigate } from "react-router-dom";
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund";
import Template from "./detalhes_pedidosCss"
import HorizontalNonLinearStepper from "./stepper";
import { useContext, useEffect, useState } from "react";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_cunsulto_produto";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import type { Pedido } from "../../../types/pedidos";
import Chip from '@mui/material/Chip';
const PedidoDetalhes = () => {
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
  const hendlePagamentoPedidos = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`/pagamento-pedidos/checkout?order=${numeroDoPedido}`, { replace: true, state: { refresh: Date.now() } })

    }, 2000)

  }
  return (
    <Template.Area>
      <HeaderSecund func={navegarMaket}></HeaderSecund>
      <Template.Container>
        {/* Status do pedido */}
        <Template.heanderPedido>
          <Template.tituloPedido>Pedido: #{pedido?.numeroDoPedido}</Template.tituloPedido>
          <Template.status>
            Status:<Chip color="warning" label={pedido?.StatusDoPedido} variant="outlined" />

          </Template.status>
        </Template.heanderPedido>
        <Template.Card>
          <Template.Title>Detalhes do pedido</Template.Title>
          <Template.StatusContainer>
            <HorizontalNonLinearStepper lista={[]} status={pedido?.historyStatusPedidos || []}></HorizontalNonLinearStepper>
          </Template.StatusContainer>
        </Template.Card>
        <Template.heanderPedido>
          <Template.tituloPedido>Itens do pedido</Template.tituloPedido>

        </Template.heanderPedido>
        {pedido?.produtos.flatMap((item, index) => (
          <Template.Card key={index}>
            {/* <Template.Title>Itens do pedido</Template.Title> */}
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

        ))}
        <Template.heanderPedido>
          <Template.tituloPedido>Localidade</Template.tituloPedido>
        </Template.heanderPedido>
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
          <Template.Button onClick={hendlePagamentoPedidos}>REALIZAR PAGAMENTO</Template.Button>
        </Template.Card>
      </Template.Container>
      {loading &&
        <LoadingSecundary></LoadingSecundary>
      }
    </Template.Area>
  );
};

export default PedidoDetalhes;
