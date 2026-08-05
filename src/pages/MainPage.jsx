
import EmptyState from "@/components/empty-state/EmptyState";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import WeatherContents from "@/components/layout/WeatherContents";
import { Toaster } from "@/components/ui/toast";
import { useWeather } from "@/context/WeatherContext";

const MainPage = () => {

    const { weatherData, isPending } = useWeather();

    return (
        <div className="overflow-x-hidden tracking-wide">		
			<Header searchVisibility={weatherData} />
			<div className="px-4 md:px-8 mb-4 pt-25 md:pt-30">
				<Toaster />

				{(!isPending && !weatherData) &&
					<EmptyState />
				}

				<WeatherContents />
				<Footer />
			</div>
		</div>
    );
}
 
export default MainPage;