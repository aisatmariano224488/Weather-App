# Technical architecture

## Overview

XWeather is a client-side React single-page application. `main.jsx` wraps `App` in `ThemeProvider` and `WeatherProvider`; `App` renders `MainPage`. There is no router or backend in this repository.

```text
Browser
  ├─ ThemeProvider ── localStorage (theme)
  └─ WeatherProvider
       └─ useWeatherLogic
            ├─ useWeatherSearch ── weatherApi ── OpenWeather API
            │       └─ cacheService ── sessionStorage (10 min)
            ├─ useHistory ─────────── localStorage (history, max 5)
            └─ useFavorites ───────── localStorage (favorites)
```

## Technology

| Area | Implementation |
| --- | --- |
| Application | React 19, Vite 8 |
| Styling | Tailwind CSS 4 |
| UI primitives | Base UI with local Shadcn-style components |
| Animation | GSAP and `@gsap/react` |
| Icons | Lucide React |
| Weather provider | OpenWeather current weather and 5 day / 3 hour forecast APIs |
| Persistence | `localStorage` and `sessionStorage` |

## Request and cache lifecycle

1. A user submits a city through `SearchBar`, a history item, a favorite, or a unit change.
2. `useWeatherSearch.handleSearch` builds a cache key using the supplied city and effective unit.
3. `cacheService` checks `sessionStorage`. Valid entries are younger than 10 minutes and are immediately rendered, but do not stop the subsequent network refresh.
4. `weatherApi` sends current-weather and forecast requests in parallel using `fetch`.
5. On success, the hook updates React state, writes the cache entry, normalizes the resolved city name, and writes it to recent history.
6. On failure, it stores an error. Request failures are mapped for 404, 401, and 429 responses, with a generic HTTP message for other non-success responses; the current search UI displays a generic “City not found” error state rather than that specific message.

## State ownership

| State | Owner | Persistence |
| --- | --- | --- |
| Weather, forecast, loading, pending, error, active city, unit | `useWeatherSearch` via `WeatherContext` | Unit in `localStorage`; weather cache in `sessionStorage` |
| Search history | `useHistory` via `WeatherContext` | `localStorage`, maximum five cities |
| Favorites | `useFavorites` via `WeatherContext` | `localStorage` |
| Theme | `ThemeContext` | `localStorage` and root `light`/`dark` class |

## UI composition

- `MainPage` chooses between the empty-state landing view and results layout.
- `Header` contains contextual search, favorites, theme, and unit controls.
- `WeatherContents` composes `WeatherCard`, hourly forecast, daily forecast, and weather-element cards.
- `Footer` provides OpenWeather attribution, terms, and external project links.
- `services/featuresService` and `services/termsService` expose local JSON content to their UI components.

## Environment configuration

| Variable | Required | Default |
| --- | --- | --- |
| `VITE_OPENWEATHER_API_KEY` | Yes | None; searches fail with a clear message if missing. |
| `VITE_OPENWEATHER_BASE_URL` | No | `https://api.openweathermap.org/data/2.5/` |

Vite publishes `VITE_*` values to the client bundle. This architecture is suitable only for a browser-exposed, provider-restricted key. Introduce a server-side API boundary before treating the weather-provider key as confidential.

## Build and quality status

`npm run build` currently succeeds. `npm run lint` currently fails with 11 existing ESLint errors; see [requirements](REQUIREMENTS.md#known-quality-status) for the summarized findings.
