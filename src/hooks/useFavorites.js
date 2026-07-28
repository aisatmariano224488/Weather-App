import { useState, useEffect } from "react";
    
export const useFavorites = () => {
   
    const [favorites, setFavorites] = useState(() => {
        try {
            const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
            return Array.isArray(savedFavorites)
                ? savedFavorites
                .filter((favorite) => typeof favorite === "string" && favorite.trim())
                .map((favorite) => favorite.trim())
                : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.error('Local Storage is not available: ', error);
        }
    }, [favorites]);

    
    const isFavorite = (cityName) => {
        if (!cityName) return false;
        return favorites.some(
            (fav) => fav.toLowerCase().trim() === cityName.toLowerCase().trim()
        );
    };

    const addFavorite = (cityName) => {
        if (!cityName || !cityName.trim()) return;
        const trimmed = cityName.toLowerCase().trim();
        if (!isFavorite(trimmed)) {
            setFavorites((prev) => [trimmed, ...prev]);
        }
    };

    const removeFavorite = (cityName) => {
        if (!cityName) return;
        setFavorites((prev) =>
            prev.filter((fav) => fav.toLowerCase().trim() !== cityName.toLowerCase().trim())
        );
    };

    const toggleFavorite = (cityName) => {
        if (isFavorite(cityName)) {
            removeFavorite(cityName);
        } else {
            addFavorite(cityName);
        }
    };

    return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
};