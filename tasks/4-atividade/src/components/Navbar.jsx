import { FilmStrip, Heart, MagnifyingGlass } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";

export const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const { wishlistCount } = useWishlist();

    const handleSubmit = e => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    };

    return (
        <>
            <nav className="fixed z-50 flex w-full bg-zinc-900/10 p-4 text-zinc-50 backdrop-blur-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="inline-flex items-center gap-2 text-red-600">
                        <h1 className="inline-flex gap-4 font-bold text-2xl">
                            <FilmStrip size={32} />
                            MovieFlix
                        </h1>
                    </Link>

                    <div className="flex items-center gap-8">
                        <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="ml-4 rounded border border-gray-300 bg-zinc-600 px-3 py-1 text-zinc-50"
                                onChange={e => setSearch(e.target.value)}
                                value={search}
                            />
                            <button
                                type="submit"
                                className="item ml-2 inline-flex items-center gap-2 rounded bg-red-700 px-3 py-1 font-bold transition-all duration-300 hover:bg-red-600"
                            >
                                <MagnifyingGlass size={16} weight="bold" />
                                Buscar
                            </button>
                        </form>
                        <Link
                            to="/wishlist"
                            className="relative flex items-center gap-2 text-zinc-300 transition-colors hover:text-white"
                        >
                            <Heart size={20} />
                            Lista de Desejos
                            {wishlistCount > 0 && (
                                <span className="-top-2 -right-2 absolute flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white text-xs">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
