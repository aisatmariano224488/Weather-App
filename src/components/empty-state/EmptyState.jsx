import { FeaturesCard } from './FeaturesCard';
import SearchBar from '@/components/search/SearchBar';
import SplitText from "@/components/SplitText";
import Particles from '@/components/Particles';

const EmptyState = () => {

    return (
        <div className='space-y-12'>
            <div className='gap-8 min-h-screen text-center mt-16 flex flex-col'>
                <div className="absolute inset-0 w-full h-150 z-0">
                    <Particles
                        particleColors={['#34d399']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />
                </div>
                {<SplitText
                    tag='h1'
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
                /> || <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">XWeather</h1>}
                {<SplitText
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
                /> || <p className="text-sm xl:text-base tracking-wide">Beautifully minimal weather data, engineered for the modern web.</p>}

                <SearchBar />
            </div>

            <FeaturesCard />

        </div>
    );
}
 
export default EmptyState;