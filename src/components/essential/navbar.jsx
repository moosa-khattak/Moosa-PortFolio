import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BiSolidContact } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img
            src="/assests/myimg.jpg"
            className="h-[70px] w-[70px] rounded-full border-2 border-cyan-400 shadow-lg"
            alt="Logo"
          />
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

      {/* Mobile Navbar */}
      <header className="sm:hidden bg-gray-950 text-white px-6 py-5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="/assests/myimg.jpg"
              className="h-[50px] w-[50px] rounded-full border-2 border-cyan-400 shadow-lg"
              alt="Logo"
            />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </button>
        </div>

        {isOpen && (
          <ul className="mt-4 space-y-3 text-lg font-medium transition-all">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-2 hover:text-blue-400 transition-all duration-200"
              >
                {item.icon}
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
}

export default Navbar;
