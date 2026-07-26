export const labelHumidity = value => {
    const humid = parseInt(value)

    switch (true) {
        case (humid < 30):
            return "Too dry";
        case (humid >= 30 && humid <= 50):
            return "Ideal";
        case (humid >= 51 && humid <= 60):
            return "Acceptable";
        case (humid >= 61 && humid <= 70):
            return "High";
        case (humid >= 71):
            return "Extreme"
    }
}

export const labelClouds = value => {
    const clouds = parseInt(value);

    switch (true) {
        case (clouds >= 0 && clouds <= 11):
            return 'Clear';
        case (clouds >= 12 && clouds <= 25):
            return 'Mostly Clear';
        case (clouds >= 26 && clouds <= 50):
            return 'Partly Cloudy';
        case (clouds >= 51 && clouds <= 87):
            return 'Mostly Cloudy';
        case(clouds >= 88 && clouds <= 100):
            return 'Overcast';
    }
}

export const getCardinalDirection = (deg) => {
    if (deg === undefined || deg === null || isNaN(deg)) return 'N/A';
    const normalized = ((deg % 360) + 360) % 360;
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(normalized / 22.5) % 16;
    return directions[index];
};
