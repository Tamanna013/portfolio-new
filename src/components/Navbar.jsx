import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 bg-transparent backdrop-blur-md bg-opacity-50 pt-2">
      <div className="flex items-center justify-between px-6 h-12">
        <h1 className="text-pink-400 text-2xl font-bold">Tamanna Shaw</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
          <li><a href="#certifications" className="hover:text-gray-300">Certifications</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-start px-6 text-white bg-black bg-opacity-80 space-y-4 pb-4">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
