import React from 'react'
import img from "../assests/images/about.jpg"
import Button from '../layouts/Button'
const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-8"'>

            <div className='p-7 sm:p-10 sm:w-[500px] lg:w-[2300px] xl:w-full'>
                <img src={img} alt="img" /></div>
            <div className='space-y-4 lg:pt-14 px-6 sm:px-16 lg:px-0'>
                <h1 className='font-semibold text-3xl sm:text-4xl text-center md:text-start'>
                    Why Choose Us?
                </h1>
                <p>
                    "Choosing us means embracing a culinary journey where passion and flavor intertwine harmoniously.
                    From locally sourced ingredients to our chef's meticulous craftsmanship,
                    each dish is a testament to our dedication to quality and creativity, inviting you to savor every moment."
                </p>
                <p>
                    "At our core, we believe food is a celebration of life and connection.
                    With each bite, we aim to ignite your palate and cultivate unforgettable experiences,
                    leaving you craving more culinary adventures."
                </p>
                <div className='flex justify-center lg:justify-start '>
                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About