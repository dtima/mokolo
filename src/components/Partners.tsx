import { partners } from "@/data/partners";
import { useLanguage } from "@/contexts/LanguageContext";

export function Partners() {
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