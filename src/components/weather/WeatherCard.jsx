import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { useWeather } from "@/context/WeatherContext";
import { Star } from "lucide-react";

function WeatherCard({ weather, tempUnit, onLoading }) {

    const { toggleFavorite, isFavorite } = useWeather();

    const unit = tempUnit === 'imperial' ? 'F' : 'C';
    const name = weather?.name ?? '';
    const country = weather?.sys?.country ?? '';
    const icon = weather?.weather?.[0]?.icon;
    const description = weather?.weather?.[0]?.description ?? '';
    const temp = weather?.main?.temp.toFixed();
    const feelsLike = weather?.main?.feels_like.toFixed();

    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;

    return ( 
        <div className="mt-4 md:mt-0 flex gap-4 flex-col md:flex-row items-center">
            {onLoading
                ?
                <div className="min-h-[50vh] grid place-items-center md:justify-start">
                    <Skeleton className="w-50 h-10"></Skeleton>

                    <div className="grid place-items-center gap-1 md:flex md:gap-8">
                        <Skeleton 
                            className="w-20 h-20"
                        />

                        <div className="space-y-1 place-items-center md:place-items-start">
                            <Skeleton className="w-40 h-20" />
                            <Skeleton className="h-5 w-25" />
                            <Skeleton className="h-8 w-25" />
                        </div>
                    </div>
                </div>
                :
                <div className="min-h-[50vh] w-full px-8 grid items-center justify-center md:justify-start rounded-4xl">

                    <div className="flex pl-12 items-center">
                        <h1 className="text-3xl mx-4 font-bold">{name}, {country}</h1>

                        <Toggle
                            onClick={() => toggleFavorite(name)}
                            className="aria-pressed:bg-transparent hover:bg-transparent cursor-pointer"
                            aria-label={isFavorite(name) ? `Remove ${name} from the favorites` : `Add ${name} to the favorites`}
                        >
                            <Star className={isFavorite(name) ? 'fill-foreground' : ''} />
                        </Toggle>

                    </div>

                    <div className="grid place-items-center md:flex md:gap-8">
                        <img 
                            src={iconUrl}
                            alt={description}
                            className=""
                        />

                        <div className="text-center space-y-1 md:text-start">
                            <p className="text-7xl">{temp}°{unit}</p>
                            <p className="text-sm">Feels like {feelsLike}°{unit}</p>
                            <p className="text-lg capitalize">{description}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default WeatherCard;