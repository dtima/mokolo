import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    {
      name: "MINDDEVEL",
      logo: "/lovable-uploads/f3b127c3-cca2-41ea-9b08-d7ef94959cd6.png",
      description: "Ministère de la Décentralisation et du Développement Local"
    },
    {
      name: "DTIMA",
      logo: "/lovable-uploads/112814cb-ebde-4342-93a2-496eed8f3687.png",
      description: "Digital Transformation in Municipal Administration"
    },
    {
      name: "GIZ",
      logo: "/lovable-uploads/2c04e6a5-93f2-4e3e-9bc7-1ae0f99a39a1.png",
      description: "Deutsche Gesellschaft für Internationale Zusammenarbeit"
    },
    {
      name: "CVUC UCCC",
      logo: "/lovable-uploads/62c3165c-61ff-4078-95ac-559c347aa410.png",
      description: "Communes et Villes Unies du Cameroun"
    },
    {
      name: "FEICOM",
      logo: "/lovable-uploads/42569476-cc79-433e-bd6b-e7cb2feda4f8.png",
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