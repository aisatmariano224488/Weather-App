import WeatherElements from "@/components/weather/elements/WeatherElements";
import ForecastList from "@/components/weather/forecast/ForecastList";
import HourlyForecastList from "@/components/weather/hourly/HourlyForecastList";
import WeatherCard from "@/components/weather/WeatherCard";
import { useWeather } from "@/context/WeatherContext";
import { useEffect } from "react";

const WeatherContents = () => {

    const {
        unit,
        favorites,
        weatherData,
        forecastData,
        handleSearch,
		isLoading,
		isPending
    } = useWeather();

    useEffect(() => {
        if (!favorites?.length) return;

        const firstFavorite = favorites[0];

        setTimeout(() => {
            handleSearch(firstFavorite);
        }, 800)
    }, [])

    return (
        ( isPending || forecastData && weatherData) && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-6 col-span-1 lg:col-span-2">
                    <WeatherCard weather={weatherData} tempUnit={unit} isLoading={isLoading} />
                    <HourlyForecastList forecasts={forecastData?.list} isLoading={isLoading} />
                    <ForecastList forecasts={forecastData?.list} isLoading={isLoading}/>
                </div>
                <div>
                    <WeatherElements weather={weatherData} unit={unit} isLoading={isLoading} />
                </div>
            </div>
        )
    );
}
 
export default WeatherContents;