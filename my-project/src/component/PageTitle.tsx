import React from "react";

const PageTitle = () => {
    return ( 
        <div className='relative flex flex-col items-center justify-top h-[calc(100vh-4rem)] pt-16'>
            <h1 className='text-7xl font-extrabold text-amber-500 md:text-9xl'> PeTreats </h1>
            <p className='text-2xl font-semibold tracking-wide text-amber-200 md:text-4xl'>Reward Your Fur-ever Companion</p>
            <img className="absolute bottom-0" src='./landingPage.png'></img>
        </div>
    )
}

export default PageTitle