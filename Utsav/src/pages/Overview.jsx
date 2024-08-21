import React from 'react';

const Overview = () => {
  return (
    <div className="container mx-auto mt-20 px-4 pb-10">
      <div className="gap-10 mb-10">
        <div className="overview mb-10">
          <h1 className="text-3xl mt-10 font-semibold text-center mb-5">Micro-Doppler Based Target Classification</h1>
          <p className="text-lg mb-6 text-center">
            Welcome to the overview of our cutting-edge Micro-Doppler Based Target Classification system. This innovative project leverages advanced radar sensor technology and machine learning algorithms to differentiate between various types of objects, such as drones and birds, based on their unique micro-Doppler signatures.
          </p>
          <p className="text-lg mb-6 text-center">
            The system uses micro-Doppler signatures captured from radar sensors to identify and classify targets. This is achieved through the analysis of distinctive features generated by rotating blades of drones and the wing beats of birds. Our solution provides accurate and real-time classification, making it highly valuable for applications in security and surveillance.
          </p>
          <h2 className="text-2xl font-semibold text-center mb-5">Key Features:</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-2">Real-time detection and tracking of targets</li>
            <li className="mb-2">High accuracy in distinguishing between drones and birds</li>
            <li className="mb-2">Integration with modern radar sensor technology</li>
            <li className="mb-2">Machine learning algorithms for feature extraction and classification</li>
            <li className="mb-2">Customizable and scalable for various applications</li>
          </ul>
          <p className="text-lg mb-6 text-center">
            Our Micro-Doppler Based Target Classification system is designed to enhance the capabilities of security and surveillance systems, offering precise and reliable identification of aerial targets. Explore the potential of our solution and how it can be integrated into your security infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;