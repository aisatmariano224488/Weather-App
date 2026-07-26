import Terms from '@/components/Terms';
import lightLogo from '@/assets/openweatherlogo-master.png';
import darkLogo from '@/assets/openweatherlogo-negative.png';
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {

    const { theme } = useTheme();
    

    return (
        <div className='tracking-wide py-2 space-y-16'>
            <div className=''>
                <a
                    href="https://openweathermap.org/"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex w-fit items-center mx-auto gap-1 py-2'
                >
                    <span className="text-sm opacity-75">Weather data provided by</span>

                    <img
                        src={theme === 'dark' ? darkLogo : lightLogo}
                        alt="OpenWeather Logo"
                        className='w-25'
                    />
                </a>
            </div>

            <div className='text-sm flex flex-col-reverse md:flex-row place-items-center md:place-items-start gap-3'>
                <p className='text-sm opacity-75'>© Built with passion by Riyan D. Mariano. All rights reserved.</p>

                <Terms />

                {/* <button
                    type='button'
                    className='duration-200 transition-opacity opacity-50 hover:opacity-100 cursor-pointer hover:underline underline-offset-4 pb-2'
                >
                    Privacy Policy
                </button> */}
            </div>
        </div>
    );
}
 
export default Footer;