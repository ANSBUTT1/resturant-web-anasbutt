import React from 'react'
import DishesCard from '../layouts/DishesCard'
import menu1 from "../assests/images/menu1.jpg"
import menu2 from "../assests/images/menu2.jpg"
import menu3 from "../assests/images/menu3.jpg"

const Menu = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
            <h1 className='text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>
                Premium Menu
            </h1>
            <div className='flex flex-wrap justify-center  gap-8'>
                <DishesCard img={menu1} title="Delicious Dish" price="$10.90" />
                <DishesCard img={menu2} title="Delicious Dish" price="$13.90" />
                <DishesCard img={menu3} title="Delicious Dish" price="$15.90" />
            </div>
        </div>
    )
}

export default Menu