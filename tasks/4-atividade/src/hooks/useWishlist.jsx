import { useEffect, useState } from "react";

export const useWishlist = () => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = localStorage.getItem("movieDesired");
        setWishlist(storedWishlist ? JSON.parse(storedWishlist) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem("movieDesired", JSON.stringify(wishlist));
    }, [wishlist]);

    const addToMyWishList = movie => {
        setWishlist(prev => {
            if (prev.some(item => item.id === movie.id)) return prev;
            return [...prev, movie];
        });
    };

    const removeFromMyWishList = movieId => {
        setWishlist(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isInMyWishList = id => wishlist.some(movie => movie.id === id);

    const toggleMyWishList = movie => {
        setWishlist(prev =>
            prev.some(item => item.id === movie.id)
                ? prev.filter(m => m.id !== movie.id)
                : [...prev, movie]
        );
    };

    const clearMyWishList = () => setWishlist([]);

    return {
        wishlist,
        setWishlist,
        addToMyWishList,
        removeFromMyWishList,
        isInMyWishList,
        toggleMyWishList,
        clearMyWishList,
        myWishListCount: wishlist.length,
    };
};
