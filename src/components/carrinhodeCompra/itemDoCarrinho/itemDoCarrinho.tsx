import type { Itens } from "../../../types/types"
import Template from "./itemDoCarrinhoCss"
type Props = {
    data:Itens[]
}
export const ItemDoCarrinho = ({data}:Props)=>{
    return(
    <>
    {data.length<=0&&(
        <Template.ContainerTop >Sacola vazia</Template.ContainerTop>
    )}
      {data.map((item, index) => (
        <Template.ContainerTop key={index}>
          <Template.Imagem src={item.imgUrl || ""} alt={item.productName} />
          <Template.ContainerInt>
            <Template.Titulo>{item.productName}</Template.Titulo>
            <Template.Price>R$ {item.price.toFixed(2)}</Template.Price>

            <Template.ContainerBTN>
              <Template.priceSegundary>
                R$ {(item.price * item.amountQTD).toFixed(2)}
              </Template.priceSegundary>

              <Template.henderBtn>-</Template.henderBtn>
              <Template.input value={item.amountQTD} readOnly />
              <Template.henderBtn>+</Template.henderBtn>
            </Template.ContainerBTN>
          </Template.ContainerInt>
        </Template.ContainerTop>
      ))}
    </>
    )
}