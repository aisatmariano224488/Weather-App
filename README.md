<div align="center">
  <a href="https://mariano-riyan.github.io/Weather-App/" target="_blank">
     <img 
         width="800" height="496" 
         alt="Project2" src="https://github.com/user-attachments/assets/71d9f50e-834f-45e6-9ef3-8e753fafec3a" 
      />
   </a>
</div>

# XWeather

XWeather is a single-page weather dashboard built with React and Vite. Search for a city to view current conditions, short-term forecasts, and detailed weather metrics from OpenWeather.

## Current capabilities

- City-based weather search with loading and error states for failed requests.
- Current conditions: temperature, feels-like temperature, description, and an OpenWeather icon.
- Eight 3-hour forecast entries (a 24-hour outlook) and a five-day outlook derived from OpenWeather's 3-hour forecast response.
- Wind direction and speed, cloud cover, visibility, humidity, pressure, and one-hour rain data where available.
- Metric and imperial units, light/dark theme, recent searches (up to five), and favorite cities.
- Browser persistence for unit, theme, searches, and favorites; a 10-minute session cache for weather responses.
- Responsive layouts, loading skeletons, animated content, an OpenWeather attribution link, and an in-app terms dialog.

Geolocation is not implemented. Favorites store city names only; their preview uses any matching weather data currently held in the session cache.

## Stack

- React 19 and Vite 8
- Tailwind CSS 4, Base UI/Shadcn-style components, and Lucide icons
- GSAP animations
- OpenWeather Current Weather and 5-day / 3-hour Forecast endpoints

## Run locally

Prerequisites: Node.js and an OpenWeather API key with access to the current-weather and forecast endpoints.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env` in the project root:

   ```env
   VITE_OPENWEATHER_API_KEY=your_openweather_key
   # Optional; defaults to https://api.openweathermap.org/data/2.5/
   VITE_OPENWEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Serve the production build locally. |
| `npm run lint` | Run ESLint. |

## Configuration and security

Only variables prefixed with `VITE_` are exposed to this browser application. That means `VITE_OPENWEATHER_API_KEY` is embedded in the client bundle and is not a secret. Use an appropriately restricted OpenWeather key for local or public client deployments. For a truly private credential, route requests through a server-side proxy and keep the provider key on that server.

## Documentation

- [Vision](docs/VISION.md)
- [Requirements and delivery status](docs/REQUIREMENTS.md)
- [Architecture](docs/ARCHITECTURE.md)
