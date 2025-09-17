import { Star } from "phosphor-react";
import { Button } from "../Button/Button.jsx";
import styles from "./ProductCard.module.css";

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
        <div className={styles.productCard}>
            <div className={styles.productImageContainer}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <img loading="lazy" src={img} alt={title} className={styles.image} />
            </div>
            <h3 title={title}>{truncatedTitle}</h3>
            <p>{description}</p>
            <p className={styles.price}>{price}</p>
            <div className={styles.rating}>
                <Star className={styles.star} weight="fill" />
                <span>{rating}</span>
            </div>
            <Button variant="solid">Adicionar ao carrinho</Button>
            <Button variant="outline">Ver detalhes</Button>
            <Button disabled={true} variant="ghost">Favoritos</Button>
        </div>
    );
};
