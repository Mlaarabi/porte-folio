import React from 'react'
import { useState } from "react";
import { FaBars , FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);
   

    const links = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Skills",
        },
        {
            id: 4,
            link: "Portfolio",
        },
        {
            id: 5,
            link: "Contact",
        }
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-green-500 bg-black fixed">
        <div>
        <h1 className='text-5xl font-decoration ml-2 mt-2'> Malak </h1>
        </div>

        <ul className="hidden md:flex">
        {links.map( ({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-green-500 hover:scale-125 duration-200"
          >
              <Link to={link} smooth duration={500}>
              {link}
              </Link>      
          </li>
        ))}
        </ul>

        <div
         onClick={()=> setNav(!nav)}
         className="cursor-pointer pr-4 z-10 text-green-500 md:hidden ">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav &&  (
             <ul
             className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen
             bg-gradient-to-b from-black to-gray-800 text-green-500">
                {links.map( ({ id, link }) => (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 duration-200'
              >
                   <Link to={link} smooth duration={500} onClick={()=>setNav(!nav)}>
                       {link}
                   </Link>          
              </li>
            ))}
            </ul>
        ) }

       
      
    </div>
  )
}

export default NavBar