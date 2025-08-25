import {ConteinerMain,ConteineTitulo,ConteinerCenter,ConteinerFooter,Itens} from "./footerCss"
export const FootComponet = ()=>{
    return(
        <ConteinerMain>
          <ConteineTitulo>
            <h1>10+</h1>
            <h1>10+</h1>
            <h1>10+</h1>
            <h1>10+</h1>
          </ConteineTitulo>
          <ConteinerCenter>
            <h1>Baixe o App</h1>
            <h5>Tenha o zapdai sem com voce. Peça com facilidade e acompanhe seu <br/>delivery em tempo real</h5>
            <button>App Storage</button>
          </ConteinerCenter>
          <ConteinerFooter>
            <Itens>
                <h1>Zapdai</h1>
                <button>Nosso Planos</button>
            </Itens>
          </ConteinerFooter>
        </ConteinerMain>
    )
}