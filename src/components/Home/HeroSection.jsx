import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-cover bg-center px-6 py-10 text-white"
      style={{
        backgroundImage: `url('/assests/backgroundimage.png')`,
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I am <span className="text-blue-400">Muhammad Moosa</span>
        </h1>

        <TypeAnimation
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400"
          sequence={[
            "FrontEnd Developer",
            1000,
            "BackEnd Developer",
            1000,
            "MERN Stack Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />

        <div className="text-lg sm:text-xl space-y-2">
          <p>I am a FrontEnd || BackEnd || FullStack Developer</p>
          <p>Currently working as a MERN Stack Developer</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-3xl mt-4">
          <a
            href="https://wa.me/923181822395"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100023486677225"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/muhammadmoosa278?igsh=N3U0d2N0b3NqbWhk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-moosa-06a310293/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Contact Button */}
        <Link to="/Contact">
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-cyan-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="hidden md:flex items-center justify-center">
        <img
          src="/assests/mysvg.svg"
          alt="Developer Illustration"
          className="w-[90%] h-auto max-h-[90vh]"
        />
      </div>
    </div>
  );
}

export default HeroSection;
