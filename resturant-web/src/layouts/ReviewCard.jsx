import React from 'react';
import lukman from "../assests/images/lukman.jpg";
import maryam from "../assests/images/maryam.jpg";
import ruksana from "../assests/images/ruksana.jpg"
const ReviewCard = () => {
    const ReviewData = [
        {
            id: 1,
            name: "Lukman Khalid",
            img: lukman,
            review: "Dazzling culinary journey! Masterpieces of flavor and presentation await. Eager for another heavenly experience!"
        },
        {
            id: 2,
            name: "Maryam Javaid",
            img: maryam,
            review: "Foodie's delight! Exquisite attention to detail and mind-blowing flavors. Essential for every culinary aficionado!"
        },
        {
            id: 3,
            name: "Ruksana Amjad",
            img: ruksana,
            review:"Ideal for celebrations! Warm ambiance, flawless service, and heavenly cuisine. Each dish surprises and satisfies. Highly recommended!"
        },
    ];

    return (
        <>
            {ReviewData && ReviewData.map(data => (
                <div key={data.id} className=' w-full md:w-1/3 bg-white border-2 border-lightText md:border-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 rounded-lg'>
                    <div>
                        <p className='text-lightText'>{data.review}</p>
                    </div>
                    <div className='flex flex-row justify-center items-center mt-4 gap-4'>
                        <img className='rounded-full w-1/4' src={data.img} alt='img' />
                        <h3 className='font-semibold'>{data.name}</h3>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ReviewCard;
