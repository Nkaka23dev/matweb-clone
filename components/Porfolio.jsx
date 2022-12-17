import React from 'react'

export default function Porfolio({styles,title}) {
    return (
        <div className='flex h-32 font-DINWebPro'>
            <h2 className={`${styles} m-auto text-center text-gray-700 text-[1.8rem] leading-8`}>
                {title}
            </h2>
        </div>
    )
}
