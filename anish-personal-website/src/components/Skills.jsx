// import React from 'react'
// import c from '../assets/c.png'
// import csharp from '../assets/csharp.png'
// import css from '../assets/css.png'
// import dotnet from '../assets/dotnet.png'
// import flask from '../assets/flask.png'
// import html from '../assets/html.png'
// import java from '../assets/java.png'
// import javascript from '../assets/javascript.png'
// import nodejs from '../assets/nodejs.png'
// import php from '../assets/php.png'
// import python from '../assets/python.png'
// import react from '../assets/react.png'
// import angular from '../assets/angular.png'
// import sql from '../assets/sql.png'

// const Skills = () => {
//   return (
//     <div>
//         <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
//               place-items-center md:flex md:justify-between md:items-center'>
//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={java} alt="" width={100} height={100}/>
//               <p className='mt-2'>Java</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={python} alt="" width={100} height={100}/>
//               <p className='mt-2'>Python</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={javascript} alt="" width={100} height={100}/>
//               <p className='mt-2'>JavaScript</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={csharp} alt="" width={100} height={100}/>
//               <p className='mt-2'>C#</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={c} alt="" width={100} height={100}/>
//               <p className='mt-2'>C</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={html} alt="" width={100} height={100}/>
//               <p className='mt-2'>HTML</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={css} alt="" width={100} height={100}/>
//               <p className='mt-2'>CSS</p>
//           </div>

          
//         </div>
        

//         <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3
//               place-items-center md:flex md:justify-between md:items-center'>
//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={sql} alt="" width={100} height={100}/>
//               <p className='mt-2'>SQL</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={react} alt="" width={100} height={100}/>
//               <p className='mt-2'>React</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={angular} alt="" width={100} height={100}/>
//               <p className='mt-2'>Angular</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={flask} alt="" width={100} height={100}/>
//               <p className='mt-2'>Flask</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={nodejs} alt="" width={100} height={100}/>
//               <p className='mt-2'>Node.js</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={php} alt="" width={100} height={100}/>
//               <p className='mt-2'>PHP</p>
//           </div>

//           <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
//               <img src={dotnet} alt="" width={100} height={100}/>
//               <p className='mt-2'>.NET</p>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Skills

import React from 'react';
import c from '../assets/c.png';
import csharp from '../assets/csharp.png';
import css from '../assets/css.png';
import dotnet from '../assets/dotnet.png';
import flask from '../assets/flask.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import nodejs from '../assets/nodejs.png';
import php from '../assets/php.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import angular from '../assets/angular.png';
import sql from '../assets/sql.png';

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 py-8 gap-8 max-w-[1200px] mx-auto'>
      <div className='max-w-[1200px] mx-auto text-center'>
        <h2 className='text-gray-700 text-3xl md:text-4xl font-bold mb-8'>
          Technologies I Have Used
        </h2>
      </div>

      <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-7 place-items-center md:flex md:justify-between md:items-center'>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={java} alt="Java" width={100} height={100} />
          <p className='mt-2'>Java</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={python} alt="Python" width={100} height={100} />
          <p className='mt-2'>Python</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={javascript} alt="JavaScript" width={100} height={100} />
          <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={csharp} alt="C#" width={100} height={100} />
          <p className='mt-2'>C#</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={c} alt="C" width={100} height={100} />
          <p className='mt-2'>C</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={html} alt="HTML" width={100} height={100} />
          <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={css} alt="CSS" width={100} height={100} />
          <p className='mt-2'>CSS</p>
        </div>
      </div>

      <div className='bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-7 place-items-center md:flex md:justify-between md:items-center'>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={sql} alt="SQL" width={100} height={100} />
          <p className='mt-2'>SQL</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={react} alt="React" width={100} height={100} />
          <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={angular} alt="Angular" width={100} height={100} />
          <p className='mt-2'>Angular</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={flask} alt="Flask" width={100} height={100} />
          <p className='mt-2'>Flask</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={nodejs} alt="Node.js" width={100} height={100} />
          <p className='mt-2'>Node.js</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={php} alt="PHP" width={100} height={100} />
          <p className='mt-2'>PHP</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={dotnet} alt=".NET" width={100} height={100} />
          <p className='mt-2'>.NET</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
