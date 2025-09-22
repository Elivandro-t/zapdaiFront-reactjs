import styled from "styled-components";

export default {
  container: styled.div`
    background-color: #f2f2f2;
    min-height: 100vh;
  `,
  area_pedidos: styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  `,
  titulo: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  `,
  pedidos: styled.section`
    display: flex;
    flex-direction: column; /* Mantém itens um abaixo do outro */
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
  `,
  cardItem: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    width: 100%;
    background: #fff;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,
  card_item_header: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  card_item_center: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  numeroDoPedido: styled.h4`
    font-size: 18px;
    color: #141212;
    font-weight: bold;
  `,
  btnAguadandoPagamento: styled.div`
    background-color: #eeb853;
    color: #fff;
    padding: 6px 12px;
    border-radius: 10px;
    font-size: 14px;
  `,
  price: styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #000;
  `,
  Image: styled.img`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    object-fit: cover;
  `,
  Hr: styled.hr`
    width: 100%;
    height: 1px;
    background-color: #c06262;
    opacity: 0.1;
    margin: 10px 0;
  `,
  dataPedido: styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 5px;
  padding-left: 5px;
`,

};
