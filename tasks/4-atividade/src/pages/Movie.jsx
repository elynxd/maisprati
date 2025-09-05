import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Calendar, HourglassHigh, HourglassMedium, Star } from "phosphor-react";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getBackdropPath = (backdropPath, size = 'w1280') => {
        return `https://image.tmdb.org/t/p/${size}${backdropPath}`;
    }

    const getMovie = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();

        setMovie(data);
    }

    useEffect(() => {
        const fetchMovieUrl = `${moviesURL}${id}?api_key=${apiKey}`;
        getMovie(fetchMovieUrl);
    }, [id]);

    return (
        <div className="flex flex-col items-center gap-4">
            {movie &&
                <div className="bg-blend-overlay from-55% to-0% bg-black w-full h-full">
                    <div
                        style={{ backgroundImage: `url(${getBackdropPath(movie.backdrop_path)})` }}
                        className="w-full h-screen bg-cover p-4 rounded-lg shadow-lg text-zinc-50">
                        <div className="bg-black/40 backdrop-blur-sm opacity-95 p-4 rounded-lg max-w-4xl mt-20">
                            <div className="flex gap-4 flex-col p-8">
                                <h2 className="text-3xl">{movie.title}</h2>
                                <h3 className="text-xl">{movie.tagline}</h3>
                                <p>
                                    <Star className="inline-block mr-1 mb-1" size={20} />
                                    Avaliação: {movie.vote_average.toFixed(1)} / 10
                                </p>
                                <p>{movie.overview}</p>
                                <p>
                                    <HourglassMedium className="inline-block mr-1 mb-1" size={20} />
                                    Duração: {movie.runtime} minutos</p>
                                <p>
                                    <Calendar className="inline-block mr-1 mb-1" size={20} />
                                    Data de Lançamento: {movie.release_date}</p>
                                <button className="bg-zinc-600/15 text-zinc-400 w-36 px-4 py-2 rounded font-bold hover:bg-zinc-600 transition-all duration-300">
                                    <a
                                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Ver no IMDB
                                    </a>
                                </button>
                                <button className="bg-red-500/70 text-zinc-50 w-36 px-4 py-2 rounded font-bold hover:bg-red-600 transition-all duration-300">Assistir</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
};
