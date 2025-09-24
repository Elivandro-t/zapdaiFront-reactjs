import React from "react";
import Styles from "./ModalStyles";
type Status = {
    status:string
}
export default function PaymentModal({ status }:Status) {
  /**
   * status = 'processing' | 'success' | null
   */

  if (!status) return null;

  return (
    <Styles.Overlay>
      <Styles.ModalContainer>
        {status === "processing" && (
          <>
            <Styles.Spinner />
            <Styles.Title>Processando pagamento...</Styles.Title>
            <Styles.Message>Por favor, aguarde enquanto confirmamos seu pagamento.</Styles.Message>
          </>
        )}
        {status === "success" && (
          <>
            <Styles.SuccessIcon>✅</Styles.SuccessIcon>
            <Styles.Title>Pagamento aprovado!</Styles.Title>
            <Styles.Message>O pagamento foi processado com sucesso.</Styles.Message>
          </>
        )}
      </Styles.ModalContainer>
    </Styles.Overlay>
  );
}
