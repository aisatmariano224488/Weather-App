import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import Compass from "@/components/weather/Compass";
import { labelClouds, labelHumidity } from "@/utils/elements";
import { CloudHail, Cloudy, Droplets, Eye, Wind } from "lucide-react";

const WeatherElements = ({ weather, unit, onLoading }) => {

    const windUnit = unit === 'imperial' ? 'mph' : 'm/s';

    const elements = {
        "wind": {
            "id": 1,
            "value": weather?.wind?.speed,
            "deg": weather?.wind?.deg,
            "unit": windUnit,
            "icon": Wind,
            "className": 'col-span-2'
        },
        "clouds": {
            "id": 4,
            "value": weather?.clouds?.all,
            "unit": '%',
            "icon": Cloudy,
        },
        "visibility": {
            "id": 3,
            "value": weather?.visibility  * 0.001,
            "unit": 'km',
            "icon": Eye,
        },
        "humidity": {
            "id": 2,
            "value": weather?.main?.humidity,
            "unit": '%',
            "icon": Droplets,
            "className": 'col-span-2'
        },
        "rain": {
            "id": 5,
            "value": weather?.rain?.['1h'] || 0,
            "unit": 'mm/h',
            "icon": CloudHail,
        }
    }

    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 w-full lg:flex flex-col-reverse lg:max-w-sm justify-self-center">
            {Object.entries(elements).map(([key, value]) => {

                const Icon = value.icon;

                return (
                    <Card key={value.id} className={`${value.className ?? ''} shadow-none`}>
                        {onLoading
                            ? key === 'wind' ? (
                                <div className="flex flex-row items-center justify-between p-5 lg:flex-col lg:items-stretch gap-4">
                                    <div className="space-y-4">
                                        <div className="flex gap-2 items-center">
                                            <Skeleton className="inline-block h-5 w-5 rounded-full" />
                                            <Skeleton className="w-20 h-4" />
                                        </div>

                                        <div className="flex items-end gap-1">
                                            <Skeleton className="h-10 w-20" />
                                            <Skeleton className="w-8 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <Skeleton className="w-20 h-20 sm:w-28 sm:h-28 rounded-full" />
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4 mx-2">
                                    <div className="flex gap-2 md:flex-row-reverse md:justify-between">
                                        <Skeleton className="inline-block mr-2 h-5 w-5 rounded-full" />
                                        <Skeleton className="w-25" />
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex place-items-end">
                                            <Skeleton className="h-15 w-20" />
                                            <Skeleton className="w-8 h-5" />
                                        </div>
                                        {(key === 'humidity' || key === 'clouds') && 
                                            <Skeleton className="h-5 w-20"></Skeleton>
                                        }
                                    </div>
                                    {key === 'humidity' &&
                                        <Skeleton className="w-full h-4" />
                                    }
                                </div>
                            )
                            : key === 'wind' ? (
                                <div className="flex flex-row justify-between px-5 gap-4">
                                    <CardHeader className="p-0 space-y-4">
                                        <CardTitle className="uppercase font-semibold flex gap-2 md:flex-row-reverse md:justify-between text-xs">
                                            <Icon size={15} className="inline-block mr-2" />
                                            {key}
                                        </CardTitle>

                                        <CardDescription>
                                            <div className="text-4xl text-secondary-foreground">
                                                {value.value}
                                                <span className="text-sm">{value.unit}</span>
                                            </div>
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-0 flex justify-center">
                                        <Compass degree={value.deg} />
                                    </CardContent>
                                </div>
                            ) : (
                                <div>
                                    <CardHeader className="space-y-4">
                                        <CardTitle className="uppercase font-semibold flex gap-2 md:flex-row-reverse md:justify-between text-xs">
                                            <Icon size={15} className="inline-block mr-2" />
                                            {key}
                                        </CardTitle>

                                        <CardDescription>
                                            <div className="text-4xl text-secondary-foreground">
                                                {value.value}
                                                <span className="text-sm">{value.unit}</span>
                                            </div>
                                            {key === 'humidity' &&
                                                <span className="font-bold opacity-65 text-secondary-foreground">{labelHumidity(value.value)}</span>
                                            }
                                            {key === 'clouds' &&
                                                <span className="font-bold opacity-65 text-secondary-foreground">{labelClouds(value.value)}</span>
                                            }
                                        </CardDescription>
                                    </CardHeader>
                                    
                                    {key === 'humidity' &&
                                        <CardContent className="mt-6">
                                            <Progress value={value.value} />
                                        </CardContent>
                                    }
                                </div>
                            )
                        }
                    </Card>
                )
            })}
        </div>
    );
}
 
export default WeatherElements;