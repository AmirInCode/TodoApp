import { useState } from "react"

const InputForm = ({ onAddTodo }) => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedValue = inputValue.trim();

        if (!trimmedValue) return;

        onAddTodo(trimmedValue);
        setInputValue("");
    };

    return (
        <div className='flex gap-3'>
            <form className='flex w-full gap-3' 
            onSubmit={handleSubmit}>

                <input
                    type="text"
                    value={inputValue}
                    placeholder="What needs to be done?"
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex w-full border border-gray-200/60 px-3 py-1 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-14 pl-5 pr-4 text-base rounded-2xl bg-card  shadow-sm focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/50 transition-all dark:bg-gray-950 dark:border-gray-800 dark:text-white dark:shadow-lg" 
                    />

                <button  
                type='submit'
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-14 w-16 rounded-2xl bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus h-5 w-5"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                </button>

            </form>


        </div>

    )
}

export default InputForm