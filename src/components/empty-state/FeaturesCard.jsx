
import AnimatedContent from '@/components/AnimatedContent';
import { getFeaturesData } from '@/services/featuresService';

export const FeaturesCard = () => {

    const features = getFeaturesData().Features;

    return (
        <div>
            {features.map(feature => {

                return (
                    <AnimatedContent
                        key={feature.id}
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.4}
                        delay={feature.id * 0.1}
                    >
                        <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 mb-16 items-center">
                            <div className="text-center tracking-wide space-y-2">
                                <h4 className="text-2xl font-semibold xl:text-xl tracking-wide">{feature.name}</h4>
                                <p className="text-secondary-foreground">{feature.desc}</p>
                            </div>

                            <img
                                src={feature.image}
                                alt={feature.name}
                                loading="lazy"
                                className="max-h-[75vh] rounded-2xl place-self-center"
                            />
                        </div>
                    </AnimatedContent>
                )
            })}
        </div>
    );
}