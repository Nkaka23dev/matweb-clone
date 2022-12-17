import React from 'react'
import Image from 'next/image'
import NavBar from './NavBar'

export default function Hero() {
    return (
        <div style={{
            backgroundImage: `url('https://www.materna.com/SharedDocs/Bilder/DE/buehne_startseite.svg?__blob=panorama&v=24')`
        }} className='font-DINWebPro '>
            <NavBar />
            {/* Parent div with backgroiund image end */}
            <div className='p-2'>
                <Image src="/img/logosm.svg" alt="logo" className='max-w-[10rem]' width={100} height={100}
                />
                <div className='border-[0.4375rem] mt-2 mb-[2rem] border-primary'>
                    <div className='bg-transparent p-[0.5rem] w-full mb-0'>
                        <h2 className=" text-4xl uppercase lg:text-[3.6rem] font-[500px] leading-[2.5rem] text-white mb-[1.5rem]">We are digitizing your World.</h2>
                        <div>
                            <p className='text-white text-[1rem] leading-[1.5rem] font-[300]'>
                                As a key globally active IT service provider, we advise and assist you in all aspects of digitization and provide tailor-made technologies for agile, flexible and secure IT. <span className='w-[2.625rem] h-[0.8125rem] bg-white' >rr</span> </p>
                        </div>
                    </div>
                </div>
                {/* Buttons start here */}
                <div className='flex flex-col space-y-4 pb-4'>
                    <div className='bg-primary px-5 flex py-5 items-center'>
                        <p className='text-white text-lg'>Portfolio</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white h-4 font-bold ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div className='bg-primary px-5 flex py-5 items-center'>
                        <p className='text-white text-lg'>About Us</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white h-4 font-bold ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                    <div className='bg-primary px-5 flex py-5 items-center'>
                        <p className='text-white text-lg'>Careers</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white h-4 font-bold ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}
