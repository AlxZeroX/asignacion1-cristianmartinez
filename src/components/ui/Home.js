import React from 'react'
import { Productlist } from '../products/Productlist'
import { Carousel } from './carousel'
import { Footer } from './Footer'

export const Home = () => {
    return (
        <>
            <div>
                <h1 className='bg-slate-600 text-white px-6 py-2 rounded-sm text-xl font-medium'>Inicio</h1>
                <Carousel />

                <Productlist category='ps4' />
                <Productlist category='pc' />
                <Productlist category='xbox' />

            </div>
            <Footer />
        </>

    )
}

