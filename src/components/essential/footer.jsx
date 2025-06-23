import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 select-text ">
      <div className="max-w-7xl mx-auto px-6 flex items-center flex-col  sm:flex sm:items-center sm:justify-between  sm:flex-row">
        {/* Left: Portfolio Link */}
        <Link
          to="/"
          rel="noopener noreferrer"
          className="text-lg  hover:text-white font-serif  transition-colors"
        >
         Moosa-Portfolio
        </Link>

        {/* Center: Copyright */}
        <p className="text-sm text-center flex-1">
          © 2025 MoosaDev. Made with{" "}
          <span className="text-red-500 animate-pulse inline-block">❤️</span> by
          Moosa.
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://wa.me/923181822395"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
            aria-label="WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100023486677225"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/muhammadmoosa278?igsh=N3U0d2N0b3NqbWhk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-colors"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-moosa-06a310293/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
