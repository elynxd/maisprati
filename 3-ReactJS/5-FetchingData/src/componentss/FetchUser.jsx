import axios from "axios";
import React, { useState, useEffect } from "react";

export const FetchUser = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchUser = async () => {
        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");

            if(response.status !== 200){
                throw new Error('Error fetching data');
            }

            setUser(response.data);
            setLoading(false);
        } catch(err){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            <ul>
                {user.map((user) => (

                    <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </li>
            ))}
                </ul>
        {error && <p>{error}</p>}
        </div>
    );
};
