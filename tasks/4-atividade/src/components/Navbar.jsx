import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlass, FilmStrip } from "phosphor-react";
import { useState } from "react";

export const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/search?q=${search}`);
        setSearch("");
    }

    return (
        <>
            <nav className="z-50 fixed flex w-full bg-zinc-900/10 backdrop-blur-sm  p-4 text-zinc-50">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-red-600 inline-flex items-center gap-2">
                        <h1 className="inline-flex gap-4 font-bold text-2xl">
                            <FilmStrip size={32} />
                            MovieFlix
                        </h1>
                    </Link>
                    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="ml-4 rounded border border-gray-300 bg-zinc-600 px-3 py-1 text-zinc-50"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center gap-2 item ml-2 rounded bg-red-700 px-3 py-1 font-bold transition-all duration-300 hover:bg-red-600"
                        >
                            <MagnifyingGlass size={16} weight="bold" />
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>
        </>
    );
};
