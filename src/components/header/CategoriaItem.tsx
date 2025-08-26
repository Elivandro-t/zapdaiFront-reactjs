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
  href?: string;
};

export const CategoriaItem = ({ nome, iconUrl, href = "#" }: Props) => {
  return (
    <ItemContainer href={href}>
      <IconImg src={iconUrl} alt={nome} />
      <Label>{nome}</Label>
    </ItemContainer>
  );
};
