import { ListTodo, MoonIcon, SunIcon } from "lucide-react";
import useTheme from "../../hooks/useTheme";


const Header = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    return (
        <div className='flex items-center-safe justify-between mb-12'>
            <div className='flex'>
                <ListTodo className='bg-primary/10 text-primary m-2 w-11 h-11 p-2 rounded-2xl' />
                <div className='flex flex-col'>


                    <h1 className='text-2xl font-bold font-sans tracking-tight dark:text-white'>Tasks</h1>
                    <p className='text-sm text-gray-500'>Stay organized, stay productive</p>

                </div>
            </div>

            <div>
                <button className='bg-gray-100 p-3 cursor-pointer rounded-full dark:bg-gray-900'
                    onClick={toggleTheme} >
                    {isDarkMode ? (<SunIcon color='orange' />) : (<MoonIcon color='#543BCE' />)}

                </button>
            </div>


        </div>
    );
}

export default Header;