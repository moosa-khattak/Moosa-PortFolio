import React from "react";

function About() {
  return (
    <main>
      <div className="bg-[#090b0d] min-h-screen flex flex-col items-center text-center px-4 py-20">
        {/* Heading */}
        <div className="text-3xl sm:text-5xl font-serif font-extrabold text-blue-600 mb-3">
          About Me
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300">
            <img
              src="/assests/aboutbackgroundImage.jpg"
              alt="About Me"
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>

          {/* Text and Skills */}
          <div className="flex flex-col justify-center gap-8">
            <p className="text-gray-300 text-lg sm:text-xl text-justify bg-gray-900 p-6 rounded-2xl shadow-inner">
             I am a Full Stack Developer skilled in both MERN Stack (MongoDB, Express.js, React.js, Node.js) and Laravel. I have experience building scalable and efficient web applications using modern frontend and backend technologies. I enjoy designing user-friendly interfaces and developing secure, high-performance backend systems. My projects include dynamic websites, RESTful APIs, and database-driven platforms built with MERN and Laravel. I am comfortable working in both team environments and independently. I am always eager to learn new technologies and continuously improve my development skills. My goal is to build powerful, responsive, and real-world problem-solving web applications
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {["Problem Solving", "Team Player", "Creative Thinker"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-blue-700 px-5 py-3 rounded-3xl text-white font-semibold cursor-pointer
                      hover:bg-blue-900 hover:text-cyan-200 transition-colors duration-300 shadow-md"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
