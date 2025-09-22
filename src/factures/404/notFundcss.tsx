import styled, { keyframes } from "styled-components";
// Animação de entrada
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
`;

// Container principal
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff3e0;
  text-align: center;
  padding: 20px;
  gap: 30px;
  animation: ${fadeIn} 0.8s ease forwards;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #ff5722;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ZapDaiLogo = styled.span`
  font-weight: bold;
  color: #ff5722;
  font-size: 1.2rem;
  display: block;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 20px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.2);
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
    padding: 15px 40px;
  }
`;

export const Image = styled.img`
  width: 60%;
  max-width: 300px;
  margin: 20px 0;
  animation: ${fadeIn} 1s ease forwards;

  @media (min-width: 768px) {
    width: 300px;
  }
`;