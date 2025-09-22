import { useContext, useEffect, useState } from "react";
import Container from "./carrinhoCss"
import CloseRoundedIcon from '@mui/icons-material/Close';
import { ItemDoCarrinho } from "./itemDoCarrinho/itemDoCarrinho";
import type { carrinhoType } from "../../types/carrinhoType";
import { contextProduto } from "../../reducer/ProdutoProvaider/providerProdutos";
type ativaCar = {
  hendle: () => void
}
export const CarrinhoDeCompra = ({ hendle }: ativaCar) => {
  useEffect(() => {
    pegarDadosDoCarrinho();
    document.body.style.overflow = "hidden"; // bloqueia scroll
    return () => {
      document.body.style.overflow = "auto"; // libera scroll quando drawer fecha
    };
  }, []);
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const [itens, setitens] = useState<carrinhoType[]>([])
  const pegarDadosDoCarrinho = () => {
    const json = localStorage.getItem("carrinho")
    if (json !== null) {
      const dados = JSON.parse(json);
      setitens(dados)
    }
  }
  return (
    <Container.MainArea onClick={hendle}>
      <Container.AreaCar onClick={handleClick}>
        <Container.AreaHeader>
          <Container.Btn onClick={hendle}>
            <CloseRoundedIcon />
          </Container.Btn>
          <Container.Titulo>Carrinho</Container.Titulo>

        </Container.AreaHeader>

        <Container.AreaMain>
          <ItemDoCarrinho data={itens}></ItemDoCarrinho>
        </Container.AreaMain>
       <Container.henfleBtn>
          <Container.Finally>Finalizar</Container.Finally>
        </Container.henfleBtn>
      </Container.AreaCar>
      
    </Container.MainArea>
  )
}