import React from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import { Building, Hotel, UtensilsCrossed, Building2, Store, Users, Home, Sparkles, Trash2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-mopps-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mopps-navy to-mopps-blue opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/4108807/pexels-photo-4108807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cleaning Services"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Cleaning Services
            </h1>
            <p className="text-xl text-mopps-light mb-8">
              Comprehensive cleaning solutions tailored to your specific needs.
            </p>
            <Button to="/quote" size="lg">Get a Free Quote</Button>
          </div>
        </div>
      </section>

      {/* Hospitality Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Hospitality Cleaning"
            subtitle="Specialized cleaning services for the hospitality industry, ensuring the highest standards of cleanliness and hygiene."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Hotel className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Hotels & Resorts</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Guest room deep cleaning and turndown service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Lobby and common area maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Meeting room and event space preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Spa and fitness center sanitization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <UtensilsCrossed className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Restaurants & Bars</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Kitchen deep cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Dining area maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Bar and lounge cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Restroom sanitization and maintenance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building2 className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Holiday Homes & Rentals</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Property turnover cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Linen service and replacement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Regular maintenance cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Deep cleaning between guests</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button to="/quote">Request a Quote</Button>
          </div>
        </div>
      </section>

      {/* Commercial Cleaning */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Commercial Cleaning"
            subtitle="Professional cleaning services for businesses and commercial properties to maintain a pristine environment."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Office Spaces</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Daily/weekly workspace cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Boardroom and meeting room maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Kitchen and break room sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Carpet and floor cleaning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Store className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Retail Spaces</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Sales floor cleaning and maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Display and merchandise area dusting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Fitting room sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Entrance and window cleaning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Communal Areas</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Lobby and reception area maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Stairwell and elevator cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Shared bathroom facilities sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Hallway and corridor maintenance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button to="/quote">Request a Quote</Button>
          </div>
        </div>
      </section>

      {/* Domestic Cleaning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Domestic Cleaning"
            subtitle="Thorough home cleaning services to keep your living space immaculate and comfortable."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Home className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Regular House Cleaning</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Weekly/bi-weekly/monthly options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>All rooms dusting and vacuuming</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Kitchen and bathroom sanitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Floor cleaning and maintenance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Sparkles className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Deep Cleaning</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Inside cabinet and drawer cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Baseboards and trim dusting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Window sill and track cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Light fixture and ceiling fan dusting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Trash2 className="text-mopps-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">End of Tenancy</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Thorough move-out cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Appliance interior and exterior cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Wall mark removal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-mopps-blue mr-2">•</span>
                  <span>Carpet deep cleaning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <Button to="/quote">Request a Quote</Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-mopps-navy text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Cleaning Process"
            subtitle="We follow a structured approach to ensure consistent, high-quality results."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
            <div className="text-center relative">
              <div className="bg-mopps-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-2xl font-bold">1</span>
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-mopps-light/20 -z-0"></div>
              <h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
              <p className="text-mopps-light max-w-xs mx-auto">We evaluate your space and specific cleaning requirements.</p>
            </div>
            
            <div className="text-center relative">
              <div className="bg-mopps-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-2xl font-bold">2</span>
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-mopps-light/20 -z-0"></div>
              <h3 className="text-xl font-semibold mb-2">Customized Plan</h3>
              <p className="text-mopps-light max-w-xs mx-auto">We create a tailored cleaning plan specific to your needs.</p>
            </div>
            
            <div className="text-center relative">
              <div className="bg-mopps-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-2xl font-bold">3</span>
              </div>
              <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-mopps-light/20 -z-0"></div>
              <h3 className="text-xl font-semibold mb-2">Professional Cleaning</h3>
              <p className="text-mopps-light max-w-xs mx-auto">Our trained team executes the cleaning plan with precision.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-mopps-light/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
              <p className="text-mopps-light max-w-xs mx-auto">We conduct a thorough inspection to ensure everything is spotless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-mopps-light/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-mopps-navy mb-6">Ready to Experience Our Services?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation quote. Our team is ready to deliver the exceptional cleaning service you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/quote" size="lg">Get a Free Quote</Button>
              <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;