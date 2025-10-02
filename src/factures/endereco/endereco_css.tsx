import styled from "styled-components";

export default {
    
    container:styled.div`
    max-width: 800px;
    padding: 0 50px;
    margin:auto;
    height: 100vh;
        
    `,
    form:styled.section`
    width: 100%;
    height: 56px;
    background-color: #ffff;
    margin: 50px 0;
    display: flex;
    align-items: center;
    padding:20px 10px;
    gap: 10px;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.1s ease-in-out;
    

    cursor: pointer;
    &:hover{
       transform:translateX(1px);
    }
    &:active{
       transform:scale(0.99);
    }
    `,
    checkbox:styled.input`
    width: 20px;
    height: 20px;;
    `,
    Label:styled.label`
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    `,
    btn:styled.button`
      width: 100%;
      border-radius: 5px;
      background-color:blue;
      padding: 10px;
      margin: 10px 0;
      &:hover{
        background-color: #55a9f3;
        cursor: pointer;
      }
      &:active{
        transform:scale(0.99);
        color: #FFFF;
      }
        
    `
}