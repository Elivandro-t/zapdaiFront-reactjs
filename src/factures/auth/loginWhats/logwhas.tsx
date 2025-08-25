import styled from "styled-components";
interface CamposProps {
  hasError?: boolean;
}


export const Container = styled.section`
display: flex;
position: relative;
flex-direction: column;
padding: 0 20px;
align-items: center;



  @media screen and (min-width: 560px){
background-color:var(--cor-auth);
justify-content: center;
  width: 100%;
  height:var(--height);


  }
`;

export const Form = styled.div`
box-sizing:border-box;
display: flex;
flex-direction: column;
align-items: center;
width: 380px;
border-radius: 10px;
padding: 20px 30px;
 
gap: 20px;
  @media screen and (min-width:430px){
      width: 420px;
      background-color: #FFF;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      padding: 50px 30px;
      height: 350px;



  }

`;


export const Logo = styled.img`
width: 100px;
height: 50px;
object-fit: contain;
cursor: pointer;


`;
export const Titulo = styled.small`
width: 100%;
color: green;
top: -15px;
position: absolute;


`;
export const Btn = styled.button`
margin: 5px 0;
padding: 10px;
width: 100%;
height: 35px;
border:1px solid #d6d6d6;
background-color:transparent;
border-radius: 5px;
&:active {
    transform: scale(0.95);
    font-size: 12px;

  }



`;
export const Campos = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "hasError",
})<CamposProps>`
width: 100%;
height: 42px;
border:1px solid #d6d6d6;
background-color:transparent;
border-radius: 5px;
  border: 1px solid ${({ hasError }) => (hasError ? '#ff4d4f' : '#ccc')};
&:focus {
    outline: none;
    border-color: ${({ hasError }) => (hasError ? '#ff4d4f' : '#007BFF')};
  }
padding:5px;


`;
export const Or = styled.div`
&::before,::after{
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
}

`;
export const BtnLogin = styled.button`
margin: 5px 0;
width: 100%;
height: 35px;
border:1px solid #d6d6d6;
background-color:#007BFF;
border-radius: 5px;
color: #DDD;
font-size: 14px;
font-weight: bold;
    transition: background-color 0.3s ease;

&:active {
    transform: scale(0.95);
    font-size: 12px;

  }
  &:hover {
    background-color: #0056b3;
    color: white; 
  }

`;
export const Select = styled.div`
position: relative;
margin: 5px 0;


`
export const Text = styled.div`
color: blue;
font-size: 18px;
font-family: Arial, Helvetica, sans-serif;
font-weight:600;
margin-bottom:15px;

`;
export const FormSub = styled.form`
width: 100%;
display: flex;
flex-direction: column;
position: relative;
gap: 20px;

`;
export const Erros = styled.div`
position: absolute;
color:#ff4d4f;
 color: #ff4d4f;
  font-size: 13px;
  margin: 0 0 10px;
 

`;

export const Foooter = styled.footer`
position: absolute;
margin: 5px 0;
color: #888;
bottom: 0;


`
export const EsquceuSenha = styled.div`
margin: 5px 0;
display: flex;
align-items: center;
justify-content: end;


`