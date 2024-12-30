import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "we've got this",
    description: "Every year, customers like you trust us to deliver over 2 million services."
  },
  {
    title: "worry-free guarantee",
    description: "Our Worry-Free Guarantee ensures you'll always be satisfied with your service."
  },
  {
    title: "personalized cleaning",
    description: "Flexible and personalized cleaning options let you make the most of life's moments."
  },
  {
    title: "time-tested",
    description: "We have 40 years of experience providing premium residential cleaning services."
  },
  {
    title: "award-worthy cleaning",
    description: "Our specialist-trained team members use advanced cleaning processes to ensure consistent cleaning every time."
  }
];

const LiveMore = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bauhaus text-berry-purple mb-4">
            Live More, Clean Less
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074" 
              alt="Clean and organized modern living room" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="mt-1">
                  <Check className="text-berry-purple w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-berry-purple font-bauhaus text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMore;