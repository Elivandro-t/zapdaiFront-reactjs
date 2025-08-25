import styled from "styled-components";

export const ConteinerMain = styled.div`
display: flex;
flex-direction: column;
background-color: #171718eb;
color: #f5f5f5;
height: 100vh;
margin:0;
`
export const ConteineTitulo = styled.div`
display: flex;
padding: 50px 150px;

align-items: center;
justify-content: space-between;

`
export const ConteinerCenter = styled.div`
display: flex;
flex-direction: column;
padding: 25px 46px;
gap: 25px;
align-items:center;
justify-content: center;
background:var(--background);
@media screen and (min-width: 786px) {
    padding: 25px 256px;

}
`
export const ConteinerFooter = styled.div`
display: flex;
flex-direction: column;
padding: 25px 256px;
gap: 25px;
height: 100%;
`
export const Itens = styled.div`
display: flex;
justify-content: space-between;
padding:0 10px;

`
export const IconeItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const H1 = styled.h1`
display: flex;
flex-direction: column;
color:orange;
font-size: 38px;
`
export const SubTitule = styled.span`
font-size:18px;
font-weight:300;
font-family:Arial, Helvetica, sans-serif;

`

export const BtnDivide = styled.div`
   display: flex;
   width: 100%;
    justify-content:space-around;
   padding:10px 0;
   @media screen and (min-width: 700px) {
       width: 80%;
        padding:10px 56px;
        justify-content:space-evenly;

   }

`
type size = {
    color:boolean
}
export const Storage = styled.button<size>`
padding:15px 30px;
border-radius:5px;
border:1px solid #999;
  background-color: ${({ color }) => (color ? '#f0742d' : '#141414')};

color:#FFF;

cursor: pointer;


`

export const Logo = styled.img`
object-fit:contain;
width: 100px;
height: 50px;
`
export const Hr = styled.div`
  height: 0.5px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 10px 0;
`

export const SubMunu = styled.div`
 display: flex;
 justify-content:space-between;
 width: 100%;
`

export const SubMunuItens = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
 
`

export const Titulo = styled.span`
color: orange;
font-family:bold;
font-family:Arial, Helvetica, sans-serif;
font-size:18px;
 
`
export const SubTitulo2 = styled.small`
font-family:Arial, Helvetica, sans-serif;
font-size:15px;
margin:10px 0;
font-weight:400;
cursor: pointer;
color: #888;

 
`
export const FootBottom = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
align-items:center;
justify-content: center;
color: #888;
 
`