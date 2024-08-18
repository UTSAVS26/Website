import React from "react";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center hero bg-gray-800 text-white">
        <div className="text-center max-w-[800px] px-4 py-8 h-full flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Micro-Doppler Based Target Classification
          </h2>
          <p className="max-w-[700px] mt-4 mb-6 mx-auto leading-relaxed md:leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod?
          </p>
          <div className="mt-6 flex flex-wrap justify-center">
            <Link to="/Overview">
              <button className="bg-white text-black py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Home
              </button>
            </Link>
            <Link to="/Dashboard">
              <button className="bg-white text-black py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Dashboard
              </button>
            </Link>
            <Link to="/Contact">
              <button className="bg-white text-black py-3 px-6 font-medium rounded-full m-2 hover:bg-gray-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;