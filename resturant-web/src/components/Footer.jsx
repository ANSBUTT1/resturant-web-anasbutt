import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 '>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-xl pb-4'>
            FoodieWeb
          </h1>
          <p className='text-sm'>
            Include in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div >
          <h1 className='font-mendium text-xl pb-4 pt-5 md:pt-0'>
            Links
          </h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='dishes'>Dishes</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='about'>About </a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='menu'> Menu</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='reviews'>Reviews </a>
          </nav>
        </div>
        <div >
          <h1 className='font-mendium text-xl pb-4 pt-5 md:pt-0'>
            Menu
          </h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Our Dishes </a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Premium MEnu</a>
        
          </nav>
        </div>
        <div >
          <h1 className='font-mendium text-xl pb-4 pt-5 md:pt-0'>
            Contact Us
          </h1>
          <nav className='flex flex-col gap-2'>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>anasbutt7079@gmail.com</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>+92 345 6562538</a>
            <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>FaceBook</a>   
          </nav>
        </div>
      </div>
      <div>
        <p className='text-center'>
          @copyright developed by
          <span className='text-brightColor'>
            Butt Saab
          </span>
          All rights reserved
        </p>
      </div>
    </div>
  )
}

export default Footer