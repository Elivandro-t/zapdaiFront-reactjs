import {Titulo,SubTitulo2,FootBottom, Hr,ConteinerMain,Logo,SubMunu, ConteineTitulo,Storage,SubMunuItens, BtnDivide, ConteinerCenter, ConteinerFooter, Itens, IconeItens, H1, SubTitule } from "./footerCss"
import logo from "../../assets/logowhite.png"
const itens = [
  {
    h1: "10+", sub: "Empresas Parceiras", color: ""
  },
  {
    h1: "5K+", sub: "Pedidos Entregues", color: ""
  },
  {
    h1: "30min", sub: "Tempo Médio", color: ""
  },
  {
    h1: "4.8★", sub: "Avaliação Média", color: ""
  }
]

export const FootComponet = () => {

  return (
    <ConteinerMain>
      <ConteineTitulo>
        {itens.map(item => (
          <IconeItens>
            <H1>{item.h1}</H1>
            <SubTitule>{item.sub}</SubTitule>
          </IconeItens>
        ))}
      </ConteineTitulo>
      <ConteinerCenter>
        <h1>Baixe o App</h1>
        <SubTitule>Tenha o zapdai sempre com você. Peça com facilidade e acompanhe seu delivery em tempo real.</SubTitule>
        <BtnDivide>
          <Storage color={false}>App Storage</Storage>
          <Storage color={false}>App Storage</Storage>
        </BtnDivide>
      </ConteinerCenter>
      <ConteinerFooter>
        <Itens>
          <Logo src={logo} />
          <Storage color={true}>Nosso Planos</Storage>
        </Itens>
        <Hr></Hr>
        <SubMunu>
          {Menu.map(item=>(
            <SubMunuItens>
            <Titulo>{item.h1}</Titulo>
            {
              item.children.map(e=>(
                <>
                 <SubTitulo2>{e.titulo}</SubTitulo2>
                </>
              ))
            }
            
          </SubMunuItens>
          ))}
        </SubMunu>
         <FootBottom>
         <Titulo>Redes Sociais</Titulo>
          </FootBottom>
        <Hr></Hr>
      </ConteinerFooter>
       <FootBottom>
            © 2024 Zapdai. Todos os direitos reservados.
        </FootBottom>
    </ConteinerMain>
  )
}


const Menu = [
  {
    h1: "Empresa", children:[
      {
        titulo:"Sobre nós",
        link:""
      },
       {
        titulo:"Carreiras",
        link:""
      },
       {
        titulo:"Blog",
        link:""
      },
       {
        titulo:"Imprensa",
        link:""
      }
    ], color: ""
  },
  {
    h1: "Parceiros", children:[
      {
        titulo:"Seja um restaurante",
        link:""
      },
       {
        titulo:"Seja um entregador",
        link:""
      },
       {
        titulo:"Zapdai Empresas",
        link:""
      }
    ], color: ""
  },
  {
    h1: "Serviços da Plataforma",children:[
      {
        titulo:"Cardápio Digital",
        link:""
      },
       {
        titulo:"Sistema de Pedidos",
        link:""
      },
       {
        titulo:"Serviços de Entregas",
        link:""
      },
       {
        titulo:"Atendente Virtual do WhatsApp",
        link:""
      },
       {
        titulo:"Ver todos Serviços Disponíveis",
        link:""
      }
    ], color: ""
  },
  {
    h1: "Suporte", children:[
      {
        titulo:"Central de Ajuda",
        link:""
      },
       {
        titulo:"Como Comprar no Zapdai",
        link:""
      },
       {
        titulo:"",
        link:""
      },
       {
        titulo:"Como Cadastrar seu Negócio",
        link:""
      },
      {
        titulo:"Contato",
        link:""
      },
      {
        titulo:"Termos de uso",
        link:""
      },
      {
        titulo:"Privacidade",
        link:""
      }
    ], color: ""
  }
]