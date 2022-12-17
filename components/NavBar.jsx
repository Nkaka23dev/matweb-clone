import React from 'react'
import Image from 'next/image'


export default function NavBar() {
    return (
        <div className='bg-primary flex w-screen py-4 px-2 gap-5'>
            <div className='flex gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <h3 className='text-white'>Menu</h3>
            </div>
            <div className='flex gap-2 items-center'>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    className='w-4 h-4'
                    width={30}
                    height={30}
                />
                <h4 className='text-white'>Search</h4>
            </div>
        </div>
    )
}
