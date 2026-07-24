import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/Card";

import AnimatedContent from '@/components/AnimatedContent';
import { getFeaturesData } from '@/services/featuresService';
import { ClockCheck, MapPinSearch, Thermometer } from 'lucide-react';

export const FeaturesCard = () => {

    const features = getFeaturesData().Features;

    const icons = {
        clock: ClockCheck,
        search: MapPinSearch,
        unit: Thermometer
    }

    return (
        <div className="grid md:grid-cols-3 gap-8">
            {features.map(feature => {

                const Icon = icons[feature.icon];

                return (
                    <AnimatedContent
                        distance={100}
                        direction="vertical"
                        reverse={false}
                        duration={0.8}
                        ease="power3.out"
                        initialOpacity={0}
                        animateOpacity
                        scale={1}
                        threshold={0.1}
                        delay={feature.id * 0.1}
                    >
                        <Card key={feature.id} className="h-full p-10 md:p-6 lg:p-10 space-y-4">
                            {Icon && 
                                <Icon size={50} className='self-center p-3 bg-accent rounded-full' />
                            }
                            <CardHeader className='text-center tracking-wide space-y-2'>
                                <CardTitle className="font-semibold text-xs lg:text-sm uppercase">{feature.name}</CardTitle>
                                <CardDescription>{feature.desc}</CardDescription>
                            </CardHeader>
                        </Card>
                    </AnimatedContent>
                )
            })}
        </div>
    );
}