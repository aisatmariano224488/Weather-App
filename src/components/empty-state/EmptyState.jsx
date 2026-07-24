import { FeaturesCard } from './FeaturesCard';
import SearchBar from '@/components/search/SearchBar';
import SplitText from "@/components/SplitText";

const EmptyState = () => {

    return (
        <div className='space-y-16 hide-scrollbar overflow-y-scroll'>
            <div className='gap-8 text-center mt-16 flex flex-col'>
                <SplitText
                    text="XWeather"
                    className="text-5xl lg:text-6xl xl:text-7xl font-bold"
                    delay={30}
                    duration={0.9}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    showCallback={false}
                />
                <SplitText
                    text="Beautifully minimal weather data, engineered for the modern web."
                    className="text-sm xl:text-base tracking-wide"
                    delay={30}
                    duration={0.9}
                    ease="power3.out"
                    splitType="words"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    showCallback={false}
                />

                <SearchBar />
            </div>

            <FeaturesCard />

        </div>
    );
}
 
export default EmptyState;