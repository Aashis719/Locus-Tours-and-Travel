import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      // Close the menu if clicked outside of the navbar (while it's open)
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside); // Detect outside clicks

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside); // Clean up the event listener
    };
  }, [isMenuOpen]); // Add isMenuOpen to the dependency array

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when clicking on any link
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all bg-white md:bg-transparent duration-300  ${
      scrolled ? "bg-white md:bg-white shadow-md text-gray-700 " : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-gray-900">
              <img src='/logo.png' className='w-30' />
            </span>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8 relative">
            <a href="#home" className="hover:text-orange-500 duration-300 font-bold">Home</a>
            <a href="#services" className="hover:text-orange-500 duration-300 font-bold">Services</a>
            <a href="#experiences" className="hover:text-orange-500 duration-300 font-bold">Experiences</a>
            {/* <a href="#contact" className="hover:text-orange-500 duration-300 font-bold">Contact</a> */}
            <Link href="/contact" className='hover:text-orange-500 duration-300 font-bold'>Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 hover:text-orange-500 duration-300 font-bold"
              onClick={handleLinkClick} // Close menu on click
            >
              Home
            </a>
            <a
              href="#services"
              className="block px-3 py-2 hover:text-orange-500 duration-300 font-bold"
              onClick={handleLinkClick} // Close menu on click
            >
              Services
            </a>
            <a href="#experiences" className="hover:text-orange-500 duration-300 font-bold block px-3 py-2"
            onClick={handleLinkClick}
            >Experiences</a>

            <a
              href="#testimonials"
              className="block px-3 py-2 hover:text-orange-500 duration-300 font-bold"
              onClick={handleLinkClick} // Close menu on click
            >
              Testimonials
            </a>
            <Link href="/contact" className='hover:text-orange-500 duration-300 font-bold block px-3 py-2'>Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
