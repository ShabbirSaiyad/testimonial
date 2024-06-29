import React from 'react'
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";



const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img src={review.image} alt="userImage" className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"></img>
            <div className='rounded-full w-[140px] h-[140px] z-[-10] absolute top-[-6px] left-[10px] bg-[#0a7e8c]'></div>
        </div>

        <div className="text-center mt-7">
          <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
          <p className='text-sm uppercase '>{review.job}</p>
        </div>

        
        <div className='text-violet-400 mx-auto mt-5'>
        <RiDoubleQuotesL  fontSize="1.75rem"/>
        </div>

        <div className='text-center mt-4 text-black'>
          <p>{review.text}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
        <RiDoubleQuotesR fontSize="1.75rem"/>
        </div>
       

    </div>
  )
}

export default Card