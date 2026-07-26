const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const RAW_BASE_URL = import.meta.env.VITE_OPENWEATHER_BASE_URL || 'https://api.openweathermap.org/data/2.5/';
const BASE_URL = RAW_BASE_URL?.endsWith('/') ? RAW_BASE_URL : `${RAW_BASE_URL}/`;

const handleResponse = async (response) => {
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('City not found');
        }
        if (response.status === 401) {
            throw new Error('Invalid or missing OpenWeather API key');
        }
        if (response.status === 429) {
            throw new Error('API rate limit exceeded. Please try again later.');
        }
        throw new Error(`Weather service error (${response.status})`);
    }
    return await response.json();
};

const request = async (endpoint, city, unit) => {
    if (!API_KEY) {
        throw new Error('Missing OpenWeather API Key in environment variables');
    }

    const url = `${BASE_URL}${endpoint}?q=${encodeURIComponent(city)}&units=${unit}&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        return await handleResponse(response);
    } catch (error) {
        console.error("Fetch weather error:", error);
        throw error;
    } 
}

export const fetchWeatherData = (city, unit) => request('weather', city, unit);
export const fetchForecastData = (city, unit) => request('forecast', city, unit);