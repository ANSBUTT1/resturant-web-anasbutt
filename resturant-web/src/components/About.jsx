import React from 'react'
import img from "../assests/images/about.jpg"
import Button from '../layouts/Button'
const About = () => {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-8"'>

            <div className='p-7 sm:p-10 sm:w-[500px] lg:w-[2300px] xl:w-full'>
                <img src={img} alt="img"  /></div>
            <div className='space-y-4 lg:pt-14 px-6 sm:px-16 lg:px-0'>
                <h1 className='font-semibold text-3xl sm:text-4xl text-center md:text-start'>
                    Why Choose Us?
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Odit nemo harum, numquam consequuntur provident rem maiores a,
                   ducimus, unde veniam obcaecati ea. Ipsa earum placeat sint nisi ratione,
                    pariatur fugiat dolor quibusdam, cum nesciunt ab aperiam esse laboriosam.
                     Cupiditate blanditiis doloribus neque adipisci dolor
                   assumenda vel maiores exercitationem quis necessitatibus.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maxime quaerat quia quas maiores iusto odio nam, inventore
                    sit ipsam reprehenderit.
                </p>
                <div className='flex justify-center lg:justify-start '>
                    <Button title="Learn More" />
                </div>
            </div>
        </div>
    )
}

export default About