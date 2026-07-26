export function getDailyForecasts(forecasts = []) {
    if (!Array.isArray(forecasts)) return [];
    const dates = new Set();
    
    return forecasts.filter(forecast => {
        if (!forecast?.dt_txt) return false;
        const date = forecast.dt_txt.split(' ')[0];

        if (dates.has(date)) {
            return false;
        }
        dates.add(date);
        return true;
    });
}

export function getHourlyForecasts(forecasts = [], count = 9) {
    if (!Array.isArray(forecasts)) return [];
    return forecasts.slice(0, count);
}

export function formatTime(date) {
    const safeDate = typeof date === 'string' ? date.replace(/-/g, '/') : date;
    const time = new Date(safeDate).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: false
    });

    return time;
}

export function formatWeekday(date) {

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = new Date(date).getDay();
    const today = new Date().getDay();
    if (today === day) return 'Now';

    return days[day];
}