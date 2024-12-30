import React from 'react';
import { Home, Building, Box, Sparkles, Calendar } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Regular Cleaning",
    description: "Maintain your home's cleanliness with our thorough regular cleaning service"
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Comprehensive cleaning for those areas that need extra attention"
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional cleaning solutions for your workplace"
  },
  {
    icon: Box,
    title: "Move In/Out",
    description: "Ensure your new space is perfectly clean before you move"
  },
  {
    icon: Calendar,
    title: "First Time Cleaning",
    description: "Detailed initial cleaning to set the standard for future services"
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-[#f9f9f9]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-gray-100 bg-white hover:border-berry-purple 
                         transition-all duration-300 hover:shadow-lg group"
            >
              <service.icon 
                className="w-12 h-12 text-berry-purple mb-4 group-hover:text-berry-lime 
                          transition-colors duration-300" 
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;