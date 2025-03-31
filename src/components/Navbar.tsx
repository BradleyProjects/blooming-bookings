
import React from 'react';
import { Flower } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-floral-pink/20 py-4 px-6 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Flower size={24} className="text-floral-pink animate-gentle-sway" />
          <span className="text-xl font-semibold text-floral-plum">Blooming Bookings</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="flower-petal text-floral-plum hover:text-floral-pink transition-colors">Home</a>
          <a href="#services" className="flower-petal text-floral-plum hover:text-floral-pink transition-colors">Services</a>
          <a href="#booking" className="flower-petal text-floral-plum hover:text-floral-pink transition-colors">Book Now</a>
          <a href="#about" className="flower-petal text-floral-plum hover:text-floral-pink transition-colors">About Us</a>
        </div>
        <div>
          <button className="bg-floral-pink text-floral-plum font-medium px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
