import React from 'react'
import headshot from '../assets/anish-headshot.png'
import { TypeAnimation } from "react-type-animation"
import { FaGithub, FaLinkedin, FaGitlab, FaEnvelope } from 'react-icons/fa'

const HomeDesign = () => {
  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black'>

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
                        className='text-3xl sm:text-4xl lg:text-6xl'
                        sequence={[
                            "Full Stack Developer",
                            1000,
                            "Engineer",
                            1000,
                            "Problem Solver",
                            1000,
                            "Innovator",
                            1000
                        ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    />
                </h1>
                <p className="text-white sm:text-lg my-6 lg:text-xl">
                    My name is Anish Madgula, and I am a Computer Science student at UT Austin!
                </p>

                <div className='my-8 flex items-center'>
                    <a href="https://drive.google.com/file/d/14bosMPmGKwVpxKuhS6u9LIjyb8PWZ9JB/view?usp=sharing" className='px-6 py-3 w-full sm:w-auto sm:px-4 sm:py-2 text-center rounded-xl mb-2 sm:mb-0 sm:mr-4 bg-gradient-to-br from-blue-500 to-green-600 text-white'>
                        View Resume
                    </a>
                    <a href="#contact" className='px-6 py-3 w-full sm:w-auto sm:px-4 sm:py-2 text-center rounded-xl mb-2 sm:mb-0 sm:mr-4 border border-gray-400 hover:bg-gradient-to-br from-blue-500 to-green-600 text-white hover:border-none'>
                        Contact Me
                    </a>

                    <div className='flex items-center'>
                        <a href="https://github.com/anishm31" className='text-white mx-2' target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/anish-madgula/" className='text-white mx-2' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://gitlab.com/animadgula" className='text-white mx-2' target="_blank" rel="noopener noreferrer">
                            <FaGitlab size={30} />
                        </a>
                        <a href="mailto:animadgula@gmail.com" className='text-white mx-2'>
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeDesign