import React from 'react'

export default function CardBtn({styles,title}) {
  return (
      <div className={`bg-[rgba(255,255,255,.9)] font-DINWebPro py-1  flex items-center justify-center text-center ${styles}`}>
          <p className='text-[#666]'>{title}</p>
      </div>
  )
}
