import React, { useState } from 'react';
import paycom from '../assets/paycompic.jpg';
import jpmorgan from '../assets/jpmorgan.png';
import cityoffrisco from '../assets/cityoffrisco.png';

const Experience = ({ title, company, dates, details, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative mb-8">
      <div className="relative bg-cover bg-center rounded-lg shadow-md h-48" style={{ backgroundImage: `url(${logo})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div>
            <h3 className="text-xl font-semibold text-white">{company}</h3>
            <p className="text-gray-400 text-sm">{dates}</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          >
            {isOpen ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-lg shadow-md">
          <h4 className="text-lg font-bold">{title}</h4>
          <ul className="mt-2 list-disc list-inside">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Experiences = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Company A',
      dates: 'Jan 2020 - Present',
      details: ['Developed web applications', 'Collaborated with cross-functional teams', 'Implemented new features and improvements'],
      logo: jpmorgan,
    },
    {
      title: 'Frontend Developer',
      company: 'Tech Company B',
      dates: 'Mar 2018 - Dec 2019',
      details: ['Built responsive UI components', 'Worked with designers to create user-friendly interfaces', 'Maintained code quality through code reviews'],
      logo: paycom,
    },
    {
      title: 'Intern',
      company: 'Tech Company C',
      dates: 'Jun 2017 - Aug 2017',
      details: ['Assisted in software development', 'Performed testing and debugging', 'Contributed to team projects'],
      logo: cityoffrisco,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8" id='experiences'>
      <h2 className="text-4xl mb-6 font-bold primary-color text-left">Work Experiences</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <Experience key={index} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;

