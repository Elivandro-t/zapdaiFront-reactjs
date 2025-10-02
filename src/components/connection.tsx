import React from "react";
import { Container, Modal, Icon, Title, Message, RetryButton } from "./conectioncss";
import { motion } from "framer-motion";

type Props = {
  onRetry: () => void;
};

export default function NoConnectionModal({ onRetry }: Props) {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Modal>
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Icon>📶❌</Icon>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Title>Sem conexão</Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Message>
              Parece que você está offline.  
              Verifique sua conexão e tente novamente.
            </Message>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <RetryButton onClick={onRetry}>🔄 Tentar novamente</RetryButton>
          </motion.div>
        </Modal>
      </motion.div>
    </Container>
  );
}
