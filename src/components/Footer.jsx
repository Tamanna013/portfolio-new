const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-white py-4 text-sm flex items-center justify-center bg-transparent backdrop-blur-sm">
      <p className="text-center text-gray-400">
        © {currentYear} Tamanna Shaw. All rights reserved. ✨
      </p>
    </footer>
  );
};

export default Footer;
