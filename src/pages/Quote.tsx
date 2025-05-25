import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { Building, Home, Calendar, Clock, Check } from 'lucide-react';

const Quote: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: '',
    propertyType: '',
    propertySize: '',
    frequency: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    specialInstructions: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: string) => {
    setFormData((prev) => ({ ...prev, serviceType: service }));
  };

  const handlePropertySelect = (property: string) => {
    setFormData((prev) => ({ ...prev, propertyType: property }));
  };

  const handleFrequencySelect = (frequency: string) => {
    setFormData((prev) => ({ ...prev, frequency: frequency }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log(formData);
    // Move to confirmation step
    nextStep();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-mopps-navy pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-mopps-navy to-mopps-blue opacity-90"></div>
          <img
            src="https://images.pexels.com/photos/5591575/pexels-photo-5591575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Get a Quote"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get a Free Quote
            </h1>
            <p className="text-xl text-mopps-light mb-8">
              Complete the form below to receive a customized cleaning quote.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-12">
              <div className="flex justify-between items-center">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-mopps-blue' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 1 ? 'bg-mopps-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <span className="text-sm font-medium">Service Details</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-mopps-blue' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-mopps-blue' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 2 ? 'bg-mopps-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <span className="text-sm font-medium">Personal Information</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-mopps-blue' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-mopps-blue' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 3 ? 'bg-mopps-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    3
                  </div>
                  <span className="text-sm font-medium">Schedule</span>
                </div>
                
                <div className={`flex-1 h-1 mx-2 ${step >= 4 ? 'bg-mopps-blue' : 'bg-gray-200'}`}></div>
                
                <div className={`flex flex-col items-center ${step >= 4 ? 'text-mopps-blue' : 'text-gray-400'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= 4 ? 'bg-mopps-blue text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    4
                  </div>
                  <span className="text-sm font-medium">Confirmation</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              {step === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-mopps-navy mb-6">Service Details</h2>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      What type of cleaning service do you need?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.serviceType === 'hospitality' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleServiceSelect('hospitality')}
                      >
                        <Building size={32} className={formData.serviceType === 'hospitality' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">Hospitality Cleaning</span>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.serviceType === 'commercial' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleServiceSelect('commercial')}
                      >
                        <Building size={32} className={formData.serviceType === 'commercial' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">Commercial Cleaning</span>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.serviceType === 'domestic' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleServiceSelect('domestic')}
                      >
                        <Home size={32} className={formData.serviceType === 'domestic' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">Domestic Cleaning</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Property Type
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.propertyType === 'house' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handlePropertySelect('house')}
                      >
                        <Home size={28} className={formData.propertyType === 'house' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">House</span>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.propertyType === 'apartment' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handlePropertySelect('apartment')}
                      >
                        <Building size={28} className={formData.propertyType === 'apartment' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">Apartment</span>
                      </button>
                      
                      <button
                        type="button"
                        className={`p-4 border-2 rounded-lg flex flex-col items-center text-center transition-colors duration-300 ${
                          formData.propertyType === 'office' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handlePropertySelect('office')}
                      >
                        <Building size={28} className={formData.propertyType === 'office' ? 'text-mopps-blue' : 'text-gray-400'} />
                        <span className="mt-2 font-medium">Office</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="propertySize" className="block text-lg font-medium text-gray-700 mb-3">
                      Property Size
                    </label>
                    <select
                      id="propertySize"
                      name="propertySize"
                      value={formData.propertySize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                    >
                      <option value="">Select Property Size</option>
                      <option value="small">Small (up to 1,000 sq ft)</option>
                      <option value="medium">Medium (1,000 - 2,000 sq ft)</option>
                      <option value="large">Large (2,000 - 3,500 sq ft)</option>
                      <option value="xlarge">Extra Large (3,500+ sq ft)</option>
                    </select>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Cleaning Frequency
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <button
                        type="button"
                        className={`p-3 border-2 rounded-lg text-center transition-colors duration-300 ${
                          formData.frequency === 'one-time' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleFrequencySelect('one-time')}
                      >
                        One-Time
                      </button>
                      
                      <button
                        type="button"
                        className={`p-3 border-2 rounded-lg text-center transition-colors duration-300 ${
                          formData.frequency === 'weekly' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleFrequencySelect('weekly')}
                      >
                        Weekly
                      </button>
                      
                      <button
                        type="button"
                        className={`p-3 border-2 rounded-lg text-center transition-colors duration-300 ${
                          formData.frequency === 'bi-weekly' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleFrequencySelect('bi-weekly')}
                      >
                        Bi-Weekly
                      </button>
                      
                      <button
                        type="button"
                        className={`p-3 border-2 rounded-lg text-center transition-colors duration-300 ${
                          formData.frequency === 'monthly' 
                            ? 'border-mopps-blue bg-mopps-light/20 text-mopps-navy' 
                            : 'border-gray-200 hover:border-mopps-light text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleFrequencySelect('monthly')}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.serviceType || !formData.propertyType || !formData.propertySize || !formData.frequency}
                      className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-3 rounded-md transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-mopps-navy mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address*
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-md transition-colors duration-300"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.address}
                      className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-3 rounded-md transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold text-mopps-navy mb-6">Schedule Your Cleaning</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Date*
                      </label>
                      <div className="flex items-center">
                        <div className="bg-mopps-light/30 rounded-full p-2 mr-2">
                          <Calendar className="text-mopps-blue" size={20} />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time*
                      </label>
                      <div className="flex items-center">
                        <div className="bg-mopps-light/30 rounded-full p-2 mr-2">
                          <Clock className="text-mopps-blue" size={20} />
                        </div>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                          required
                        >
                          <option value="">Select a Time</option>
                          <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions or Requirements
                    </label>
                    <textarea
                      id="specialInstructions"
                      name="specialInstructions"
                      rows={4}
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mopps-blue"
                      placeholder="Any special requirements, access instructions, or areas that need extra attention..."
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-md transition-colors duration-300"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!formData.date || !formData.time}
                      className="bg-mopps-blue hover:bg-mopps-sky text-white px-6 py-3 rounded-md transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Submit Quote Request
                    </button>
                  </div>
                </div>
              )}
              
              {step === 4 && (
                <div className="text-center py-8 animate-fade-in">
                  <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Check className="text-green-600" size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-mopps-navy mb-4">Quote Request Submitted!</h2>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for your request. A member of our team will review your information and contact you within 24 hours with a personalized quote.
                  </p>
                  <Button to="/" variant="primary">Return to Homepage</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {step !== 4 && (
        <section className="py-20 bg-mopps-light/20">
          <div className="container mx-auto px-4 md:px-6">
            <SectionHeading
              title="What Our Clients Say"
              subtitle="Hear from our satisfied customers about their experience with Mopps."
              centered
            />
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 text-center animate-fade-in">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <svg
                      key={index}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                
                <p className="text-xl italic text-gray-600 mb-6">
                  "Mopps exceeded all my expectations! Their attention to detail is impressive, and they were able to accommodate my specific cleaning requirements. I've been using their services for over a year now, and I couldn't be happier."
                </p>
                
                <div className="flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-mopps-navy">Lisa Thompson</h4>
                    <p className="text-sm text-gray-500">Regular Client - 2 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Quote;