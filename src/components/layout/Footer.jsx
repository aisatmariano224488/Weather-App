import darkLogo from '@/assets/openweatherlogo-negative.png';
import lightLogo from '@/assets/openweatherlogo-master.png'
import { useTheme } from '@/context/ThemeContext';

const Footer = () => {

    const { theme } = useTheme();

    return (
        <div className='tracking-wide py-2'>
            <div className='flex place-items-center justify-center py-2'>
                <h5 className="text-sm opacity-75">Weather data provided by</h5>
                {theme === 'dark' ?
                    <img
                        src={darkLogo}
                        alt="OpenWeather Logo"
                        className="w-25"
                    />
                    :
                    <img
                        src={lightLogo}
                        alt="OpenWeather Logo"
                        className="w-25"
                    />
                }
            </div>
            <div className='space-x-4 text-sm'>
                <p className='text-sm opacity-75 text-center inline-block'>© 2026 Riyan D. Mariano. All rights reserved.</p>

                {/* <button
                    type='button'
                    className='duration-200 transition-opacity opacity-50 hover:opacity-100 cursor-pointer hover:underline underline-offset-4 pb-2'
                >
                    Privacy Policy
                </button>
                <button
                    type='button'
                    className='duration-200 transition-opacity opacity-50 hover:opacity-100 cursor-pointer hover:underline underline-offset-4 pb-2'
                >
                    Terms of Service
                </button> */}
            </div>
        </div>
    );
}
 
export default Footer;