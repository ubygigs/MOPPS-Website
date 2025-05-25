import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-mopps-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mopps-navy to-mopps-blue opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-mopps-light mb-8">
              Get in touch with our team for inquiries, bookings, or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <SectionHeading
                title="Get In Touch"
                subtitle="We're here to answer any questions you might have about our services."
              />
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-3 mr-4">
                    <MapPin className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mopps-navy mb-1">Address</h3>
                    <p className="text-gray-600">123 Cleaning Avenue, Suite 500</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-3 mr-4">
                    <Phone className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mopps-navy mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-3 mr-4">
                    <Mail className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mopps-navy mb-1">Email</h3>
                    <p className="text-gray-600">info@mopps.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-3 mr-4">
                    <Clock className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mopps-navy mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-mopps-navy mb-4">Our Location</h3>
                <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Placeholder for Google Map - in a real implementation, you would embed an actual Google Map here */}
                  <div className="w-full h-full flex items-center justify-center bg-mopps-light/20">
                    <p className="text-mopps-navy font-medium">Google Map would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm animate-fade-in">
              <h2 className="text-2xl font-bold text-mopps-navy mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-3 rounded-md transition-colors duration-300 w-full"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about our cleaning services."
            centered
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-mopps-navy mb-2">What areas do you service?</h3>
              <p className="text-gray-600">We currently service the greater New York City area, including all five boroughs and parts of New Jersey and Connecticut.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-mopps-navy mb-2">Do you provide cleaning supplies and equipment?</h3>
              <p className="text-gray-600">Yes, our team brings all necessary cleaning supplies and equipment. If you have specific products you'd prefer us to use, please let us know in advance.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-mopps-navy mb-2">Are your cleaning products eco-friendly?</h3>
              <p className="text-gray-600">Yes, we prioritize using environmentally friendly cleaning products that are effective yet safe for your family, pets, and the environment.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 animate-fade-in">
              <h3 className="text-lg font-semibold text-mopps-navy mb-2">How do you price your services?</h3>
              <p className="text-gray-600">Our pricing is based on several factors including the size of the space, type of cleaning required, frequency of service, and specific cleaning tasks needed. We provide detailed quotes after an initial assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mopps-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-mopps-light mb-8 max-w-2xl mx-auto">
            Request a free quote today and experience the Mopps difference.
          </p>
          <Button to="/quote" size="lg">Get a Free Quote</Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;