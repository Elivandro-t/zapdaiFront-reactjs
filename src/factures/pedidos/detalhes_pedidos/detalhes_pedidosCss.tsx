import { styled } from "styled-components";
export default {
  Area:styled.div`
    background-color: #f5f5f5;
  `,
  Container: styled.div`
    max-width: 900px;
    margin:  auto;
    box-sizing:border-box;
    padding: 50px;
    height: 100vh;
    font-family: Arial, sans-serif;
  `,
  Card: styled.div`
    background: #fff;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding:20px 20px;
    margin-bottom: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  `,
  Title: styled.h2`
    font-size: 18px;
    margin-bottom: 14px;
  `,
  StatusContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `,
  StatusItem: styled.div<{ active?: boolean }>`
    flex: 1;
    text-align: center;
    color: ${(props) => (props.active ? "#fff" : "#999")};
    background: ${(props) => (props.active ? "#4caf50" : "#e0e0e0")};
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    font-size: 12px;
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
    width: 80px;
    height: 80px;
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
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  `,
  tituloPedido:styled.h4``,
  status:styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  `

};