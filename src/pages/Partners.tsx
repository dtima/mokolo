import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Nos Partenaires</h1>
          <p className="text-gray-600 text-center mb-12">
            Ensemble pour le développement de Mokolo
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-32 object-contain"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{partner.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;