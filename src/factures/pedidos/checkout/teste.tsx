
import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import Template from "./form"
export type CheckoutCustomRef = {
  submitForm: () => void;
};
const CheckoutCustom = forwardRef<CheckoutCustomRef>((props, ref) => {
  const pagar = (window as any);
  const formRef = useRef<HTMLFormElement>(null);
  const script = document.createElement("script");

  useEffect(() => {
    script.src = "https://checkout.pagar.me/v1/tokenizecard.js";
    script.async = true;
    script.setAttribute("data-pagarmecheckout-app-id", "pk_test_1QMVeBVMF0cvegqz");
    document.body.appendChild(script);

    script.onload = () => {

      const success = (data: any) => {
        console.log("Token gerado:", data);
        return false; // permite o envio do form
      };

      const fail = (error: any) => {
        console.error("Erro ao gerar token:", error);
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
      />
      <Template.campos
         id="holder-name"
        type="text"
        name="holder-name"
        data-pagarmecheckout-element="holder_name"
        placeholder="Titular do cartão"
        required
      />
      {/* <Template.campos
        type="text"
        name="card-exp-month"
        data-pagarmecheckout-element="exp_month"
        placeholder="Mês"
        required
      /> */}

      <Template.Card>
        {/* <Template.campos
        type="text"
        name="card-exp-year"
        data-pagarmecheckout-element="exp_year"
        placeholder="Ano"
        required
      /> */}
        <Template.campos
          type="text"
          name="cvv"
          data-pagarmecheckout-element="cvv"
          placeholder="CVV"
          required
        />
        <Template.campos2
          type="text"
          name="card-exp-month"
          data-pagarmecheckout-element="exp_month"
          placeholder="Mês"
          required
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
              value = value.slice(0, 2) + '-' + value.slice(2, 4); // transforma em MM-YY
            }
            e.target.value = value;
          }}
        />
      </Template.Card>
    </Template.form>
  );
});

export default CheckoutCustom;
