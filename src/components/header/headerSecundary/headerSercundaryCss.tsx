import { styled } from "styled-components";

export default {
Header:styled.header`
  position: sticky;
  top: 0;
     /* background: linear-gradient(135deg, #ff3c00 0%, #ff6a00 50%, #ff2e00 100%); */
     background-color: #FFF;
       box-shadow: 0 4px 12px rgba(236, 231, 231, 0.3), 0 2px 6px rgba(112, 111, 111, 0.1); /* sombra */




  color: #6d6969;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
`,

Logo:styled.img`
  height: 50px;
  cursor: pointer;
`,

 Nav:styled.nav`
  display: flex;
  gap: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`,

}