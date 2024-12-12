import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      name: "UNDP",
      logo: "/lovable-uploads/fcae6ef1-ad37-4ce1-980a-ad7ef7f6d08d.png",
      description: "United Nations Development Programme"
    },
    {
      name: "UNICEF",
      logo: "/lovable-uploads/88702684-3b0a-4ff0-8ed4-5f2142e0663d.png",
      description: "United Nations Children's Fund"
    },
    {
      name: "PNDP",
      logo: "/lovable-uploads/c507beb1-1e47-4c17-a7dc-afd231677186.png",
      description: "Programme National de Développement Participatif"
    },
    {
      name: "ISA",
      logo: "/lovable-uploads/60c309db-bf47-4b66-b36f-df3cab0d0754.png",
      description: "Impact Santé Afrique"
    },
    {
      name: "Croix Rouge",
      logo: "/lovable-uploads/29bce7bd-0c32-4c4b-89f2-a4653ff9ab2d.png",
      description: "Croix Rouge Camerounaise"
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
                      loading="lazy"
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