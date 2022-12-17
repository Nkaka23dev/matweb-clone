import React from 'react'
import Card from '../Card'
const data = [{
    id:1,
    imgUrl: '/img/mata.png',
    title: 'We accompany your Journey2Cloud',
    description: 'We analyze your application landscapes and transfer them step by step into a sustainable model.'
}]
export default function Services() {
  return (
    <div className='p-5'>
    <Card posts={data} />
    </div>
  )
}
