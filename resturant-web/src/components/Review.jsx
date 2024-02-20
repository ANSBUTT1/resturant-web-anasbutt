import React from 'react'
import ReviewCard from '../layouts/ReviewCard'
import maryam from "../assests/images/maryam.jpg"
import lukman from "../assests/images/lukman.jpg"
const Review = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center md:px-32 px-5'>
        <h1 className=' text-2xl sm:text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10'>
            Customer's Review
        </h1>
        <div className='flex flex-col md:flex-row gap-5 mt-5  '>
            <ReviewCard img={maryam} name="Maryam Javaid"/>
            <ReviewCard img={lukman} name="Lukman Khalid"/>
            <ReviewCard img={maryam} name="Maryam Javaid"/>
        </div>
    </div>
  )
}

export default Review