import React from 'react'
import spinthespectrum from '../assets/spin_the_spectrum_cover.jpg'
import syrianrefugee from '../assets/syrianrefugees.jpg'
import nbapredictions from '../assets/nbapredictions.jpg'
import backdoor from '../assets/backdoor.jpg'
import personalwebsite from '../assets/personalwebsite.png'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='projects'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Projects</p>
            <p className='text-gray-400'>Check out some of my projects!</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duratin-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] 
            group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
                <img src={spinthespectrum} alt="" layout="fill" objectFit="cover"/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                  <span className='text-2xl font-bold text-white tracking-wider'></span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        View
                      </button>
                    </a>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects