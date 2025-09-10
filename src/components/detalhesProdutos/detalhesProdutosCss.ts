import styled from "styled-components";

export default {
    Modal:styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color:rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    `,
    Container:styled.div`
    display: flex;
    box-sizing:border-box;
    padding: 10px 2px;
    border-radius: 5px;
    background-color: #FFF;
    align-items: center;
    justify-content: center;
    gap:10px;
       width:920px;
       height: 450px;
    `,
    containrMian:styled.div`
    width: 400px;
    background-color: red;
    height: 100%;
    `,
    ImagemProduto:styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    `,
    header:styled.div`
    width: 100%;
    height: 30px;
    `
}