import React, { FunctionComponent, useState } from 'react';
import Link from 'next/link';
type HamburgProp = {
    initial: boolean
}

const Hamburg = ({ initial = true } : HamburgProp) => {
    const [hamburgOn, setHamburgOn] = useState(initial);
    const handleToggle = () => setHamburgOn((prev) => !prev)
    return (
        <div>

            {hamburgOn ? (<div className="space-y-1" onClick={handleToggle}>
                        <div className="w-8 h-1 bg-white rounded-2xl"></div>
                        <div className="w-8 h-1 bg-white rounded-2xl"></div>
                        <div className="w-8 h-1 bg-white rounded-2xl"></div>  
                </div>) : (<ul className="flex flex-row py-1">
                    <li>
                        <a href='' className='text-xl px-2 text-white font-semibold'>
                            Our Product
                        </a>
                    </li>
                    <li>
                        <a href='' className='text-xl px-2 text-white font-semibold'>
                            About Us
                        </a>
                    </li>
                    <li>
                        <Link href='/form_page' className='text-xl px-2 text-white font-semibold'>
                            NewsForYou
                        </Link>
                    </li>
                </ul>)}
             
        </div>  
    )
}

export default Hamburg