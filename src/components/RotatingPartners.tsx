import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export function RotatingPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const partners = [
    {
      name: "DTIMA",
      logo: "/lovable-uploads/00de99b1-71e9-44d3-8471-a914b0f39bbf.png",
      description: "Digital Transformation Initiative for Municipalities in Africa"
    },
    {
      name: "African Development Bank",
      logo: "/lovable-uploads/5aa9fe4a-2609-4e4e-b2c4-7250a89dfae2.png",
      description: "African Development Bank Group"
    },
    {
      name: "MINDDEVEL",
      logo: "/lovable-uploads/bc6ffcdb-447a-46c0-b0ef-2318d030f333.png",
      description: "Ministère de la Décentralisation et du Développement Local"
    },
    {
      name: "ONU HABITAT",
      logo: "/lovable-uploads/730f4ba0-adfc-472f-8ed8-70a12eb0ed50.png",
      description: "Pour un Meilleur Avenir Urbain"
    },
    {
      name: "FEICOM",
      logo: "/lovable-uploads/44505ac2-7b4b-438c-9a28-4679e94a7612.png",
      description: "Fonds Spécial d'Équipement et d'Intervention Intercommunale"
    },
    {
      name: "UNDP",
      logo: "/lovable-uploads/2a4074c1-3d83-45a7-984e-4924b250dc6b.png",
      description: "United Nations Development Programme"
    },
    {
      name: "UNICEF",
      logo: "/lovable-uploads/4989d274-8b19-4de0-ac53-9bc274223cce.png",
      description: "United Nations Children's Fund"
    },
    {
      name: "PNDP",
      logo: "/lovable-uploads/7c65c822-eb17-4dbc-b1eb-a2eb38cdb851.png",
      description: "Programme National de Développement Participatif"
    },
    {
      name: "ISA",
      logo: "/lovable-uploads/9ace2697-1e2c-47c4-ae22-02251e7d856e.png",
      description: "International School of Africa"
    },
    {
      name: "Croix Rouge",
      logo: "/lovable-uploads/b2b66311-2015-4048-b48f-ceb3c5d7e4f3.png",
      description: "Croix-Rouge Camerounaise"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 3 >= partners.length ? 0 : prevIndex + 3
      );
    }, 4000); // Changed to 4 seconds as requested

    return () => clearInterval(timer);
  }, [partners.length]);

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