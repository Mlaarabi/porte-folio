import React from 'react'

const About = () => {
  return (
    <div
    name="About"
    className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='pb-8 mx-4 sm:mx-12'>

                    <p className='text-4xl font-bold inline text-green-500 border-b-4 border-gray-300'> 
                        About
                    </p>

                    <p className='font-bold mt-20 text-justify'>
                    Hello! I'm Malak Laarabi, a passionate  web developer with expertise in HTML, CSS, JavaScript,
                     React, and Tailwind CSS. 
                    </p>

                    <br/>

                    <p className='font-bold text-justify'>
                    I hold a licence in Mathematics and Computer Science, which has honed my analytical and 
                    problem-solving skills. With certificates in Python programming and React development, 
                    I am well-equipped to create functional and visually appealing web applications.
                    </p>

                    
                    <br/>
                    <p className=' font-bold text-justify'>
                    Currently seeking a web development internship, I am eager to collaborate with
                     experienced developers and contribute to real-world projects.
                    </p>

                    <br/>

                    <p className='font-bold text-justify'>
                    Feel free to explore my portfolio and reach out for inquiries or potential opportunities. 
                    </p>
                    <br/>
                    <p className='font-bold text-justify'> Thank you for visiting!</p>
                </div>
                

                

        </div>

        </div>
    
  )
}

export default About
