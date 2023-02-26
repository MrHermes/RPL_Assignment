import React from "react";
import Image from "next/image"
import Hamburg from "../Hamburger";

const Header = () => {
    return (
        <header>
            <nav className='p-3 bg-amber-400 min-h-[4rem]'>
                <div className='container flex items-center justify-between mx-auto'>
                <a href='/ ' className='flex '>
                    <Image
                       src="/logo.png"
                       alt="PeTreats' Logo"
                       width={30}
                       height={30}
                    />
                    <span className='text-white text-2xl font-bold ml-3'>PeTreats</span>
                </a>
                <Hamburg initial={true}/>
                </div>
            </nav>
        </header>
    )
}
  
export default Header