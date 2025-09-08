import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async url => {
        const resp = await fetch(url);
        const data = await resp.json();

        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?api_key=${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, []);
    return (
        <div className="container mx-auto pt-44">
            <h3 className="mb-4 font-medium text-xl">Top Rated Movies</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {topMovies.length === 0 && <p>Loading...</p>}
                {topMovies.length > 0 &&
                    topMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};
