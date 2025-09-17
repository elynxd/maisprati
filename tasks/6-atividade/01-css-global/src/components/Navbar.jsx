import { Button } from "./Button.jsx";
import { AppleLogo } from "phosphor-react";
import { ThemeToggle } from "./ThemeToggle.jsx";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return (
        <div className="navigation">
            <div className="logo">
                <AppleLogo size={32} />
                <h2>Logo</h2>
            </div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Sobre</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1rem",
                    alignItems: "center",
                }}
            >
                <Button variant="ghost" aria-label="Ver carrinho de compras">
                    <ShoppingCart size={24} weight="fill" />
                </Button>
                <p>Tema:</p>
                <ThemeToggle />
            </div>
        </div>
    );
};
