import React from 'react'
import Image from 'next/image'
import Button from './UI/Button'
import CardBtn from './UI/CardBtn'

export default function Card({ post }) {
    return (
        <>
            <div className='bg-[#e9eef1] flex flex-col relative font-DINWebPro'>
                {/* Title */}
                <div>
                    <Image src={post.imgUrl} alt="image" className='w-full h-full object-cover object-center aspect-video' width={500} height={500}
                    />
                </div>
                <div className='px-5 pt-5'>
                    <p className='text-xl tracking-wider text-primary'>{post.title}</p>
                    {/* Body */}
                    <p className='mt-3 text-xl'>{post.description}</p>
                </div>
                {/* Footer */}
                <div className='px-5 py-5'>
                    <Button title="More" />
                </div>
                <CardBtn styles="absolute px-3 top-3 left-3 " title={post.buttonTitle} />
            </div>
        </>
    )
}
