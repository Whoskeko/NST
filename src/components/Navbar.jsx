import { ReactComponent as NavbarIcon } from '../assets/images/iconNavbar.svg'
import { ReactComponent as LightModeIcon } from '../assets/images/lightMode.svg'
import { ReactComponent as DarkModeIcon } from '../assets/images/darkMode.svg'
import ColorMode from './ColorMode.jsx';
import '../App.css'

export default function Navbar () {
    return (
        <>
            <nav className='flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md'>
                <div className='flex items-center gap-2'>
                    <NavbarIcon className='h-8 w-8 text-gray-800 dark:text-white'/>
                </div>
            </nav>
            <button
                onClick={toggleDarkMode}
                className='bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded transition'
                title='Toggle Dark Mode'
            >
                {darkMode ? (
                    <DarkModeIcon className='h-6 w-6 text-yellow-400' />
                ) : (
                    <LightModeIcon className='h-6 w-6 text-gray-800' />
                )}
            </button>
        </>
    );
};