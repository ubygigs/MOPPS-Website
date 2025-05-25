import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mopps-navy text-white">
      <div className="container mx-auto px-4 md:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Mopps</h3>
            <p className="mb-4 text-mopps-light">
              Professional cleaning services for hospitality, commercial, and domestic spaces. We bring excellence to every corner.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-mopps-sky transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-mopps-sky transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-mopps-sky transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-mopps-light hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/about" className="text-mopps-light hover:text-white transition-colors duration-300">About Us</Link>
              <Link to="/services" className="text-mopps-light hover:text-white transition-colors duration-300">Services</Link>
              <Link to="/contact" className="text-mopps-light hover:text-white transition-colors duration-300">Contact</Link>
              <Link to="/quote" className="text-mopps-light hover:text-white transition-colors duration-300">Get a Quote</Link>
            </nav>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin size={20} className="mr-2 text-mopps-sky flex-shrink-0 mt-1" />
                <p className="text-mopps-light">123 Cleaning Avenue, Suite 500, New York, NY 10001</p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="mr-2 text-mopps-sky flex-shrink-0" />
                <p className="text-mopps-light">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-mopps-sky flex-shrink-0" />
                <p className="text-mopps-light">info@mopps.com</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-mopps-sky"
              />
              <button className="bg-mopps-blue hover:bg-mopps-sky text-white px-4 py-2 rounded-r-md transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-mopps-light">
          <p>&copy; {new Date().getFullYear()} Mopps Cleaning Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;