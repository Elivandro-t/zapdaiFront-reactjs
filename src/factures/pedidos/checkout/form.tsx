import styled from "styled-components";

export default {
    form: styled.form`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 20px;
    position: relative;
    margin: 20px 0;
    `,
    Card: styled.div`
     width: 100%;
     display: flex;
     gap: 10px;
     justify-content: space-between;
    `,
    campos: styled.input`
     padding: 12px ;
     outline:none;
     width: 100%;
        
    `,
    campos2: styled.input`
     padding:12px  5px;
          outline:none;

     width: 100px;
        
    `,
    Label:styled.label`
    `
}