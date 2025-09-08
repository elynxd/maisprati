import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

export const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    const getSearchedMovies = async url => {
        const resp = await fetch(url);
        const data = await resp.json();

        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?api_key=${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryUrl);
    }, [query]);

    return (
        <div className="container mx-auto flex flex-col gap-4 pt-44">
            <h2 className="mb-4 font-medium text-2xl">
                Principais resultados para: <span className="text-red-700">{query}</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies.length === 0 && <p>Loading...</p>}
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};
