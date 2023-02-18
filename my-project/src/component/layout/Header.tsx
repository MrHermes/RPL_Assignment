import React from "react";
import Hamburg from "../Hamburger";

const Header = () => {
    return (
        <header>
            <nav className='px-3 py-3 bg-amber-400'>
                <div className='container flex items-center justify-between mx-auto'>
                <a href='' className=''>
                    <span className='text-white text-2xl font-bold'>PeTreats</span>
                </a>
                <Hamburg initial={true}/>
                </div>
            </nav>
        </header>
    )
}
  
export default Header