import {
  BtnIconEmpresa,
  Section,
  Title,
  ItemsRow,
  Card,
  Image,
  ItemsRowWrapper,
  NavButton
} from "./mainCss";
import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { SimpleDialog } from "../detalhesProdutos/detalhesProdutos";


type produtos = {
  title: string,
  items: any[],
  ref: React.RefObject<HTMLDivElement>,
  ativo: boolean,
  destaque?: string;


}
export const ItensComponent = (produtos: produtos) => {
  const scrollRow = (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
    if (ref.current) {
      const scrollAmount = 220; // largura aproximada do card + gap
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
   const [open, setOpen] = React.useState(false);
   const [lista, setLista] = React.useState<any>(null);
  
    const handleClickOpen = (item:any) => {
      setLista(item)
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <Section destaque={produtos.destaque}>
      {produtos.items.length == 0 && (
        <Box sx={{ width: 300 }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
      {produtos.items.length > 0 && (
        <>
          {produtos.ativo ?
            (<BtnIconEmpresa>empresa</BtnIconEmpresa>) :
            (<Title>{produtos.title}</Title>)


          }
          <ItemsRowWrapper>
            <NavButton left onClick={() => scrollRow(produtos.ref, "left")}>
              <ArrowBackIosIcon sx={{ fontSize: 15 }} />
            </NavButton>
            <ItemsRow ref={produtos.ref}>
              {produtos.items.map((item) => (
                <Card key={item.idProduto} onClick={()=>handleClickOpen(item)}>
                  <Image src={item.imgProduct} alt={item.nome} />
                  <h3>{item.nome}</h3>
                  <p>{item.price}</p>
                  <span>{item.description}</span>
                </Card>
              ))}
            </ItemsRow>
            <NavButton onClick={() => scrollRow(produtos.ref, "right")}>
              <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
            </NavButton>
          </ItemsRowWrapper>
        </>
      )}
      <SimpleDialog open={open} selectedValue={lista} onClose={ handleClose}></SimpleDialog>
    </Section>
  )
}