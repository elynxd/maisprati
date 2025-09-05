import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

export const Search = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        
        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithQueryUrl = `${searchUrl}?api_key=${apiKey}&query=${query}`;

        getSearchedMovies(searchWithQueryUrl);

    }, [query])

    return (
        <div className="container mx-auto pt-4">
            <h2>Principais resultados para: <span>{query}</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.length == 0 && <p>Loading...</p>}
                {movies.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} /> 
                ))}

            </div>
        </div>
    );
};
