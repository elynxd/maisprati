import { Star } from "phosphor-react";
import { Button } from "../Button/Button.jsx";

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
        <div className="mx-auto flex w-full max-w-[350px] flex-col items-center gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg dark:border-gray-600 dark:bg-gray-800">
            <div className="relative w-full">
                {badge && (
                    <span className="absolute right-2 top-2 z-10 rounded bg-red-600 px-2 py-1 text-xs font-semibold uppercase text-white">
                        {badge}
                    </span>
                )}
                <img 
                    loading="lazy" 
                    src={img} 
                    alt={title} 
                    className="h-[200px] w-full rounded object-cover"
                />
            </div>
            <h3 
                title={title} 
                className="text-center text-xl font-semibold text-gray-900 dark:text-white"
            >
                {truncatedTitle}
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{price}</p>
            <div className="flex items-center gap-2 text-gray-900 dark:text-white">
                <Star weight="fill" className="text-lg text-yellow-500" />
                <span>{rating}</span>
            </div>
            <Button variant="solid">Adicionar ao carrinho</Button>
            <Button variant="outline">Ver detalhes</Button>
            <Button disabled={true} variant="ghost">Favoritos</Button>
        </div>
    );
};
