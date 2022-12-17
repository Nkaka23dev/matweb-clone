import React from 'react'
import Image from 'next/image'
import Button from './Button'

export default function PositionCard({ cardStyles, styles, post }) {
    return (
        <>
            <div className={`${cardStyles} flex flex-col relative font-DINWebPro`}>
                {/* Title */}
                <div>
                    <Image src={post.imgUrl} alt="image" className='w-full h-full object-cover object-center aspect-video' width={500} height={500}
                    />
                </div>
                <div className='px-5 pt-5'>
                    <p className='text-xl tracking-wider text-primary'>{post.title}</p>
                    {/* Body */}
                    <p className='mt-3 text-[#3a3e41] text-md'>{post.description}</p>
                </div>
                {/* Footer */}
                <div className='px-5 py-5'>
                    <Button title="More" styles={styles} />
                </div>
            </div>
        </>
    )
}
