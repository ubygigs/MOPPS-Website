import React from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionHeading from '../components/SectionHeading';
import { Home as HomeIcon, Building2, UserCheck, Sparkles, Calendar, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-mopps-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mopps-navy to-mopps-blue opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Cleaning background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Cleaning Solutions for Every Space
            </h1>
            <p className="text-xl text-mopps-light mb-8">
              Experience the difference with our premium cleaning services for hospitality, 
              commercial, and domestic spaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/quote" size="lg">Get a Free Quote</Button>
              <Button to="/services" variant="outline" size="lg" className="border-white text-white">Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Cleaning Services"
            subtitle="We provide comprehensive cleaning solutions tailored to your specific needs."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Hospitality Cleaning"
              description="Specialized cleaning for hotels, restaurants, bars, and holiday homes ensuring the highest standards of cleanliness."
              icon={Building2}
              to="/services"
            />
            <ServiceCard
              title="Commercial Cleaning"
              description="Professional cleaning services for offices, retail spaces, and communal areas to maintain a pristine business environment."
              icon={HomeIcon}
              to="/services"
            />
            <ServiceCard
              title="Domestic Cleaning"
              description="Thorough home cleaning services from regular maintenance to deep cleans, end of tenancy, and spring cleaning."
              icon={Sparkles}
              to="/services"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-mopps-navy mb-6">
                Why Choose Mopps?
              </h2>
              <p className="text-gray-600 mb-8">
                With over 10 years of experience in the cleaning industry, we've built a reputation for excellence and reliability. Our team of professional cleaners are trained to deliver the highest standards of service.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-2 mr-4">
                    <UserCheck className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-mopps-navy mb-2">Experienced Team</h3>
                    <p className="text-gray-600">Our staff are fully trained, insured, and background checked for your peace of mind.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-2 mr-4">
                    <Sparkles className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-mopps-navy mb-2">Eco-Friendly Products</h3>
                    <p className="text-gray-600">We use environmentally friendly cleaning products that are safe for your family and the planet.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mopps-light/30 rounded-full p-2 mr-4">
                    <Calendar className="text-mopps-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-mopps-navy mb-2">Flexible Scheduling</h3>
                    <p className="text-gray-600">We work around your schedule to provide services at a time that's convenient for you.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button to="/about">Learn More About Us</Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional cleaner"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <div className="flex items-center mb-2">
                  <Clock className="text-mopps-blue mr-2" size={20} />
                  <h4 className="font-semibold text-mopps-navy">Quick Response</h4>
                </div>
                <p className="text-gray-600">We respond to all inquiries within 2 hours during business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-mopps-light/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our satisfied customers have to say about our services."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="Hotel Manager"
              testimonial="Mopps has transformed our hotel cleaning operations. Their attention to detail and consistency have greatly improved guest satisfaction scores."
              rating={5}
              image="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard
              name="Michael Roberts"
              role="Office Manager"
              testimonial="We've been using Mopps for our office cleaning for over 3 years. Their team is always professional, thorough, and accommodating to our schedule."
              rating={5}
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard
              name="Jennifer Williams"
              role="Homeowner"
              testimonial="I'm amazed at the difference Mopps has made in my home. Their deep cleaning service is worth every penny, and the team is always friendly and respectful."
              rating={4}
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button to="/contact" variant="outline">See More Testimonials</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mopps-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Space?</h2>
          <p className="text-xl text-mopps-light mb-8 max-w-2xl mx-auto">
            Get in touch today for a free, no-obligation quote for any of our cleaning services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/quote" size="lg">Get a Free Quote</Button>
            <Button to="/contact" variant="outline" size="lg">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;