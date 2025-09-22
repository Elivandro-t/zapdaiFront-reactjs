import styled from "styled-components";

export default {
    container:styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
        
    `,
     banner_Main:styled.div`
     display: flex;
    
        
    `,
    banner_left:styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: center;
        
    `,
    banner_right:styled.div`
         flex: 1;
         padding: 0 50px;

        
    `,
     banner_botton:styled.div`
              margin-top:25px;

     background-color: green;
    
        
    `,
    img:styled.img`
    width: 560px;
    box-sizing:border-box;
    border-radius: 10px;
        
    `,
    h1: styled.h1`
             margin-bottom: 10px;

        
    `,
    titulo:styled.span`
    margin: 10px 0;
    font-size: 16px;
    color:#888;
    font-weight:bold;
    `,
    detalhes:styled.div`
        display: flex;
        flex-direction: column;
        gap: 50px;
    `,
    price:styled.h4`
        margin: 10px 0;
        font-size: 26px;
        font-weight: bold;
        color:#FF4500;

    `,
    Itens:styled.div`
     display: flex;
     gap: 10px;
     align-items: center;
    `,
    btn:styled.div`
    padding:5px 10px;
    border-radius:5px;
    background-color: rgba(255, 192, 203, 0.4);
    `,
    span:styled.p``,
    Soma:styled.div`
     display: flex;
     gap: 10px;
     flex-direction: column;
    `,

    botaoSoma:styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

        
    `,
    btnCalcular:styled.button`
    padding: 2px 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    &:active{
        transform:scale(0.99);
        
     }
    `,
    precoTotal:styled.h3``,

    Adicionar:styled.div`

    `,
    Adicionar_btn:styled.button`
    width: 100%;
    border-radius: 10px;
    padding:12px 10px;
    background: linear-gradient(90deg, rgb(255, 0, 0), rgb(255, 165, 0));
    font-size: 18px;
    cursor: pointer;
    &:hover {
                color: aliceblue;

    background-color:  rgb(255, 165, 0); /* Laranja mais forte ao passar o mouse */
     }
     &:active{
        transform:scale(0.99);
        
     }

    `
}