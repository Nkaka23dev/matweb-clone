import React from 'react'
import Card from '../Card'
import Porfolio from '../Porfolio'
import PositionCard from '../UI/PositionCard'


const materna = 'Materna is Behind it.'

const data = {
    id: 1,
    imgUrl: '/img/position.png',
    title: 'Top position in ESM Report',
    buttonTitle: 'Cloud',
    description: 'Enterprise Service Management is one of the cornerstones of any companys digitization strategy.In the new ISG Provider Lens™ Report  Enterprise Service Management 2021  Germany, Materna comes out on top in three quadrants'
}
const data2 = 
    {
        id: 1,
        imgUrl: '/img/matern.png',
        title: 'More about the self Bag Drop project',
        buttonTitle: 'Cloud',
        description: 'We analyze your application landscapes and transfer them step by step into a sustainable model.',
        downBtn :'More about the self Bag Drop project'
    }

export default function Position() {
    return (
        <div className='p-5 space-y-5 bg-[#e9eef1]'>
            <PositionCard cardStyles="bg-white"  post={data} styles="bg-white text-primary border-2 border-primary" />
            <Porfolio title={materna} styles="pt-10" />
            <Card cardStyles="bg-[#e9eef1]" post={data2} styles="bg-primary text-white" downBtn={data2.downBtn} />
        </div>
    )
}
