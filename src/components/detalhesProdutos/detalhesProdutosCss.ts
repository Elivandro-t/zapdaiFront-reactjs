import { styled } from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const LoadingName = styled.article`
width: 30px;
height: 30px;
color:#000;`;

export const Container = styled.div`
  background-color: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Header = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const QRCodeWrapper = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const QRCode = styled.img`
  width: 200px;
  height: 200px;
`;
export const ExpiredText = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
`;

export const Info = styled.div`
  text-align: center;
`;

export const Amount = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const Countdown = styled.div`
  font-size: 14px;
  color: #555;
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #0059c1;
  }
`;