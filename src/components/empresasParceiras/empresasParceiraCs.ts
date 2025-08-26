import { styled } from "styled-components";

export default {
    Container: styled.div`
    box-sizing: border-box;
     padding: 10px 40px;
    `,
    Titulo: styled.div`
    `,
    MainArea: styled.div`
    display: grid;
    padding: 20px 0;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    `,
    H1: styled.h1`
    font-size: 24px;
    `,
    item: styled.div`
    width:80%;
    border-radius:10px;
    display: flex;
    flex-direction: column;
    align-items: center;
      transition: transform 0.1s ease; 
    padding: 10px;
    cursor: pointer;
    &:hover{
        transform: scale(1.05); /* aumenta 5% */
  transition: transform 0.3s ease; 
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* sombra maior no hover */
    }
    &:active{
        transform: scale(0.95); /* aumenta 5% */
    }
    

    `,
    imgEmpresa: styled.img`
    width: 96px;
    height: 80px;
    margin-bottom:10px;
    border-radius: 10px;
    `,
    empresaName: styled.span``,
}