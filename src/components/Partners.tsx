import { useLanguage } from "@/contexts/LanguageContext";

export function Partners() {
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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Nos Partenaires
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-[300px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-32 w-auto object-contain mx-auto"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <h3 className="text-lg font-semibold text-center mt-4">{partner.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}