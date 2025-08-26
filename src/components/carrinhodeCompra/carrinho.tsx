import { useEffect, useState } from "react";
import Container from "./carrinhoCss"
import CloseRoundedIcon from '@mui/icons-material/Close';
import { ItemDoCarrinho } from "./itemDoCarrinho/itemDoCarrinho";
import type { Itens } from "../../types/types";
type ativaCar = {
  hendle: () => void
}
export const CarrinhoDeCompra = ({ hendle }: ativaCar) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // bloqueia scroll
    return () => {
      document.body.style.overflow = "auto"; // libera scroll quando drawer fecha
    };
  }, []);
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const [itens, setitens] = useState<Itens[]>([])
  const pegarDadosDoCarrinho = () => {
    const json = localStorage.getItem("carditem")
    if (json !== null) {
      const dados = JSON.parse(json);
      setitens(dados)
    }
  }
  useEffect(() => {
    pegarDadosDoCarrinho();
  }, [])
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