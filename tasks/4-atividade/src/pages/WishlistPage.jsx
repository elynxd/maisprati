import { Heart, Trash } from "phosphor-react";
import { MovieCard } from "../components/MovieCard";
import { useWishlist } from "../hooks/useWishlist";

export const WishlistPage = () => {
    const { wishlist, removeFromMyWishList, wishlistCount } = useWishlist();

    if (wishlistCount === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <Heart size={64} className="mx-auto mb-4 text-zinc-600" />
                    <h1 className="mb-2 font-bold text-3xl text-zinc-100">
                        Sua Lista de Desejos está Vazia
                    </h1>
                    <p className="mb-8 text-zinc-400">
                        Adicione alguns filmes à sua lista de desejos para vê-los aqui.
                    </p>
                    <Link
                        to="/home"
                        className="inline-block rounded-lg bg-red-600 px-6 py-3 text-white transition-colors duration-200 hover:bg-red-700"
                    >
                        Explorar Filmes
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 pt-44">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="mb-2 font-bold text-3xl text-zinc-100">
                        Minha Lista de Desejos
                    </h1>
                    <p className="text-zinc-400">
                        {wishlistCount} {wishlistCount === 0 ? "filme" : "filmes"} na sua lista
                    </p>
                </div>

                {wishlistCount > 0 && (
                    <button
                        type="button"
                        onClick={removeFromMyWishList}
                        className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-zinc-300 transition-colors duration-200 hover:bg-zinc-700"
                    >
                        <Trash size={16} />
                        Limpar Lista
                    </button>
                )}
            </div>

            {/* Movies Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {wishlist.map(movie => (
                    <MovieCard key={movie.id} movie={movie} showLinkToMovie={true} />
                ))}
            </div>
        </div>
    );
};
