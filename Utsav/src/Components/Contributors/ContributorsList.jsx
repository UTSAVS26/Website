import React from 'react';
import { contributorsData } from './contributorsData';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContributorsList = () => {
  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Contributors</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {contributorsData.map((contributor) => (
          <div key={contributor.id} className="bg-blue-200 text-black p-4 rounded-lg flex flex-col items-center shadow-md w-64">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-black flex items-center justify-center">
              <img src={contributor.image} alt={contributor.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{contributor.name}</h3>
              <p className="text-black mb-1"><strong>Work:</strong> {contributor.work}</p>
              <div className="flex space-x-4 mt-2 justify-center">
                <a href={contributor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href={contributor.github} target="_blank" rel="noopener noreferrer" className="text-gray-700">
                  <i className="fab fa-github fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsList;