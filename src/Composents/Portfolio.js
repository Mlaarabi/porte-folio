import React from 'react'
import ACM from '../assets/photoACM.png';
import DClock from '../assets/photoClock.jpg';
import Graphy from '../assets/photoGraphy.jpg';
import BiCard from '../assets/photoCard.jpg';


const Portfolio = () => {
    const portfolios = [
        {
            id : 1,
            source : BiCard,
            style: { height: '150px' },
            biCode : 'https://github.com/Mlaarabi/business-card/tree/main',
            biDemo : 'https://business-card-perso.netlify.app/'

        },
        {
            id : 2,
            source : Graphy,
            style: {  height: '150px' } ,
            biCode : 'https://github.com/Mlaarabi/Graphy/tree/main',
            biDemo : 'https://graphy-infos-acm.netlify.app/'
        },
        {
            id : 3,
            source : DClock,
            style: {height: '150px' },
            biCode :'https://github.com/Mlaarabi/digital-clock/tree/main',
            biDemo : 'https://digital-clock-enligne.netlify.app/'
        },
        {
            id : 4,
            source : ACM,
            style: {  height: '150px' },
            biCode :'https://github.com/Mlaarabi/ACM4/tree/main'
        },
    ]
    
  return (
    <div
    name="Portfolio"
    className='w-full md:h-screen bg-gradient-to-b from-gray-800 via-black to-black text-white'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>

            <div className='pb-8 sm:mx-12 flex flex-col items-start '>
                <h2 className='text-4xl font-bold  text-green-500 border-b-4 border-gray-300 my-3'> Portfolio </h2>
                <span className='text-xl font-medium    text-gray-300'> Check out some of my recent works</span>
            </div>

            <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-12 mt-3' >
                
                {portfolios.map(({id,source,style,biCode,biDemo}) => (
                <div key={id} className='shadow-md  shadow-gray-300 rounded-lg hover:bg-gray-300 hover:text-black hover:text-lg '>
                     <div className='aspect-w-1 aspect-h-1'>
                     <img 
                      src={source}
                      alt=''
                      className='rounded-md object-cover w-full h-full  duration-200 hover:scale-105'
                      style={style}
                     />
                     </div>
                     
                    
                    <div className=' flex items-center justify-center'>

            
                        <button className='w-1/2 px-6 py-4 duration-200 hover:scale-110' >
                            <a href={biDemo} target='_blank' rel='noopener noreferrer'>
                            Demo 
                            </a>
                       </button>

                       <button className='w-1/2 px-6 py-4 duration-200 hover:scale-110'>
                       <a href={biCode} target='_blank' rel='noopener noreferrer'>
                             Code 
                        </a>
                       </button>


                        

                    </div>
                </div>
            ))}
            </div>

            

        </div>   
    </div>
  )
}

export default Portfolio
