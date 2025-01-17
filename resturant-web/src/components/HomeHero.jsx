import React from 'react'

import background from "../assests/images/heroSectionBackground.jpg"
import Button from '../layouts/Button'

const HomeHero = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className='bg-cover bg-no-repeat min-h-screen flex flex-row justify-between items-center lg:px-32 px-5  '>
            <div className='w-full lg:w-2/3 space-y-5'>
                <h1 className='text-stone-800  font-semibold text-6xl' style={{textShadow:"-10px 15px 9px gray"}}>
                    Elevate Your Inmer Foodie with Every Bite.
                </h1>
                <p className='text-stone-800'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus corrupti minima voluptates dignissimos.
                    Neque quidem, excepturi earum non dignissimos vero facer
                </p>
                <div className='lg:pl-44'>
                   <Button title="Order Now"/>
                </div>
            </div>

        </div>
    )
}

export default HomeHero;