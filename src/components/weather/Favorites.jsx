import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { useWeather } from "@/context/WeatherContext";
import { getCachedWeather } from "@/services/cacheService";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Star } from "lucide-react";

const Favorites = () => {
    const { unit, favorites, handleSearch } = useWeather();

    return (
        <div className="space-y-4">
            {favorites.length 
            ?    favorites.map(fav => {
                    const cacheKey = `weather_${fav}_${unit}`;
                    const cached = getCachedWeather(cacheKey);

                    const desc = cached?.data?.weather?.weather?.[0]?.main || '-';
                    const temp = cached?.data?.weather?.main?.temp.toFixed() || '-';
                    const icon = cached?.data?.weather?.weather?.[0]?.icon;
                    const iconUrl = icon
                        ? `https://openweathermap.org/img/wn/${icon}@2x.png`
                        : "https://openweathermap.org/img/wn/01d@2x.png";

                    return (
                        <Card
                            key={fav}
                            onClick={() => handleSearch(fav)}
                            className="w-full shadow-none px-4 bg-background flex-row items-center justify-between"
                        >
                            <CardHeader className="flex-1">
                                <CardTitle className="text-lg md:text-xl capitalize">{fav}</CardTitle>
                                <CardDescription className="capitalize">{desc}</CardDescription>
                            </CardHeader>

                            <CardContent className="text-lg md:text-xl flex gap-1 items-center">
                                {temp}°

                                <img 
                                    src={iconUrl}
                                    alt={desc}
                                    className="w-10 h-10"
                                />
                            </CardContent>
                        </Card>
                    )
                })
            :   <Empty>
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                        <Star />
                        </EmptyMedia>
                        <EmptyTitle>No Favorites Added Yet</EmptyTitle>
                        <EmptyDescription>Tap the star icon on any city to pin your top destinations here for instant access.</EmptyDescription>
                    </EmptyHeader>
                </Empty>
            }   
        </div>
    );
}
 
export default Favorites;