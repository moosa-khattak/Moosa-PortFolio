import React from "react";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

function Service() {
  return (
    <div className="bg-gray-900 pt-16 pb-20 text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          <span className="text-3xl sm:text-5xl font-serif font-extrabold text-blue-600 mb-3">
            Services
          </span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 px-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Full Stack */}
        <div className="bg-gray-800 rounded-3xl border-2 border-gray-800 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:scale-105 p-8">
          <div className="text-blue-500 text-4xl mb-4">
            <FaCode />
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Full Stack Web Development
          </h2>
          <p className="text-gray-300 text-justify">
            I create seamless, scalable web applications by combining both
            front-end and back-end technologies to ensure performance, security,
            and responsiveness.
          </p>
        </div>

        {/* Frontend */}
        <div className="bg-gray-800 rounded-3xl border-2 border-gray-800 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:scale-105 p-8">
          <div className="text-blue-500 text-4xl mb-4">
            <FaLaptopCode />
          </div>
          <h2 className="text-2xl font-bold mb-3">Front-End Development</h2>
          <p className="text-gray-300 text-justify">
            I specialize in creating intuitive and visually appealing UIs using
            HTML, CSS, JavaScript, and React — making your applications
            beautiful and interactive.
          </p>
        </div>

        {/* Backend */}
        <div className="bg-gray-800 rounded-3xl border-2 border-gray-800 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:scale-105 p-8">
          <div className="text-blue-500 text-4xl mb-4">
            <FaServer />
          </div>
          <h2 className="text-2xl font-bold mb-3">Back-End Development</h2>
          <p className="text-gray-300 text-justify">
            I build robust server-side logic with Node.js and Express, handle
            databases efficiently, and ensure the backend is secure, fast, and
            scalable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
