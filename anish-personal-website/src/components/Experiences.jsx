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
      dates: 'June 2023 - Aug 2023',
      details: ['Improved customer booking experience on the Chase travel portal (15+ million users) utilizing ASP.NET Core, Angular, and AWS', 'Developed an efficient external facing feature on the rental cars and price options pages to toggle between various payment options when viewing travel bookings', 'Created 6+ Angular components tied to 5+ services and APIs to retrieve/display the data corresponding to the selected form of payment (rewards points, dollars, or a combination of both)'],
      logo: jpmorgan,
    },
    {
      title: 'Software Development Intern',
      company: 'Paycom',
      dates: 'May 2022 - Aug 2022',
      details: ['Developed a full stack web application integrated with the Paycom software that enables the company to automate and digitize the process of nominating, approving, and awarding employee patches for various accomplishments', 'Boosted time efficiency of management in charge of the current Patch Program by 70% - utilizing PHP, MVC and React '],
      logo: paycom,
    },
    {
      title: 'Information Security Mentee',
      company: 'City of Frisco',
      dates: 'Oct 2019 - Dec 2021',
      details: ['Worked with the Security Officer for the City of Frisco to further research Ethical Hacking and Network/App Security', 'Obtained guidance when preparing for national Cybersecurity Competitions, such as Cyberpatriot and Business Professionals of America (BPA) Computer Security Event', 'Placed 1st at the 2021 BPA National Competition and Gold t ier at the 2020 Cyberpatriot National Competition (Team Captain)'],
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

