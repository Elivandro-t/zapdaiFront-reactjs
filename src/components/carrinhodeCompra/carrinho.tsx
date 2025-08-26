import { useEffect } from "react";
import Container from "./carrinhoCss"
import CloseRoundedIcon from '@mui/icons-material/Close';
type ativaCar = {
    hendle:()=>void
}
export const CarrinhoDeCompra = ({hendle}:ativaCar)=>{
    useEffect(() => {
  document.body.style.overflow = "hidden"; // bloqueia scroll
  return () => {
    document.body.style.overflow = "auto"; // libera scroll quando drawer fecha
  };
}, []);
     const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // ✅ agora está certo
  };
    return(
       <Container.MainArea onClick={hendle}>
        <Container.AreaCar onClick={handleClick}>
            <Container.AreaHeader>
                            <Container.Btn onClick={hendle}>
                                <CloseRoundedIcon/>
                            </Container.Btn>
                            <Container.Titulo>Carrinho</Container.Titulo>

            </Container.AreaHeader>
        </Container.AreaCar>
       </Container.MainArea>
    )
}