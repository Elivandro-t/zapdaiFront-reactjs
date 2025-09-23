import { useNavigate } from "react-router-dom";
import { HeaderSecund } from "../../../components/header/headerSecundary/heandersecund";
import Template from "./checkoutCss"
import { useContext, useEffect, useState } from "react";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import api from "../../../service/api_cunsulto_produto";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import type { Pedido } from "../../../types/pedidos";
import logopix from "../../../assets/logoPix.png"
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { SimpleDialog } from "../../../components/detalhesProdutos/detalhesProdutos";
import CheckoutCustom, { type CheckoutCustomRef } from "./teste";
import { useRef } from "react";


const formdePagamento = [
  {
    id: 1,
    name: "pix",
    titulo: "Aprovação imedita",
    icone: "",
    ativo: true,
    method: "pix"
  },
  {
    id: 2,
    name: "Cartao de Credito",
    titulo: "Aprovação imedita",
    icone: "",
    ativo: false,
    method: "credit"

  },
  {
    id: 3,
    name: "Cartão de Debito",
    titulo: "Aprovação imedita",
    icone: "",
    ativo: false,
    method: "debit"

  }
]

const CheckoutPedidos = () => {
  const childRef = useRef<CheckoutCustomRef>(null);

  const usuario = useContext(contextProvider) // pegando o provider de usuario
  const queryParams = new URLSearchParams(window.location.search); //consulta a query
  const numeroDoPedido: any = queryParams.get("order"); // pega o numero do pedido na query
  const [pedido, setPedido] = useState<Pedido | null>(null) // estado da api de pedidos

  const [selectedMethod, setSelectedMethod] = useState<string>("pix")
  const [credit, setCredit] = useState<boolean>(false)
  const [pix, setPix] = useState<boolean>(false)
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  // rook para ouvir o a busca da api
  useEffect(() => {
    window.scrollTo(0, 0);
    if (usuario != null) {
      const detalhes = async () => {
        const resposta = await api.pedidos_busca(usuario?.usuarioId as number, numeroDoPedido);
        if (resposta != null) {
          setPedido(resposta)
        }
      }
      detalhes()
    }
  }, [usuario])
  // redireciona para a rota informada
  const navegarMaket = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/meus-pedidos", { replace: true, state: { refresh: Date.now() } })
    }, 2000)
  }
  // retorna o icone do card
  const retornaIcone = (data: any) => {
    switch (data) {
      case "pix":
        return (
          <Template.imagem src={logopix} />
        );
      case "credit":
        return (
          <PaymentIcon sx={{ fontSize: 40 }} />
        )
      default:
        return (
          <PaymentIcon sx={{ fontSize: 40 }} />
        );
    }
  }


  const hendleSelectMethod = (method: string) => {
    setSelectedMethod(method)
    switch (method) {
      case "pix":
        setPix(true)
        setCredit(false)
        break
      case "credit":
        setCredit(true)
        setPix(false)
        break
      default:
        setPix(false)
        setCredit(true)
        break
    }
  }
  const retornachecked = (method: any) => {

    return selectedMethod === method ? (
      <CheckCircleIcon sx={{ fontSize: 30, color: "#00C853" }} />
    ) : <div></div>

  }

  const handlePay = () => {
  if (selectedMethod === "credit" || selectedMethod === "debit") {
    childRef.current?.submitForm();
  } else if (selectedMethod === "pix") {
    setPix(true);
  }
};

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
              {formdePagamento.flatMap((item, index) => (
                <Template.cardPagamento key={index} onClick={() => hendleSelectMethod(formdePagamento[index].method)}>
                  {retornaIcone(item.method)}
                  <Template.CardCenter>
                    <Template.Cardtitulo>{item.name}</Template.Cardtitulo>
                    <Template.CardSubtitulo>{item.titulo}</Template.CardSubtitulo>
                  </Template.CardCenter>
                  {retornachecked(formdePagamento[index].method)}

                </Template.cardPagamento>
              ))}
              <>
                {credit &&
                  <CheckoutCustom ref={childRef}></CheckoutCustom>
                }
                {pix &&
                  <SimpleDialog open={pix} selectedValue={true} onClose={function (): void {
                    setPix(false)
                  }} />
                }
                {

                }

              </>
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
          <Template.SummaryRow>
            <Template.titulo>Após clicar no botão de pagar, um QR code para pagamento será gerado em um modal.

            </Template.titulo>
          </Template.SummaryRow>
          <Template.Button onClick={handlePay}>PAGAR {pedido?.precoTotal}</Template.Button>
        </Template.Card>
      </Template.Container>
      {loading &&
        <LoadingSecundary></LoadingSecundary>
      }
    </Template.Area>
  );
};

export default CheckoutPedidos;
