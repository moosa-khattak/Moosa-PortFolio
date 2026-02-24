import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function MobileNavbar({ isOpen, setIsOpen, navItems }) {
    return (
        <div
            className={`fixed  inset-0 bg-gray-950/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out sm:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Mobile Menu Overlay */}
            <div className="flex flex-col items-center justify-center h-full relative pt-20">
                <ul className="space-y-8 text-center mt-[-10vh]">
                    {navItems.map((item, index) => (
                        <li
                            key={item.name}
                            className={`transform transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 100 + 100}ms` }}
                        >
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="flex flex-col items-center gap-2 group text-2xl font-semibold text-gray-300 hover:text-cyan-400 transition-colors"
                            >
                                <span className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-200">
                                    {item.icon}
                                </span>
                                <span>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MobileNavbar;
