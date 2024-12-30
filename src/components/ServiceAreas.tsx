import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: "Downtown San Francisco",
    description: "Full coverage of SF's bustling downtown area",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=2070"
  },
  {
    region: "Silicon Valley",
    description: "Serving the entire Bay Area tech corridor",
    image: "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?q=80&w=2070"
  },
  {
    region: "East Bay",
    description: "Berkeley, Oakland, and surrounding areas",
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=2070"
  }
];

const ServiceAreas = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Service Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img 
                src={area.image} 
                alt={area.region}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{area.region}</h3>
                </div>
                <p className="text-white text-sm">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;