# Requirements and current delivery status

Status reflects the codebase as inspected on 29 July 2026.

## Functional requirements

| ID | Requirement | Status | Current implementation |
| --- | --- | --- | --- |
| FR-01 | Search by city | Delivered | `SearchBar` submits a city to the OpenWeather current-weather and forecast requests. |
| FR-02 | Display current weather | Delivered | The dashboard shows location, current and feels-like temperature, description, icon, wind, clouds, visibility, humidity, pressure, and rain when supplied. |
| FR-03 | Five-day forecast | Delivered | The app derives one entry per date from OpenWeather's 3-hour forecast response. |
| FR-04 | Toggle Celsius/Fahrenheit | Delivered | Metric/imperial selection refetches the active city and persists in `localStorage`. |
| FR-05 | Handle weather-service errors | Partially delivered | The service maps missing-key, 401, 404, 429, and other HTTP failures to errors. The search input exposes one generic “City not found” error state rather than the specific message. |
| FR-06 | Search history | Delivered | Up to five de-duplicated city names are stored in `localStorage`, selectable, removable, or clearable. |
| FR-07 | Light/dark theme | Delivered | Theme is saved in `localStorage` and applied to the document root. |
| FR-08 | Detect weather from geolocation | Not delivered | No Geolocation API use exists. |
| FR-09 | Save favorite cities | Delivered | Favorite city names persist in `localStorage` and can be searched from the favorites panel. |
| FR-10 | Short-term hourly forecast | Delivered | Eight three-hour forecast intervals are displayed. |

## Non-functional requirements

| ID | Requirement | Status | Notes |
| --- | --- | --- | --- |
| NFR-01 | Initial dashboard loads under 1.5 seconds on 4G/LTE | Not verified | No performance budget, measurement, or automated test is configured. |
| NFR-02 | Responsive desktop, tablet, and mobile UI | Implemented; not formally tested | Tailwind responsive layouts are used throughout key dashboard components. |
| NFR-03 | Basic accessibility | Partially implemented | Controls include several labels and semantic buttons, but no audit or automated accessibility checks are configured. |
| NFR-04 | Short-duration local cache | Delivered with limitation | Weather responses are cached in `sessionStorage` for 10 minutes. The app still requests fresh data after a cache hit and does not promise offline access. |
| NFR-05 | Keep API credentials out of client code | Not delivered by current architecture | Vite exposes `VITE_*` variables to the browser; the OpenWeather key is therefore client-visible. A backend proxy is required to meet this requirement. |

## Acceptance checks

- With a valid API key, search for a valid city and confirm the dashboard appears with current, hourly, daily, and metric cards.
- Change the unit and confirm the searched city is refreshed in the selected unit.
- Add and remove a favorite, then refresh the page to confirm it persists.
- Search several cities and confirm recent history is capped at five entries.
- Enter an invalid city and confirm the search field displays the error state.
- Switch themes and refresh to confirm the selected theme persists.

## Known quality status

`npm run build` completes successfully. At the time of this documentation update, `npm run lint` reports 11 lint findings: one synchronous state update in an effect, two unused callback arguments in `SplitText.jsx`, unused React imports in UI components, and Fast Refresh export warnings. These are quality issues to address; they do not currently block Vite production builds.
