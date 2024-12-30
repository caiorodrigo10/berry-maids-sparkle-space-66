import React from 'react';
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Sarah Johnson",
    role: "Team Lead",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
    specialties: ["Deep Cleaning", "Team Management"],
    experience: "10+ years"
  },
  {
    name: "Michael Chen",
    role: "Senior Cleaner",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070",
    specialties: ["Move-in/Move-out", "Window Cleaning"],
    experience: "5+ years"
  },
  {
    name: "Emma Rodriguez",
    role: "Cleaning Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2061",
    specialties: ["Eco-Friendly Cleaning", "Organization"],
    experience: "7+ years"
  }
];

const Team = () => {
  return (
    <section className="section-padding bg-[#F2FCE2] py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full pb-[125%]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <Badge key={idx} variant="secondary">{specialty}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    Experience: {member.experience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;