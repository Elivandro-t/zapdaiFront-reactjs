import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const Modal = styled.div`
  background: #fff;
  width: 90%;
  max-width: 400px;
  padding: 24px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled.div`
  font-size: 52px;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  color: #222;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const RetryButton = styled.button`
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.97);
  }
`;
//npm install styled-components
//npm install @types/styled-components -D   # se for TypeScript
//npm install styled-components
//npm install framer-motion^C