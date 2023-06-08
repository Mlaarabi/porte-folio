import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const SocialLinks = () => {

    const links = [
        {
            id:1,
            value:(
                <>
                 LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/malak-laarabi-5340b6273/", 
            style:'rounded-tr-md',
        },
        {
            id:2,
            value:(
                <>
                 GitHub <FaGithub size={30}/>
                </>
            ),
            href:"https://www.github.com/Mlaarabi", 
        },
        {
            id:3,
            value:(
                <>
                 Email <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:malaklaarabi63@gmail.com", 
        },
        {
            id:4,
            value:(
                <>
                 Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"/malak.pdf", 
            style:'rounded-br-md',
            download : true,
        },
    ];

  return (
    <div className='hidden lg:flex flex-col left-0 fixed top-[35%]'>
      <ul> 
        {links.map(({id, value, href, style, download}) => (
            <li
              key={id}
              className={"flex justify-between items-center w-[160px] h-[60px] px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700 font"
              
            }
            >
            <a 
            href={href}
            className='flex justify-between items-center w-full text-gray-300'
            download={download}
            target='_blank'
            rel="noreferrer"
             >
                {value}
            </a>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks
