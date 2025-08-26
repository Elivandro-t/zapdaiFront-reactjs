import styled from "styled-components";

export const Main = styled.div`
  margin-top: 80px;
  padding: 20px 40px;
`;

export const Section = styled.section`
position:relative;
  margin-bottom: 40px;
 background-color: rgba(255, 92, 43, 0.1); /* vermelho suave transparente */
    padding: 20px;
    border-radius: 10px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

export const ItemsRowWrapper = styled.div`
  position: relative;
`;

export const BtnIconEmpresa = styled.img`
width: 40px;
height: 40px;
background-color:transparent;
border-radius: 50%;
margin-bottom:5px;
`;


export const ItemsRow = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 10px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Card = styled.div`
  flex: 0 0 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition:background-color 3s ease-in;

  &:hover{
    transform: scale(0.99);
  }

  h3 {
    font-size: 1rem;
    margin: 8px 0;
    color: #333;
  }

  p {
    font-weight: bold;
    color: #333;
  }

  span {
    font-size: 0.8rem;
    color: #777;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
`;

export const NavButton = styled.button<{ left?: boolean }>`
display: flex;
align-items:center;
  position: absolute;
  justify-content: center;
  top: 40%;
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  background: transparent;
  border: none;
  border-radius: 50%;
  z-index: 10;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
transition: background-color 0.3s ease;
  &:active{
        transform: scale(0.95);

  }

  &:hover {
    background: rgba(255, 255, 255, 1);
  }
`;
