import { Calendar, HourglassHigh, HourglassMedium, Star } from "phosphor-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getBackdropPath = (backdropPath, size = "w1280") => {
        return `https://image.tmdb.org/t/p/${size}${backdropPath}`;
    };

    const getMovie = async url => {
        const resp = await fetch(url);
        const data = await resp.json();

        setMovie(data);
    };

    useEffect(() => {
        const fetchMovieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
        getMovie(fetchMovieUrl);
    }, [id]);

    return (
        <div className="flex flex-col items-center gap-4">
            {movie && (
                <div className="h-full w-full bg-black from-55% to-0% pt-44 bg-blend-overlay">
                    <div
                        style={{ backgroundImage: `url(${getBackdropPath(movie.backdrop_path)})` }}
                        className="h-screen w-full rounded-lg bg-cover p-4 text-zinc-50 shadow-lg"
                    >
                        <div className="mt-20 max-w-4xl rounded-lg bg-black/40 p-4 opacity-95 backdrop-blur-sm">
                            <div className="flex flex-col gap-4 p-8">
                                <h2 className="text-3xl">{movie.title}</h2>
                                <h3 className="text-xl">{movie.tagline}</h3>
                                <p>
                                    <Star className="mr-1 mb-1 inline-block" size={20} />
                                    Avaliação: {movie.vote_average.toFixed(1)} / 10
                                </p>
                                <p>{movie.overview}</p>
                                <p>
                                    <HourglassMedium className="mr-1 mb-1 inline-block" size={20} />
                                    Duração: {movie.runtime} minutos
                                </p>
                                <p>
                                    <Calendar className="mr-1 mb-1 inline-block" size={20} />
                                    Data de Lançamento: {movie.release_date}
                                </p>
                                <button className="w-36 rounded bg-zinc-600/15 px-4 py-2 font-bold text-zinc-400 transition-all duration-300 hover:bg-zinc-600">
                                    <a
                                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Ver no IMDB
                                    </a>
                                </button>
                                <button className="w-36 rounded bg-red-500/70 px-4 py-2 font-bold text-zinc-50 transition-all duration-300 hover:bg-red-600">
                                    Assistir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
