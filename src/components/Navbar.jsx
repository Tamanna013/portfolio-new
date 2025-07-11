const Navbar = () => {
  return (
    <div className="fixed w-full z-50 bg-transparent backdrop-blur-md bg-opacity-50 m-0 pt-2">
      <div className="flex items-center justify-between h-6 px-6">
        <h1 className="text-pink-400 text-2xl font-bold">Tamanna Shaw</h1>
        <nav>
          <ul className="flex space-x-6 text-white">
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
            <li><a href="#experience" className="hover:text-gray-300">Experience</a></li>
            <li><a href="#certifications" className="hover:text-gray-300">Certifications</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
