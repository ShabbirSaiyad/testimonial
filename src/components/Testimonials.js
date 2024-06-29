import React, {useState} from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


const Testimonials = (props) => {
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    function leftShiftHandler(){
      if(index - 1 < 0){
          setIndex(reviews.length-1);
      }
      else{
        setIndex(index - 1);
      }
    }

    function rightShiftHandler(){
      if(index + 1 >= reviews.length){
          setIndex(0);
      }
      else{
        setIndex(index + 1);
      }
    }
     function surpriseHandler(){
     let randomIndex =  Math.floor((Math.random()*reviews.length));
      setIndex(randomIndex);
     }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 hover:shadow-xl rounded-md' >

        <Card review = {reviews[index]}/>

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
          <button onClick={leftShiftHandler}
          className='cursor-pointer hover:text-[#0a7e8c]'><FiChevronLeft/></button>
          <button onClick={rightShiftHandler}
          className='cursor-pointer hover:text-[#0a7e8c]'><FiChevronRight/></button>
        </div>

        <div className='mt-6'>
          <button onClick={surpriseHandler}
          className='bg-[#0a7e8c] hover:bg-[#20b2aa] transition-all duration-300 text-white cursor-pointer px-10 py-2 text-lg  rounded-md font-bold'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials