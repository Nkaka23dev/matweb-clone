import React from 'react'

export default function Button({ styles, title }) {
    return (
        <div className={` bg-primary py-2 flex items-center justify-center text-center ${styles}`}>
            <p className='text-white'>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white h-4 font-bold ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}
