import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { partners } from "@/data/partners";

export function RotatingPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= partners.length ? 0 : prevIndex + 3
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const visiblePartners = partners.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nos Partenaires
        </h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            <CarouselItem className="flex justify-center gap-8">
              {visiblePartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-[250px]"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-auto object-contain mx-auto"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <h3 className="text-lg font-semibold text-center mt-4">{partner.name}</h3>
                </div>
              ))}
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}