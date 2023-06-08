import React from 'react'

const Contact = () => {
  return (
    <div 
    name="Contact"
    className='h-screen w-full bg-gradient-to-b from-black via-gray-800 to-gray-800 text-white p-4'>
        <div className='max-w-screen-lg  mx-auto flex flex-col justify-center  h-full '>
            <div className='pb-8 sm:mx-12 flex flex-col items-start mb-10 '>
                <h2 className='text-4xl font-bold  text-green-500 border-b-4 border-gray-300 my-3 '> Contact  </h2>
                <span className='text-xl font-medium text-gray-300'> Feel free to submit the form below in order to get in touch with me.</span>
            </div>
             
            <div className='flex justify-center items-center'>
                <form 
                action='https://getform.io/f/5a3715a4-a372-45a8-af4d-782aac8279b4'
                className=' flex flex-col w-full md:w-1/2 sm:px-12 '
                method="POST"
                >
                    <input
                     type='text'
                      name='name'
                      placeholder='enter your name'
                      className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                       />
                    <input
                     type='email'
                      name='email'
                      placeholder='enter your email'
                      className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                       />
                    <textarea
                    name ='message'
                    rows="10"
                    placeholder='enter your message'
                    className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    >

                    </textarea>
                    <button
                    className=' text-green-500 w-fit  px-6 py-3 my-8  mx-auto font-extrabold flex items-center cursor-pointer hover:scale-110 duration-50 text-xl h-12  border-2 border-gray-500   hover:text-black hover:bg-gradient-to-r from-green-300 to-gray-500 hover:border-green-300'
                    >
                        Let's talk 
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
