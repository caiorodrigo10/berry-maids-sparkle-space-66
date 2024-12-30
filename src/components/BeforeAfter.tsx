import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const transformations = [
  {
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    title: "Living Room Transformation"
  },
  {
    before: "https://images.unsplash.com/photo-1446844805183-9f5af45f89ee?q=80&w=2070",
    after: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070",
    title: "Kitchen Deep Clean"
  },
  {
    before: "https://images.unsplash.com/photo-1582649471521-47c71cd397f6?q=80&w=2070",
    after: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070",
    title: "Bathroom Makeover"
  }
];

const BeforeAfter = () => {
  return (
    <section className="section-padding bg-[#D3E4FD]">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Before & After Gallery
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {transformations.map((item, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative h-80">
                      <img 
                        src={item.before} 
                        alt={`Before ${item.title}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4 bg-berry-purple text-white px-3 py-1 rounded">
                        Before
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-80">
                      <img 
                        src={item.after} 
                        alt={`After ${item.title}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute top-4 left-4 bg-berry-lime text-black px-3 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl text-center mt-4 font-semibold">{item.title}</h3>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfter;