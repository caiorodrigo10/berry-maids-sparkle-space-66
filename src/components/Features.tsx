import React from 'react';
import { Shield, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Insured & Bonded",
    description: "Your peace of mind is our priority with full liability coverage"
  },
  {
    icon: Globe,
    title: "Multilingual Service",
    description: "We speak English, Spanish, and Portuguese"
  },
  {
    icon: Award,
    title: "Professional Team",
    description: "Trained and experienced cleaning specialists"
  }
];

const Features = () => {
  return (
    <section className="section-padding bg-[#FDE1D3]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon className="w-16 h-16 mx-auto mb-4 text-berry-purple" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;