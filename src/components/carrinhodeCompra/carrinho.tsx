import { useEffect, useState } from "react";
import Container from "./carrinhoCss"
import CloseRoundedIcon from '@mui/icons-material/Close';
import { ItemDoCarrinho } from "./itemDoCarrinho/itemDoCarrinho";
import type { carrinhoType } from "../../types/carrinhoType";
import { Navigate, useNavigate } from "react-router-dom";
import { LoadingSecundary } from "../LoadingSecundary/LoadingSecundary";
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
  const [loading,setLoading] = useState(false)
  const [itens, setitens] = useState<carrinhoType[]>([])
  const pegarDadosDoCarrinho = () => {
    const json = localStorage.getItem("carrinho")
    if (json !== null) {
      const dados = JSON.parse(json);
      setitens(dados)
    }
  }
  const soma = () => {
    const total = itens?.reduce((acc, item) => acc + item.price * item.quantidade, 0)
    return total;

  }
  const navigate = useNavigate()
const   hendleRouterEndereco = ()=>{
      setLoading(true)

  if(itens.length>0){
     setTimeout(()=>{
      navigate("/forma-entrega")
     },2000)
  }else{
    setLoading(false)
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
        <Container.AreaDetalhes>
          <Container.nome >Produtos</Container.nome>
          <Container.price>{soma().toFixed(2)}</Container.price>
        </Container.AreaDetalhes>
        <Container.henfleBtn>

          <Container.Finally onClick={hendleRouterEndereco}>Finalizar  R$ {soma().toFixed(2)}</Container.Finally>
        </Container.henfleBtn>
      </Container.AreaCar>
      {loading &&
      <LoadingSecundary></LoadingSecundary>
      }

    </Container.MainArea>
  )
}