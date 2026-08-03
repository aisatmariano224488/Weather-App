import { useEffect, useState } from 'react';
import { getCachedWeather, setCachedWeather } from '../services/cacheService';
import { fetchForecastData, fetchWeatherData } from '../services/weatherApi';
import { toast } from "@/components/ui/toast"

export const useWeatherSearch = (writeHistory) => {
	
	const [unit, setUnit] = useState(() => {
		const storedUnit = localStorage.getItem('unit');
		return storedUnit === 'metric' || storedUnit === 'imperial' ? storedUnit : 'metric';
	});
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [lastSearchedCity, setLastSearchedCity] = useState(null);
	const [isPending, setIsPending] = useState(false);

    const toggleUnit = (newUnit) => {
        setUnit(newUnit);
    }

	useEffect(() => {
		localStorage.setItem('unit', unit)
	}, [unit])

    const handleUnit = async () => {
        const newUnit = unit === 'metric' ? 'imperial' : 'metric';
        if (weatherData) {
            const success = await handleSearch(lastSearchedCity, newUnit);
            if (success) {
                toggleUnit(newUnit);
            }
        } else {
            toggleUnit(newUnit);
        }
    }

    const handleSearch = async (searchCity, overrideUnit) => {

		if (!searchCity || !searchCity.trim() || !unit.trim()) return false;

		const effectiveUnit = overrideUnit ?? unit;

		const cacheKey = `weather_${searchCity}_${effectiveUnit}`;
		const cached = getCachedWeather(cacheKey);

		if (cached) {
			const resolvedCity = (cached?.data?.weather?.name ?? searchCity).trim().toLowerCase();

			setWeatherData(cached?.data?.weather);
			setForecastData(cached?.data?.forecast);
			setLastSearchedCity(resolvedCity);

			writeHistory(resolvedCity);
		}

		setIsPending(true);
		setIsLoading(true);
		setError(null);

		try {
			const [weather, forecast] = await Promise.all([
				fetchWeatherData(searchCity, effectiveUnit),
				fetchForecastData(searchCity, effectiveUnit)
			]);
			
			const resolvedCity = (weather?.name ?? searchCity).trim().toLowerCase();

			setWeatherData(weather);
			setForecastData(forecast);
			setLastSearchedCity(resolvedCity);

			setCachedWeather(cacheKey, weather, forecast);
			writeHistory(resolvedCity);
			return true;
		} catch (error) {
			setIsLoading(false);
			setError(error.message);

			toast.add({
				type: "error",
				description: "City not found. Please check the spelling and try again.",
				priority: "high",
			})
			return false;
		} finally {
			setIsPending(false);
			setTimeout(() => setIsLoading(false), 800);
		}
	}

    return{ unit, weatherData, forecastData, isLoading, error, lastSearchedCity, isPending, handleUnit, handleSearch };
}
