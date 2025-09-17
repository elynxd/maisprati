import { Button } from "../Button/Button.jsx";
import { AppleLogo } from "phosphor-react";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle.jsx";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 left-0 z-50 flex w-full flex-col items-center justify-between gap-4 bg-white/80 p-8 md:p-8 lg:p-8 shadow-md backdrop-blur-sm dark:bg-gray-900/80 md:flex-row lg:flex-row">
            <div className="flex items-center gap-4">
                <AppleLogo size={32} />
                <h2 className="text-gray-900 dark:text-white">Logo</h2>
            </div>
            <ul className="flex flex-col gap-2 text-center md:flex-row md:gap-4 md:text-left lg:flex-row lg:gap-4">
                <li>
                    <a 
                        href="/" 
                        className="border-b-2 border-b-transparent pb-1 text-lg font-semibold text-gray-900 transition-all duration-300 hover:border-b-blue-500 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="/about" 
                        className="border-b-2 border-b-transparent pb-1 text-lg font-semibold text-gray-900 transition-all duration-300 hover:border-b-blue-500 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                        Sobre
                    </a>
                </li>
                <li>
                    <a 
                        href="/blog" 
                        className="border-b-2 border-b-transparent pb-1 text-lg font-semibold text-gray-900 transition-all duration-300 hover:border-b-blue-500 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    >
                        Blog
                    </a>
                </li>
            </ul>
            <div className="flex items-center gap-4">
                <Button variant="ghost" aria-label="Ver carrinho de compras">
                    <ShoppingCart size={24} weight="fill" />
                </Button>
                <p className="text-gray-900 dark:text-white">Tema:</p>
                <ThemeToggle />
            </div>
        </nav>
    );
};
