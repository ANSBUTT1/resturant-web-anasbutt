import React from 'react'
import DishesCard from '../layouts/DishesCard'
import img1 from "../assests/images/img1.jpg"
import img2 from "../assests/images/img2.jpg"
import img3 from "../assests/images/img3.jpg"
import img4 from "../assests/images/img4.jpg"
import img5 from "../assests/images/img5.jpg"
import img6 from "../assests/images/img6.jpg"
const Dishes = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 '>
        <h1 className='text-4xl font-semibold text-center pt-24 pb-10'>
           Our Dishes 
        </h1>
        <div className='flex flex-wrap gap-8 justify-center'>
            <DishesCard img={img1}  title="Special Biryani" price="$5.99" />
            <DishesCard img={img2}  title="Student Burger" price="$2.99" />
            <DishesCard img={img3}  title="Spagities" price="$6.99" />
            <DishesCard img={img4}  title="Grilled Burger" price="$10.99" />
            <DishesCard img={img5}  title="Pan-Cake" price="$12.99" />
            <DishesCard img={img6}  title="Roast Chicken" price="$10.99" />
        </div>
    </div>
  )
}

export default Dishes