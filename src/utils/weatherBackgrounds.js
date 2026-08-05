export const weatherBackgrounds = {
    day: {
        Clear: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484855/day-few_icowpv.jpg',
        Clouds: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484863/day-scattered_tnohzl.jpg',
        Rain: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484870/day-rain_owgk4c.jpg', 
        Thunderstorm: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484876/day-thunderstorm_fph63j.jpg',
        Mist: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484881/day-mist_a4zyfb.jpg',
        Snow: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484887/day-snow_pxiajc.jpg'
    },
    night: {
        Clear: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484856/night-few_kso08n.jpg',
        Clouds: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484861/night-scattered_hrba2r.jpg',
        Rain: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484873/night-rain_nvc1t8.jpg',
        Thunderstorm: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484878/night-thunderstorm_xm4cwd.jpg',
        Mist: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484884/night-mist_aoi2ej.jpg',
        Snow: 'https://res.cloudinary.com/hfxvyin2/image/upload/v1785484889/night-snow_en4lhp.jpg'
    }
};

const normalizeCondition = weather => {

    const atmosphere = {
        Smoke: 'Mist',
        Haze: 'Mist',
        Dust: 'Mist',
        Fog: 'Mist',
        Sand: 'Mist',
        Ash: 'Mist',
        Squall: 'Mist',
        Tornado: 'Mist',
        Clear: 'Clear',
        Clouds: 'Clouds',
        Drizzle: 'Rain',
        Rain: 'Rain',
        Thunderstorm: 'Thunderstorm',
        Mist: 'Mist',
        Snow: 'Snow'
    }

    return atmosphere[weather]
}

export const getWeatherBackground = ({ condition, icon }) => {
    const timeOfDay = icon?.endsWith('n') ? 'night' : 'day';
    return weatherBackgrounds[timeOfDay]?.[normalizeCondition(condition)] || weatherBackgrounds[timeOfDay]?.Clear || '';
};