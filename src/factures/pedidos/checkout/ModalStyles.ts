import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

export default {
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${fadeIn} 0.3s ease forwards;
    z-index: 9999;
  `,
  ModalContainer: styled.div`
    background: #ffffff;
    border-radius: 12px;
    padding: 30px 40px;
    min-width: 280px;
    max-width: 400px;
    text-align: center;
    animation: ${scaleIn} 0.3s ease forwards;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);

    @media (max-width: 480px) {
      width: 90%;
      padding: 20px;
    }
  `,
  Title: styled.h2`
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #333;
  `,
  Message: styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  `,
  Spinner: styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #4caf50;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin: 0 auto 20px auto;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `,
  SuccessIcon: styled.div`
    font-size: 2rem;
    color: #4caf50;
    margin-bottom: 15px;
  `,
};
