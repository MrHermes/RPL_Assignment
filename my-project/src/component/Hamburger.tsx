import React, { FunctionComponent, useState } from 'react';

type HamburgProp = {
    initial: boolean
}

const Hamburg = ({ initial = true } : HamburgProp) => {
    const [hamburgOn, setHamburgOn] = useState(initial);
    const handleToggle = () => setHamburgOn((prev) => !prev)
    return (
        <div>
            {hamburgOn && 
                (<div className="space-y-2" onClick={handleToggle}>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>
                        <div className="w-8 h-0.5 bg-gray-600"></div>  
                </div>)
            }

            {!hamburgOn && 
                (<ul className="flex flex-row p-3">
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
                        <a href='' className='text-xl px-2 text-white font-semibold'>
                            Contact Us
                        </a>
                    </li>
                </ul>)
            }  
        </div>  
    )
}

export default Hamburg