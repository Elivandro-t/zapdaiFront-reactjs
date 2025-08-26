import styled from "styled-components";

export default {
    Container:styled.div`
    display: flex;
    box-sizing:border-box;
    padding: 10px;
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
    `
}