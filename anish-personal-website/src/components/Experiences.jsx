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
      title: 'Software Engineering Intern',
      company: 'JPMorgan Chase & Co.',
      dates: 'June 2023 - Aug 2023, June 2024 - Aug 2024',
      details: 
      [
        'Leveraged Spring Boot, React, and AWS ECS to contribute to a platform tracking feature flag tests for 65M+ users', 
        'Implemented UI and backend for a feature flag experiment registration form, boosting test setup efficiency by 60%',
        'Achieved 90% code coverage with Jest, JUnit 5, and Cypress, ensuring reliability for the experimentation platform',
        'Built a production ready feature on Chase travel portal to toggle between payment options on the rental cars page',
        'Created 6+ Angular components and 5+ services/APIs with ASP.NET Core to display data for payment forms'
      ],
      logo: jpmorgan,
    },
    {
      title: 'Software Development Intern',
      company: 'Paycom',
      dates: 'May 2022 - Aug 2022',
      details: 
      [
        'Developed a web app integrated with Paycom to automate and digitize the employee patch nomination process', 
        'Boosted management efficiency by 70% using React, PHP, and MVC for the Patch Program',
        'Created 15+ RESTful API endpoints and 5+ SQL tables to manage database updates and track patch data'
      ],
      logo: paycom,
    },
    {
      title: 'Information Security Mentee',
      company: 'City of Frisco',
      dates: 'Oct 2019 - Dec 2021',
      details: 
      [
        'Collaborated with Cybersecurity Officer on ethical hacking and penetration testing using Kali Linux and Wireshark', 
        'Researched networking protocols and encryption techniques for cyber competitions like CyberPatriot and BPA', 
        'Placed 1st at the 2021 BPA Nationals and Gold tier at the 2020 CyberPatriot Nationals as Team Captain'
      ],
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

