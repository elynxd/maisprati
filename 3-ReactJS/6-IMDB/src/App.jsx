import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [name, setName] = useState("");

    const fetchData = async () => {
        try {
            const apiKeyOMDB = "cc6eb4b4";
            const response = await axios.get(
                `https://www.omdbapi.com/?apikey=${apiKeyOMDB}&s=${name}`
            );
            setData(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        setError(null);
        setData([]);
    };

    if (loading) return <div>Loading...</div>;
    if (error)
        return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="container mx-auto items-center justify-center mt-16 p-4">
            <form className="flex items-baseline flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="border p-2 rounded w-full mt-4"
                    onChange={(e) => setName(e.target.value)}
                />
                <button
                    onClick={handleSubmit()}
                    className="bg-blue-500 text-white p-2 rounded mt-2"
                >
                    Search
                </button>
            </form>
            <div className="mt-8"></div>
            <h2 className="text-2xl font-bold mb-4">Movies List</h2>
            <ul className="list-disc pl-5">
                {data.length > 0 ? (
                    data.map((movie) => (
                        <li key={movie.id} className="mb-2">
                            {movie.title} ({movie.year})
                        </li>
                    ))
                ) : (
                    <li>No movies found</li>
                )}
            </ul>
        </div>
    );
}

export default App;
