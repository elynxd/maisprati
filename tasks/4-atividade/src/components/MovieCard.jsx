import { Heart, Star } from "phosphor-react";
import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";

export const MovieCard = ({ movie, showLinkToMovie = true }) => {
    const imageUrl = movie.poster_path ? import.meta.env.VITE_IMG_URL + movie.poster_path : null;

    const { isInMyWishList, toggleMyWishList } = useWishlist();
    const inWithlist = isInMyWishList(movie.id);

    return (
        <div className="w-full max-w-sm overflow-hidden rounded-lg border border-zinc-700 shadow-amber-300 transition-shadow duration-300 hover:shadow-lg">
            <div className="relative aspect-[2/3] bg-zinc-800">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={movie.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={e => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                        }}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-400">
                        <span className="text-sm">Sem Imagem</span>
                    </div>
                )}

                <button
                    type="button"
                    title={inWithlist ? "Remova" : "Adicione"}
                    onClick={() => toggleMyWishList(movie)}
                    className={`absolute top-2 right-2 rounded-full p-2 transition-all duration-200 ${inWithlist ? "text-red-600 shadow-lg" : "bg-red-700 text-zinc-50 hover:bg-black/50 hover:text-red-600"}`}
                >
                    <Heart weight={inWithlist ? "fill" : "regular"} size={22} />
                </button>
            </div>

            <div className="p-4">
                {/* Title with text truncation */}
                <h2 className="mb-2 line-clamp-2 font-bold text-lg" title={movie.title}>
                    {movie.title}
                </h2>

                {/* Overview with text truncation */}
                <p className="mb-3 line-clamp-3 text-sm text-zinc-300" title={movie.overview}>
                    {movie.overview}
                </p>

                {/* Rating with proper flex layout */}
                <div className="flex items-center gap-2 font-semibold text-yellow-400">
                    <Star size={20} weight="fill" />
                    <span>IMDb: {movie.vote_average?.toFixed(1) || "N/A"}</span>
                </div>
            </div>

            {showLinkToMovie && (
                <div className="p-4 pt-0">
                    <Link
                        to={`/movie/${movie.id}`}
                        className="inline-block w-full rounded bg-red-700 px-4 py-2 text-center font-medium text-zinc-50 transition-colors duration-300 hover:bg-red-600"
                    >
                        Detalhes
                    </Link>
                </div>
            )}
        </div>
    );
};
