import React from 'react'
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
    name="Home"
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className='max-w-[1000px] mx-auto px-14 flex flex-col  justify-center h-full'>

           <p className='text-green-200 ml-1 text-xl mb-2'> Hi, my name is</p>
           <h1 className='text-2xl sm:text-6xl font-blod text-green-500 mb-1'> Malak Laarabi</h1>
           <h2 className='text-2xl sm:text-6xl font-blod  text-[#788546] mb-1'> I'm a Front-End Developer</h2>
           <p className='py-6 max-w-[700px] text-white font-bold text-justify'>
            I am a beginner web developer with a strong interest in technologies like 
             React, Tailwind, and Next.js. I am currently building my portfolio to showcase
             my skills and progress in this field. I am open to collaboration and project
             opportunities.
           </p>
           <div  > 
                <Link
                 to='Portfolio'
                 smooth
                 duration={500} 
                 className= 'group text-green-500 w-fit px-6 py-3 my-2 font-extrabold flex items-center cursor-pointer hover:scale-110 duration-50 text-xl h-12  border-2 border-gray-500   hover:text-black hover:bg-gradient-to-r from-green-300 to-gray-500 hover:border-green-300'>
                        portfolio
                <span className='group-hover:rotate-90 duration-300 ml-2'>
                  < FaAngleRight />
                </span>
               </Link>
           </div>
        </div>
      
    </div>
  )
}

export default Home
