import { useLanguage } from "@/contexts/LanguageContext";

export function Partners() {
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
                loading="lazy"
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