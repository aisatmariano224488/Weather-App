# XWeather vision

## Purpose

XWeather is a lightweight, ad-free weather dashboard for people who need an understandable view of a city's conditions and near-term forecast. It favors a small set of useful signals over dense charts and broad data exploration.

## Product state

The app is a client-rendered, city-search experience. A visitor begins with an empty state and search field; after a successful search, the dashboard shows current conditions, an eight-entry 3-hour forecast, a daily outlook, detailed metrics, and a persistent header with search and preference controls.

## Users and jobs

- **Daily planner:** checks the current conditions and nearby forecast before commuting or going out.
- **Casual explorer:** compares weather in cities found through search, history, or favorites.
- **Developer/learner:** can study a compact React application using context, hooks, storage, API integration, responsive UI, and loading/error states.

## Experience principles

- **Quick to read:** expose the current temperature, condition, and location immediately after a search.
- **Useful depth:** provide hourly, daily, and supporting metrics without requiring a separate view.
- **Personal by default:** retain theme, unit choice, recent searches, and favorite city names in the browser.
- **Honest about data:** attribute OpenWeather and communicate request errors in plain language.
- **Responsive:** keep the dashboard usable across narrow and wide displays.

## Current limits and next opportunities

- The app does not request browser geolocation; all weather lookups are city-based.
- Weather data is fetched directly from the browser with an OpenWeather key supplied through Vite environment variables. A server-side proxy is needed to keep a provider key private in a public deployment.
- Cache entries last 10 minutes and live only for the browser session; they improve repeat-search responsiveness but do not provide offline support.
- Favorite cards show cached details only. Fetching and refreshing each favorite independently would make the feature more complete.
- No measured performance or accessibility audit is currently included in the repository.
