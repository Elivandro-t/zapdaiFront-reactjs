import { styled } from "styled-components";
export default {
  Area:styled.div`
    background-color: #f5f5f5;
  `,
  Container: styled.div`
    max-width: 980px;
    margin:  auto;
    box-sizing:border-box;
    padding: 50px ;
    height: 100vh;
    font-family: Arial, sans-serif;
  `,
  Card: styled.div`
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding:35px 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  `,
 titulo:styled.div`
 width: 100%;
 font-weight:bold;
 color: red;
 `,
  Button: styled.button`
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;

    &:hover {
      background-color: #45a049;
    }
     &:active {
     transform: scale(0.97);
    }
  `,

  SummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 5px;
  `,
  TotalRow: styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 16px;
    margin-top: 10px;
  `,
  checkout:styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right:10px;

  `,
  detalhesItens:styled.div``,
  cardPagamento:styled.div`
    width: 100%;

  display: flex;
  align-self: center;
  background-color: #FFFF;
  border-radius: 10px;
  justify-content: space-between;
  border: 1px solid #888;
  color: #837878;
  padding: 30px 10px;
  cursor: pointer;
  &:hover{
    transform: scale(0.97);
    outline: auto;
    outline-color:#5ed0f3;
  }
    
  `,
  imagem:styled.img`
  width: 80px;
  object-fit: contain;
  `,
  Cardtitulo:styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 600;
  `,
  CardSubtitulo:styled.small``,
    CardCenter:styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 5px;
    `,


};