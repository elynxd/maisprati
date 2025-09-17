import { Button } from "../Button/Button.jsx";
import { AppleLogo } from "phosphor-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { ShoppingCart } from "phosphor-react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.logo}>
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
            <div className={styles.actions}>
                <Button variant="ghost" aria-label="Ver carrinho de compras">
                    <ShoppingCart size={24} weight="fill" />
                </Button>
                <p>Tema:</p>
                <ThemeToggle />
            </div>
        </div>
    );
};
