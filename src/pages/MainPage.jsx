
import EmptyState from "@/components/empty-state/EmptyState";
import { useWeather } from "@/context/WeatherContext";
import Header from "@/components/layout/Header";
import WeatherContents from "@/components/layout/WeatherContents";
import Footer from "@/components/layout/Footer";

const MainPage = () => {

    const { weatherData } = useWeather();

    return (
        <div className="overflow-x-hidden tracking-wide">		
			<Header searchVisibility={weatherData} />
			<div className="px-4 md:px-8 mb-4 pt-25 md:pt-30">

				{!weatherData &&
					<EmptyState />
				}

				<WeatherContents />
				<Footer />
			</div>
		</div>
    );
}
 
export default MainPage;