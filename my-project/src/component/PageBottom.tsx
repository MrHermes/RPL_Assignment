import Link from "next/link";
import React from "react";

const PageBottom = () => {
    return (
        <div className='flex flex-col items-end bg-white p-10 h-[calc(100vh-4rem)]'>
            <h1 className='text-7xl font-extrabold text-amber-500 md:text-9xl'>Daily dose of dogs ? </h1>
            <p className='text-4xl font-semibold tracking-wide text-amber-500 mt-6'>Subscribe to our newsletter !</p>
            <button className="transition-colors duration-150 border 
            border-amber-400 text-amber-400 font-semibold px-4 py-2 
            rounded-2xl shadow-lg mt-4 hover:bg-amber-400 hover:text-white">
                <Link href="/form_page">Subscribe Now!</Link>
            </button>
        </div>
    )
}

export default PageBottom