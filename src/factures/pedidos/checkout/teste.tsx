import { useEffect, useRef, useState } from "react";

export default function CheckoutCustom() {
  const formRef = useRef<HTMLFormElement>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // cria o script do tokenizecard.js dinamicamente
    const script = document.createElement("script");
    script.src = "https://checkout.pagar.me/v1/tokenizecard.js";
    script.async = true;
    script.setAttribute("data-pagarmecheckout-app-id", "pk_test_1QMVeBVMF0cvegqz");
    document.body.appendChild(script);

    script.onload = () => {
      if (!(window as any).PagarmeCheckout) {
        console.error("PagarmeCheckout não disponível");
        return;
      }

      const success = (data: any) => {
        console.log("Token gerado:", data.pagarmetoken-0);
          console.log("Token :", data);
        setToken(data.pagarmetoken);

        // aqui você pode enviar para seu backend
        fetch("/api/save-card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ card_token: data.pagarmetoken }),
        });

        return false; // permite o envio do form
      };

      const fail = (error: any) => {
        console.error("Erro ao gerar token:", error);
      };

      (window as any).PagarmeCheckout.init(success, fail);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <form ref={formRef} data-pagarmecheckout-form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="holder-name"
        data-pagarmecheckout-element="holder_name"
        placeholder="Nome no cartão"
        required
      />
      <input
        type="text"
        name="card-number"
        data-pagarmecheckout-element="number"
        placeholder="Número do cartão"
        required
      />
      <input
        type="text"
        name="card-exp-month"
        data-pagarmecheckout-element="exp_month"
        placeholder="Mês"
        required
      />
      <input
        type="text"
        name="card-exp-year"
        data-pagarmecheckout-element="exp_year"
        placeholder="Ano"
        required
      />
      <input
        type="text"
        name="cvv"
        data-pagarmecheckout-element="cvv"
        placeholder="CVV"
        required
      />
      <input type="text" name="buyer-name" placeholder="Nome do comprador" />
      <button type="submit">Enviar</button>

      {token && <p>Token gerado: {token}</p>}
    </form>
  );
}
