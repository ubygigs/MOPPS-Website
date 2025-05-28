import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.svg";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-mopps-navy shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Mopps Logo"
                className="h-8 mr-2"
              />
            </div>{" "}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-white hover:text-mopps-light transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "font-semibold"
                    : "font-normal"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-2 rounded-md transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-mopps-navy mt-4 py-4 rounded-md animate-fade-in">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-white hover:text-mopps-light transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "font-semibold"
                      : "font-normal"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-2 rounded-md transition-colors duration-300 text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
