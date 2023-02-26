import React from "react";

const PageDiv = () => {
    return (
        <div className='items-center justify-right bg-amber-600 h-screen p-10'>
            <h1 className='text-9xl font-extrabold text-white'> FYI !</h1>
            <p className='text-4xl font-semibold tracking-wide text-white my-5'>There are up to 360 dog's breed</p>
            <button className="transition-colors duration-150 border border-amber-300
             text-amber-300 font-semibold px-4 py-2 rounded-2xl shadow-lg mt-4
              hover:bg-amber-400 hover:text-white">Learn More</button>

        </div>
    )
}

export default PageDiv