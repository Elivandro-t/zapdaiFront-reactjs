import { styled } from "styled-components";
export default {
  Area:styled.div`
    background-color: #f5f5f5;
        height: 100vh;


  `,
  Container: styled.div`
    max-width: 880px;
    border-radius: 2px;
    margin: 20px auto;
    padding: 50px;
    font-family: Arial, sans-serif;
        background: #fff;

  `,
  Card: styled.div`
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding:30px 10px;
    margin-bottom: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `,
   itemCard:styled.div`
     display:flex;
     gap: 10px;
     flex: 1;
   `,
    itemDetalhes:styled.div`
     display:flex;
     flex-direction: column;
     gap: 10px;
   `,
      cardPrice:styled.div`
     flex: 1;
     display:flex;
     align-items: center;
     justify-content: end;
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
  
  ItemContainer: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  `,
  ItemImage: styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
  `,
  ItemDetails: styled.div`
  display: flex;
  flex-direction: column;
    flex: 1;
    font-size: 14px;
    gap:5px;
  `,
  Bold: styled.span`
    font-weight: bold;
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
  heanderPedido:styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
  `,
tituloPedido  :styled.h4``,
  status:styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  `,
      EmpresaLogo:styled.div`
      display: flex;
      align-items: center;
      gap: 10px;
          margin-bottom: 20px ;

      `,

  logo:styled.img`
  width: 30px;
  height: 30px;
  `,

};