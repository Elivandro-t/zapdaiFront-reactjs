// components/CategoriaItem.tsx
import styled from "styled-components";

const ItemContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  text-decoration: none;
  color: #333;
  border-radius: 8px;
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`;

const IconImg = styled.img`
  width: 24px;
  height: 24px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

type Props = {
  nome: string;
  iconUrl: string;
  hendle:(n:any)=>void
};

export const CategoriaItem = ({ nome, iconUrl,hendle }: Props) => {
  return (
    <ItemContainer onClick={()=>hendle(nome)}>
      <IconImg src={iconUrl} alt={nome} />
      <Label>{nome}</Label>
    </ItemContainer>
  );
};
