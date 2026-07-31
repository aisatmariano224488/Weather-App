import Terms from '@/components/Terms';
import lightLogo from '@/assets/logo/openweatherlogo-master.png';
import darkLogo from '@/assets/logo/openweatherlogo-negative.png';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {

    const { theme } = useTheme();
    const connect = [
        {
            "name": "GitHub",
            "url": "https://github.com/mariano-riyan/Weather-App",
        },
        {
            "name": "Portfolio",
            "url": "https://marianoriyan.vercel.app/"
        }
    ]

    return (
        <div className='tracking-wide py-4 space-y-8'>
            <section>
                <a
                    href="https://openweathermap.org/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex w-fit items-center mx-auto gap-1'
                >
                    <span className="text-sm opacity-75">Weather data provided by</span>

                    <img
                        src={theme === 'dark' ? darkLogo : lightLogo}
                        alt="OpenWeather Logo"
                        className='w-25'
                    />
                </a>
            </section>

            <section className='flex flex-col gap-4 md:flex-row place-items-center md:items-center md:justify-between'>  

                <h5 className='text-3xl md:text-4xl font-bold'>XWeather</h5>

                <div className='space-x-8 text-xs md:text-sm'>
                    <Terms />

                    {connect.map(link => (
                        <a
                            key={link.name}
                            href={link.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='duration-200 transition-all hover:opacity-50'
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

            </section>
            
            <p className='text-xs text-center md:text-start opacity-70'>© 2026 Built with passion by Riyan D. Mariano.</p>
        </div>
    );
}
 
export default Footer;