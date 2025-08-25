import styled from "styled-components";

export default {
  container: styled.header`
    display:flex;
    justify-content: space-between;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', sans-serif;
    padding:20px 40px;
    gap:20px;
background: linear-gradient(135deg, #ff3c00 0%, #ff6a00 50%, #ff2e00 100%);
    color: white;

    `,
  logo: styled.img`
    width:150px;
    height:35px;
    object-fit:contain;
    `,
  busca: styled.input`
      width:50%;
      border-radius:5px;
      padding:5px;
    `,
  ButtomService: styled.button` 
  display:flex;
  align-items:center;
background-color: var(--cor-principal);
color: var(--cor-font);
   height:30px;
    padding:5px 15px;
    gap:5px;
    border-radius:10px;
    border:0;
    cursor:pointer;
    transition: background-color 0.3s ease;
&:active {
    transform: scale(0.95);
  }
  &:hover {
    background-color: #e23e14ff; /* ou qualquer cor de hover */
    color: white;              /* opcional */
  }
    `,
    car: styled.button` 
  display:flex;
  align-items:center;
background-color:transparent;
color: var(--cor-font);
   height:30px;
    padding:5px 15px;
    gap:5px;
    border-radius:10px;
    border:0;
    cursor:pointer;
    transition: background-color 0.3s ease;
    &:active {
    transform: scale(0.95); /* Dá um "zoom" menor quando clicado */
  }
    `,
  iconCar: styled.section``,
  perfil: styled.div``
}