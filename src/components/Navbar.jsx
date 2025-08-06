import { ReactComponent as NavbarIcon } from '../assets/images/iconNavbar.svg'
import '../App.css'

export default function Navbar () {
    return (
        <>
            <nav className='flex items-center justify-between p-4 bg-white dark:bg-gray-900 shadow-md'>
                <NavbarIcon className='h-8 w-8 text-gray-800 dark:text-white'/>
            </nav>
        </>
    );
};