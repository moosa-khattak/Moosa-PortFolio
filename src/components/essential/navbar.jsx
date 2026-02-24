import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <AiOutlineHome /> },
    { name: "About", path: "/About", icon: <FaInfoCircle /> },
    { name: "Contact", path: "/Contact", icon: <BiSolidContact /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header className="hidden sm:flex items-center justify-between px-6 py-5 bg-gray-950 text-white shadow-md">
        <Link className="flex justify-center items-center gap-3" to="/">
          <img
            src="/assests/myimg.jpg"
            className="h-[70px] w-[70px] rounded-full border-2 border-cyan-400 shadow-lg"
            alt="Logo"
          />

          <span className="text-2xl font-serif font-extrabold text-blue-600">
            PortFolio
          </span>
        </Link>

        <nav>
          <ul className="flex gap-6 text-lg font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 hover:text-blue-400 transition-all duration-200"
              >
                {item.icon}
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Navbar Header Elements */}
      <header className="sm:hidden bg-gray-950 text-white px-6 py-5 shadow-md flex justify-between items-center relative z-50">
        <Link to="/">
          <img
            src="/assests/myimg.jpg"
            className="h-[50px] w-[50px] rounded-full border-2 border-cyan-400 shadow-lg"
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-cyan-400 focus:outline-none transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
      </header>

      {/* Extracted Mobile Menu Overlay Component */}
      <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </>
  );
}

export default Navbar;
