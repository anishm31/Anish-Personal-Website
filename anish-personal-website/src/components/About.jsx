// import React from 'react'
// import aboutpic from '../assets/aboutpic.jpg'

// const About = () => {
//   return (
//     <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
//         <div className='md:grid md:grid-cols-2 sm:py-16'>
            
//             <div className='mt-4 md:mt-0 text-left flex'>
//                 <div className='my-auto mx-6'>
//                     <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
//                     <p className='text-base lg:text-lg'>
//                         gliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrggliughrerelhgehgsurlewhgrehugeggregeggrgrgrgrgrgrgrgrg
//                     </p>
//                 </div>
//             </div>

//             <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutpic} alt="" width={300} height={300} />
//         </div>
//     </div>
//   )
// }

// export default About

import React from 'react'
import aboutpic from '../assets/aboutpic.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
        <div className='md:flex sm:py-16'>
            
            

            <div className='mt-4 md:mt-0 text-left flex-grow md:w-2/3'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Hello! My name is Anish, and I am currently an incoming senior at The University of Texas at Austin. 
                        I am pursuing a Computer Science major as well as a minor in Business and a certificate in 
                        Applied Statistics. I am passionate about developing technology to solve real world issues and contribute to 
                        the growth of the technology and business industries. I am continuously pursuing opportunities to 
                        expand my knowledge and skills as a software engineer, and I am enthusiastic about the chance to create 
                        a significant impact through my contributions in this field.
                        <br />
                        <br />
                        In my free time, I love playing tennis, ping pong, and pickleball, as well as spending quality time with friends and family!
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0 md:w-1/3' src={aboutpic} alt="About" />
        </div>
    </div>
  )
}

export default About
