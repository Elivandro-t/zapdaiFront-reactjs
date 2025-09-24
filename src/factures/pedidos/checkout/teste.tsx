
import { useEffect, useRef, forwardRef, useImperativeHandle, useState, useContext } from "react";
import Template from "./form"
import auth from "../../../service/api";
import ApiPagamento from "../../../service/ApiPagamento.tsx/apiPagamento";

import type { PedidoPagamento } from "../../../types/pagamento/payment";
import { contextProvider } from "../../../reducer/userProvider/userProvider";
import { LoadingSecundary } from "../../../components/LoadingSecundary/LoadingSecundary";
import PaymentModal from "./PaymentModal";
export type CheckoutCustomRef = {
  submitForm: () => void;
};
type CheckoutCustomProps = {
  numeroDoPedido: string;
  selectedMethod: string;
  empresaName: any
};
const CheckoutCustom = forwardRef<CheckoutCustomRef, CheckoutCustomProps>((props, ref) => {
  const usuario = useContext(contextProvider) // pegando o provider de usuario
  const { numeroDoPedido, selectedMethod, empresaName } = props;

  const pagar = (window as any);
  const formRef = useRef<HTMLFormElement>(null);
  const script = document.createElement("script");
  const [valorTotal] = useState(1200); // exemplo, depois você pega do backend
  const [parcelas, setParcelas] = useState(1);
  const [ativoResposta, setAtivoResposta] = useState(false);
  const [status, setStatus] = useState("");


  const hendlePagamentopix = async (token: string) => {
    try {
      const json = await auth.buscarUsuario(usuario?.sub as any);
      if (json !== null) {

        const consumer = json;
        const parcelasSelecionadas = Number(
          (document.querySelector('select[name="installments"]') as HTMLSelectElement)?.value
        );
        const pagametoCredit: PedidoPagamento = {
          numeroDoPedido: numeroDoPedido,
          consumer: {
            document: consumer?.cpf.replace(/\D/g, ''),
            type: "individual",
            name: consumer?.nome,
            email: consumer?.email,
            phones: {
              mobile_phone: {
                area_code: consumer?.phoneNumer.slice(0, 2),
                number: consumer?.phoneNumer.slice(2),
                country_code: "55"
              }
            }
          },
          payments: [
            {
              payment_method: selectedMethod,
              credit_card: {
                statement_descriptor: empresaName.slice(0, 12),
                installments: parcelasSelecionadas,
                card_token: token
              }
            }
          ]
        }
        console.log("Resposta bancked " + JSON.stringify(pagametoCredit))
        const resposta = await ApiPagamento.pagamento(pagametoCredit);
        if (resposta !== null) {
          if (formRef.current) {
            formRef.current.reset(); // limpa todos os campos
            setParcelas(1); // se quiser resetar o select também

          }
          
          console.log("Resposta de cartao " + JSON.stringify(resposta))
                       setStatus("success")

        }
              setAtivoResposta(false)

      }
      setAtivoResposta(false)

      return null;
    } catch (error: any) {
                setAtivoResposta(false)

      console.log("Ocorreu um erro " + JSON.stringify(error))
    }
  }

  const [submitted, setSubmited] = useState(false);

  useEffect(() => {
    script.src = "https://checkout.pagar.me/v1/tokenizecard.js";
    script.async = true;
    script.setAttribute("data-pagarmecheckout-app-id", "pk_test_1QMVeBVMF0cvegqz");
    document.body.appendChild(script);

    script.onload = () => {

      const success = (data: any) => {
        // if (submitted) return false; // já enviou, não faz nada
        const token = data["pagarmetoken-0"];
        if (token !== null) {
          setSubmited(true);
             setAtivoResposta(true)
             setStatus("processing")
          hendlePagamentopix(token);
        } else {
          console.error("Token não foi gerado!");
        }
        return false;
      };

      const fail = (error: any) => {
        console.error("Erro ao gerar token:", error);
        setAtivoResposta(false)
      };

      pagar.PagarmeCheckout.init(success, fail);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useImperativeHandle(ref, () => ({

    submitForm: () => {
      if (!formRef.current) {
        console.warn("[CheckoutCustom] submitForm chamado mas formRef vazio");
        return;
      }
      console.log("[CheckoutCustom] submitForm -> requestSubmit()");
      // requestSubmit dispara o evento submit do form (melhor que dispatchEvent)
      try {
        formRef.current.requestSubmit();
      } catch (e) {
        console.warn("[CheckoutCustom] requestSubmit falhou, usando dispatchEvent fallback", e);
        formRef.current.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
      }
    },
  }));

  return (
    <Template.form ref={formRef} data-pagarmecheckout-form onSubmit={(e) => e.preventDefault()}>
      <Template.campos
        type="text"
        name="card-number"
        data-pagarmecheckout-element="number"
        placeholder="Número do cartão"
        required
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
          if (value.length >= 16) {
            value = value.slice(0, 16)
          }
          e.target.value = value;
        }}
      />
      <Template.campos
        id="holder-name"
        type="text"
        name="holder-name"
        data-pagarmecheckout-element="holder_name"
        placeholder="Titular do cartão"
        required
      />
      <Template.Card>
        <Template.campos
          type="text"
          name="cvv"
          data-pagarmecheckout-element="cvv"
          placeholder="CVV"
          required
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
            if (value.length >= 2) {
              value = value.slice(0, 4)
            }
            e.target.value = value;
          }}
        />
        <Template.campos2
          type="text"
          name="card-exp-month"
          data-pagarmecheckout-element="exp_month"
          placeholder="Mês"
          required
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
            if (value.length >= 2) {
              value = value.slice(0, 2)
            }
            e.target.value = value;
          }}
        />
        <Template.campos2
          type="text"
          name="card-exp-year"
          data-pagarmecheckout-element="exp_year"
          placeholder="Anos"
          required
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = e.target.value.replace(/\D/g, ''); // remove tudo que não é número
            if (value.length >= 2) {
              value = value.slice(0, 2) + value.slice(2, 4); // transforma em MM-YY
            }
            e.target.value = value;
          }}
        />

      </Template.Card>
      <Template.campos
        as="select"
        name="installments"
        value={parcelas}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setParcelas(Number(e.target.value))}
        required
      >
        {[...Array(12)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}x de R$ {(valorTotal / (i + 1)).toFixed(2)}
          </option>
        ))}
      </Template.campos>
      {
        ativoResposta &&
        <PaymentModal status={status}></PaymentModal>
      }
    </Template.form>
  );
});

export default CheckoutCustom;
