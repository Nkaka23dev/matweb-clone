import React from 'react'
import Image from 'next/Image'

export default function Card() {
    return (
        <div className='bg-[#e9eef1]'>
            {/* Title */}
            <div>
                <Image src="/img/mata.png" alt="logo" className='w-full h-full object-cover object-center aspect-video' width={500} height={500}
                />
            </div>
             <div className='px-5'>
                <p>We accompany your Journey2Cloud</p>
                {/* Body */}
                <p>
                    We analyze your application landscapes and transfer them step by step into a sustainable model.</p>
             </div>
            {/* Footer */}
        </div>
    )
}
