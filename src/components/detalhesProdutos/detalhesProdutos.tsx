import { useEffect, useState } from "react";
import type { PixPayment } from "../../types/pagamento/pix";
import { Actions, Amount, Button, Container, LoadingName, Countdown, ExpiredText, Header, Info, Modal, QRCode, QRCodeWrapper } from "./detalhesProdutosCss"
import { Loading } from "../../factures/auth/verify-code/verifyCode";
import { Backdrop, CircularProgress } from "@mui/material";
export type SimpleDialogProps = {
  open: boolean;
  onClose: () => void;
  respostaPix: PixPayment;
  nomeLoja: string;
};

export function SimpleDialog({ open, onClose, respostaPix, nomeLoja }: SimpleDialogProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  // Atualiza contagem regressiva
  useEffect(() => {
    if (!open) return;

    const expires = new Date(respostaPix.expiresAt).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((expires - now) / 1000));
      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [open, respostaPix.expiresAt]);

  // Função copiar chave PIX
  const handleCopy = () => {
    navigator.clipboard.writeText(respostaPix.copyQR);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Função atualizar QR (chamar backend / API)
  const handleAtualizar = () => {
    window.location.reload(); // Exemplo simples: recarregar ou chamar função que atualiza respostaPix
  };

  if (!open) return null;

  return (
    <Modal onClick={onClose}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Header>{nomeLoja}</Header>

        <QRCodeWrapper>
          {timeLeft > 0 ? (
            <QRCode src={respostaPix.qrCodeUrl} alt="QR Code Pix" />
          ) : (
            <ExpiredText>
               Carregando...
            </ExpiredText>
          )}
        </QRCodeWrapper>

        <Info>
          <Amount>Valor: R$ {respostaPix.amount.toFixed(2)}</Amount>
          {timeLeft > 0 && <Countdown>Expira em: {timeLeft}s</Countdown>}
        </Info>
                    <h4><strong>chave:</strong> {respostaPix.copyQR.slice(0,10)}...</h4>

        <Actions>
          <Button onClick={handleCopy}>{copied ? "Copiado!" : "Copiar chave PIX"}</Button>
          <Button onClick={handleAtualizar}>Atualizar QR</Button>
        </Actions>
      </Container>
    </Modal>
  );
}