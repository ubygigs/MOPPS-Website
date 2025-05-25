import React from 'react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import { Award, Clock, ThumbsUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Emma Reynolds',
      position: 'Founder & CEO',
      bio: 'With over 15 years in the cleaning industry, Emma founded Mopps with a vision to redefine cleaning standards.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Chen',
      position: 'Operations Manager',
      bio: 'David ensures all cleaning operations run smoothly and efficiently, maintaining our high standards across all services.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sophia Martinez',
      position: 'Client Relations',
      bio: 'Sophia is dedicated to ensuring client satisfaction and building lasting relationships with our customers.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'James Wilson',
      position: 'Head of Training',
      bio: 'James develops our comprehensive training programs to ensure every team member delivers exceptional service.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-mopps-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mopps-navy to-mopps-blue opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/4239036/pexels-photo-4239036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About Mopps"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Mopps
            </h1>
            <p className="text-xl text-mopps-light mb-8">
              Get to know the team behind your exceptional cleaning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Story" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-mopps-navy mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Mopps began with a simple mission: to provide cleaning services that truly make a difference in people's lives and businesses. What started as a small operation with just two employees has grown into a trusted cleaning service provider with a team of over 50 dedicated professionals.
              </p>
              <p className="text-gray-600 mb-6">
                Our founder, Emma Reynolds, noticed a gap in the market for cleaning services that combined professionalism, thoroughness, and a genuine care for clients' spaces. With her experience in hospitality management, she set out to create a company that would redefine industry standards.
              </p>
              <p className="text-gray-600 mb-8">
                Today, Mopps serves hundreds of clients across hospitality, commercial, and domestic sectors, maintaining the same commitment to excellence that has been our foundation since day one.
              </p>
              <Button to="/services">Explore Our Services</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Values"
            subtitle="These core principles guide everything we do at Mopps."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="text-mopps-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Excellence</h3>
              <p className="text-gray-600">We're committed to delivering the highest standard of cleaning on every job, no matter the size.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-mopps-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Reliability</h3>
              <p className="text-gray-600">Our clients count on us to be punctual, consistent, and thorough every single time.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="text-mopps-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Integrity</h3>
              <p className="text-gray-600">We operate with honesty and transparency in all our client and team interactions.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="bg-mopps-light/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-mopps-blue" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mopps-navy">Care</h3>
              <p className="text-gray-600">We treat every space as if it were our own, with respect and attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The dedicated professionals behind Mopps' success."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-mopps-light">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-mopps-navy mb-1">{member.name}</h3>
                <p className="text-mopps-blue mb-2">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-mopps-light/20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Client Testimonials"
            subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Robert Thompson"
              role="Restaurant Owner"
              testimonial="Mopps has been cleaning our restaurant for over 5 years. Their attention to detail is exceptional, and they understand the unique needs of a food service establishment. Highly recommended!"
              rating={5}
              image="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <TestimonialCard
              name="Amanda Foster"
              role="Property Manager"
              testimonial="Managing multiple properties requires reliable partners. Mopps has consistently delivered excellent service across all our locations. Their team is professional, and they make my job so much easier."
              rating={5}
              image="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-mopps-navy text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
          <p className="text-xl text-mopps-light mb-8 max-w-2xl mx-auto">
            Experience the Mopps difference for yourself. Contact us today to discuss your cleaning needs.
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

export default About;