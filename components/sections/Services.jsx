import React from 'react'
import Card from '../Card'
const data = [
    {
        id: 1,
        imgUrl: '/img/mata.png',
        title: 'We accompany your Journey2Cloud',
        buttonTitle: 'Cloud',
        description: 'We analyze your application landscapes and transfer them step by step into a sustainable model.',
        downBtn: 'More'
    },
    {
        id: 1,
        imgUrl: '/img/punch.png',
        title: 'Cyber Security',
        buttonTitle: 'Cyber Security Check',
        description: 'Our cyber services help you before, during and after any damage might occur by providing secure applications development, protection for your IT and information security.',
        downBtn: 'More'
    },
    {
        id: 1,
        imgUrl: '/img/typing.png',
        title: 'Enterprise Service Management',
        buttonTitle: 'Processes',
        description: 'Benefit from the market leader for service management. More than 1,000 customers across all sectors',
        downBtn: 'More'
    },
    {
        id: 1,
        imgUrl: '/img/iot.png',
        title: 'Enterprise Service Management',
        buttonTitle: 'IoT',
        description: 'Benefit from the market leader for service management. More than 1,000 customers across all sectors',
        downBtn: 'More'
    },
]
export default function Services() {
    return (
        <div className='p-5 space-y-5'>
            {data.map((value) => (
                <Card cardStyles="bg-[#e9eef1]" key={value.id} post={value} styles="bg-primary text-white"/>
            ))}
        </div>
    )
}
