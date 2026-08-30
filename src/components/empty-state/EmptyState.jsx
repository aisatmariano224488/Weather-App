import { FeaturesCard } from './FeaturesCard';
import SearchBar from '@/components/search/SearchBar';
import SplitText from "@/components/SplitText";
import SocialProof from './SocialProof';

const EmptyState = () => {

    return (
        <div className='space-y-12'>
            <section className='px-4 md:px-8 tracking-wide gap-8 min-h-screen flex flex-col lg:grid grid-cols-2 items-center justify-center'>
                
                <div className='flex flex-col'>
                    {<SplitText
                        tag='h1'
                        text="XWeather"
                        className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8"
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
                    /> || <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold">XWeather</h1>}
                    {<SplitText
                        text="Get fast, reliable, and clean weather insights for your day—whether you're planning a commute or stepping out for an errand."
                        className='text-base xl:text-lg'
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
                    /> || <p className="text-lg xl:text-xl tracking-wide">Get fast, reliable, and clean weather insights for your day—whether you're planning a commute or stepping out for an errand.</p>}
                </div>

                <SearchBar />
            </section>
            
            <section className='px-4 md:px-8 min-h-[70vh] max-w-4xl mx-auto tracking-wide'>
                <SocialProof />
            </section>

            <section className='px-4 md:px-8'>
                <FeaturesCard />
            </section>

        </div>
    );
}
 
export default EmptyState;