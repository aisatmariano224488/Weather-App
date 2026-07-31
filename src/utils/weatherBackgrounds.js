const normalizeCondition = (condition) => {
    if (!condition) {
        return 'Clear';
    }

    const normalized = condition.trim();

    const atmosphereMap = {
        Haze: 'Mist',
        Smoke: 'Mist',
        Dust: 'Mist',
        Sand: 'Mist',
        Ash: 'Mist',
        Squall: 'Thunderstorm',
        Tornado: 'Thunderstorm'
    };

    return atmosphereMap[normalized] || normalized;
};

export const weatherBackgrounds = {
    day: {
        Clear: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484846/day-clear_xuktbw.jpg',
        Clouds: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484866/day-broken_k7btti.jpg',
        Rain: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484870/day-rain_owgk4c.jpg',
        Drizzle: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484870/day-rain_owgk4c.jpg',
        Thunderstorm: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484876/day-thunderstorm_fph63j.jpg',
        Mist: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484881/day-mist_a4zyfb.jpg',
        Fog: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484881/day-mist_a4zyfb.jpg',
        Snow: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484887/day-snow_pxiajc.jpg'
    },
    night: {
        Clear: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484847/night-clear_m1v2jy.jpg',
        Clouds: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484868/night-broken_zziijw.jpg',
        Rain: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484873/night-rain_nvc1t8.jpg',
        Drizzle: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484873/night-rain_nvc1t8.jpg',
        Thunderstorm: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484878/night-thunderstorm_xm4cwd.jpg',
        Mist: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484884/night-mist_aoi2ej.jpg',
        Fog: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484884/night-mist_aoi2ej.jpg',
        Snow: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484889/night-snow_en4lhp.jpg'
    }
};

export const getWeatherBackground = ({ condition, icon }) => {
    const timeOfDay = icon?.endsWith('n') ? 'night' : 'day';
    const normalizedCondition = normalizeCondition(condition);
    return weatherBackgrounds[timeOfDay]?.[normalizedCondition] || weatherBackgrounds[timeOfDay]?.Clear || '';
};