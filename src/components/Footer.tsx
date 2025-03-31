
import React from 'react';
import { Flower, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-floral-purple/10 border-t border-floral-purple/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flower size={24} className="text-floral-pink" />
              <span className="text-xl font-semibold text-floral-plum">Blooming Bookings</span>
            </div>
            <p className="text-gray-600 mb-4">
              Creating beautiful floral arrangements for all occasions. Our expert florists bring your vision to life with fresh, seasonal blooms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-floral-plum hover:text-floral-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-floral-plum hover:text-floral-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-floral-plum hover:text-floral-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-floral-plum">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-600 hover:text-floral-pink transition-colors">Home</a>
              <a href="#services" className="text-gray-600 hover:text-floral-pink transition-colors">Services</a>
              <a href="#booking" className="text-gray-600 hover:text-floral-pink transition-colors">Book Now</a>
              <a href="#about" className="text-gray-600 hover:text-floral-pink transition-colors">About Us</a>
              <a href="#" className="text-gray-600 hover:text-floral-pink transition-colors">Gallery</a>
            </nav>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-floral-plum">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2 text-floral-pink" />
                hello@bloomingbookings.com
              </p>
              <p className="flex items-center text-gray-600">
                <Phone size={16} className="mr-2 text-floral-pink" />
                (555) 123-4567
              </p>
              <p className="text-gray-600">
                123 Blossom Street<br />
                Floral Park, NY 12345
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours:</span> Monday-Friday: 9am-6pm<br />
                Saturday: 10am-4pm, Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-floral-purple/10 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Blooming Bookings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
