import React from 'react'
import { BsBraces } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { FaSwatchbook } from "react-icons/fa";
import Skill from "./Skill"
import Accordion from "./Accordion"

const Skills = () => {
  return (
    
    <div
     name ="Skills"
     className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white' >

      <div className='max-w-screen-lg p-4 justify-center flex flex-col  mx-auto w-full h-full pt-1'>

         <div className=' sm:mx-12 flex flex-col items-start '>
          <h2 className='text-4xl font-bold  text-green-500 border-b-4 border-gray-300 my-3'> Skills</h2>
          <span className='text-xl font-medium  text-gray-300'> My technical level </span>
         </div>

         <div className='gap-y-0 mt-15 py-10 '>
          <div>
          <Accordion icon={<BsBraces/>} title="Frontend developer">
                <Skill skillName="HTML" progress={90} />
                <Skill skillName="CSS" progress={80} />
                <Skill skillName="Javascript" progress={70} />
                <Skill skillName="React" progress={90} />
                <Skill skillName="Tailwind CSS" progress={70} />
              </Accordion>
          </div>

          <div>
          {/* <div className='h-max-content mb-10'>
            <div className='gap-y-6 pl-10 h-auto overflow-visible  mb-10 h-max-content'> */}
              <Accordion icon={<FaServer/>} title=" Backend developer">
                <Skill skillName="PHP" progress={50} />
                <Skill skillName="Python" progress={70} />
                <Skill skillName="Java" progress={70} />
              </Accordion>
            {/* </div>
        </div> */}
        </div>

        <div>
          {/* <div className='h-max-content mb-10'>
            <div className='gap-y-6 pl-10 h-auto overflow-visible  mb-10 h-max-content'> */}
              <Accordion icon={<FaSwatchbook/>} title=" working environment ">
                <Skill skillName="Figma" progress={70} />
                <Skill skillName="canva" progress={85} />
              </Accordion>
            {/* </div>
        </div> */}
        </div>      
         </div>
      </div> 
    </div>
  )
}

export default Skills
