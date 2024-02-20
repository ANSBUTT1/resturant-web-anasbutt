import React from 'react'

const ReviewCard = (props) => {
    return (
        <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5 rounded-lg'>
            <div>
                <p className='text-lightText'>
                    Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Quidem dicta, reprehenderit magni
                    assumenda dolor laboriosam sit obcaecati quisquam impedit
                    officia debitis nulla repellat aperiam autem.
                    Soluta amet provident aspernatur animi.
                </p>
            </div>
            <div className='flex flex-row justify-center items-center mt-4 gap-4'>
                <img className='rounded-full w-1/4' src={props.img} alt='img'/>
                <h3 className='font-semibold'>
                    {props.name}
                </h3>
            </div>
        </div>
    )
}

export default ReviewCard