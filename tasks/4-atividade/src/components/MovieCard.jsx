import { Link } from "react-router-dom";
import { Star } from "phosphor-react";

export const MovieCard = ({ movie, showLinkToMovie = true }) => {
    const imageUrl = movie.poster_path 
        ? import.meta.env.VITE_IMG_URL + movie.poster_path 
        : null;

    return (
        <div className="w-full max-w-sm border border-zinc-700 rounded-lg overflow-hidden shadow-amber-300 hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-[2/3] bg-zinc-800">
                {imageUrl ? (
                    <img 
                        src={imageUrl} 
                        alt={movie.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}
                
                <div 
                    className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-400"
                    style={{ display: imageUrl ? 'none' : 'flex' }}
                >
                    <span className="text-sm">Sem Imagem</span>
                </div>
            </div>

            <div className="p-4">
                {/* Title with text truncation */}
                <h2 className="text-lg font-bold mb-2 line-clamp-2" title={movie.title}>
                    {movie.title}
                </h2>
                
                {/* Overview with text truncation */}
                <p className="text-sm text-zinc-300 line-clamp-3 mb-3" title={movie.overview}>
                    {movie.overview}
                </p>
                
                {/* Rating with proper flex layout */}
                <div className="flex items-center gap-2 text-yellow-400 font-semibold">
                    <Star size={20} weight="fill" />
                    <span>Rating: {movie.vote_average?.toFixed(1) || 'N/A'}</span>
                </div>
            </div>

            {showLinkToMovie && (
                <div className="p-4 pt-0">
                    <Link
                        to={`/movie/${movie.id}`}
                        className="inline-block font-medium w-full text-center bg-red-700 text-zinc-50 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
                    >
                        Detalhes
                    </Link>
                </div>
            )}
        </div>
    );
};