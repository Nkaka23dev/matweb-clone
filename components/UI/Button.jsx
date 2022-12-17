import React from 'react'

export default function Button({ styles, title }) {
    return (
        <div className={`py-2 flex items-center justify-center text-center ${styles}`}>
            <p className=''>{title}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 h-4 font-bold ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    )
}
