import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-12 bg-white">
      <div className="flex items-center justify-between py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/">
          <span className="text-lg font-bold text-[#000000]">Brisphere</span>
        </Link>
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex text-lg text-[#2e2e2e] font-normal space-x-6">
          <a href="#home">Discover</a>
          <a href="#discover">Services</a>
          <a href="#about-us">About Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="bg-white shadow-md md:hidden">
          <a href="#home" className="block px-4 py-2 text-gray-700">
            Home
          </a>
          <a href="#discover" className="block px-4 py-2 text-gray-700">
            Discover
          </a>
          <a href="#about-us" className="block px-4 py-2 text-gray-700 ">
            About Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;