import React from "react";

function Technologies() {
  return (
    <div className="bg-black text-white pt-10 pb-16">
      {/* Header Section */}
      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-blue-600 mb-3">
          Tools & Technologies
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-gray-300">
          Using a combination of cutting-edge technologies and reliable
          open-source tools, I build user-focused, performant websites for all
          screen sizes.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 mt-12 w-full max-w-7xl mx-auto text-center">
        {[
          {
            name: "HTML",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            bg: "bg-orange-700",
          },
          {
            name: "CSS",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
            bg: "bg-white",
          },
          {
            name: "Bootstrap",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
            bg: "bg-purple-700",
          },
          {
            name: "Tailwind",
            src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
            bg: "bg-white",
          },
          {
            name: "JavaScript",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            bg: "bg-yellow-300",
          },
          {
            name: "React",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            bg: "bg-white",
          },
          {
            name: "Express Js",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
            bg: "bg-white",
          },
          {
            name: "Node Js",
            src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
            bg: "bg-white",
          },
          {
            name: "MongoDB",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
            bg: "bg-white",
          },
          {
            name: "Postman",
            src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
            bg: "bg-orange-600",
          },
          {
            name: "Github",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            bg: "bg-white",
          },
          {
            name: "Git",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
            bg: "bg-white",
          },
          {
            name: "Vercel",
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            bg: "bg-white",
          },
        ].map((tech, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-105 border-2 border-transparent hover:border-blue-600"
          >
            <img
              src={tech.src}
              alt={tech.name}
              className={`h-[70px] w-[70px] p-4 rounded-full mx-auto mb-3 ${tech.bg}`}
            />
            <h1 className="font-semibold">{tech.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
