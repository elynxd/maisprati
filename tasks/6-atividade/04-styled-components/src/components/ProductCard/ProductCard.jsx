import { Star } from "phosphor-react";
import { Button } from "../Button/Button.jsx";
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow);
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border: 1px solid var(--link-hover);
    box-shadow: 0 8px 8px var(--shadow);
  }

  h3 {
    font-size: 1.5em;
    color: var(--text-primary);
    text-align: center;
  }

  p {
    font-size: 1em;
    color: var(--text-secondary);
    text-align: center;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;

const Price = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  color: var(--text-primary);
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1em;
  color: var(--text-primary);
`;

const StarIcon = styled(Star)`
  color: gold;
  font-size: 1.2em;
`;

const Badge = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: var(--badge-bg);
  color: var(--badge-fg);
  padding: 0.3em 0.6em;
  border-radius: 4px;
  font-size: 0.8em;
  font-weight: 600;
  z-index: 10;
  text-transform: uppercase;
`;

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength).trim()}...`;
};

const title =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit - Produto Exemplo para Teste de Truncamento de Texto";
const truncatedTitle = truncateText(title, 45);

export const ProductCard = ({
    title = "Produto",
    description = "Descrição",
    price = "R$ 0,00",
    rating = 0,
    badge = null,
    img = "",
}) => {
    return (
        <Card>
            <ProductImageContainer>
                {badge && <Badge>{badge}</Badge>}
                <ProductImage loading="lazy" src={img} alt={title} />
            </ProductImageContainer>
            <h3 title={title}>{truncatedTitle}</h3>
            <p>{description}</p>
            <Price>{price}</Price>
            <Rating>
                <StarIcon weight="fill" />
                <span>{rating}</span>
            </Rating>
            <Button variant="solid">Adicionar ao carrinho</Button>
            <Button variant="outline">Ver detalhes</Button>
            <Button disabled={true} variant="ghost">Favoritos</Button>
        </Card>
    );
};
