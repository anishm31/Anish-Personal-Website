import React from 'react'
import headshot from '../assets/anish-headshot.png'
import { TypeAnimation } from "react-type-animation"

const HomeDesign = () => {
  return (
    <div>
        <div className='grid gric-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>

            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <div className='w-[300px] h-auto lg:w-[400px]'>
                    <img src={headshot} alt="headshot" />
                </div>
            </div>

            <div className='col-span-2 px-5 my-auto'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                    <span className="primary-color">
                        I'm a
                    </span> <br />
                    <TypeAnimation 
                    sequence={[
                        "Full Stack Developer",
                        1000,
                        "Engineer",
                        1000,
                        "Coding Enthusiast",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>

                
            </div>
        </div>
    </div>
  )
}

export default HomeDesign