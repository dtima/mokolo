import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { GraduationCap, Heart, Music, Building2, Dumbbell, Building, ShieldCheck } from "lucide-react";

const PointsOfInterest = () => {
  const categories = [
    {
      id: "education",
      title: "Éducation",
      icon: <GraduationCap className="h-5 w-5" />,
      items: [
        {
          name: "Lycée de Mokolo",
          address: "Quartier Administratif, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "École Publique de Mokolo",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "health",
      title: "Services de Santé",
      icon: <Heart className="h-5 w-5" />,
      items: [
        {
          name: "Hôpital de District de Mokolo",
          address: "Route Principale, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "Centre de Santé Intégré de Mokolo",
          address: "Quartier Résidentiel, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "social",
      title: "Affaires Sociales",
      icon: <Building2 className="h-5 w-5" />,
      items: [
        {
          name: "Centre Social de Mokolo",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "security",
      title: "Sécurité",
      icon: <ShieldCheck className="h-5 w-5" />,
      items: [
        {
          name: "Commissariat de Police de Mokolo",
          address: "Quartier Administratif, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "Brigade de Gendarmerie de Mokolo",
          address: "Route Principale, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "culture",
      title: "Culture et Arts",
      icon: <Music className="h-5 w-5" />,
      items: [
        {
          name: "Centre Culturel de Mokolo",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "sports",
      title: "Sports et Loisirs",
      icon: <Dumbbell className="h-5 w-5" />,
      items: [
        {
          name: "Stade Municipal de Mokolo",
          address: "Zone Sportive, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "markets",
      title: "Marchés",
      icon: <Building className="h-5 w-5" />,
      items: [
        {
          name: "Marché Central de Mokolo",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "Marché Hebdomadaire de Mokolo",
          address: "Zone Commerciale, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Centres d'Intérêt</h1>
        <p className="text-gray-600 mb-8">
          Découvrez les principaux points d'intérêt et services de Mokolo
        </p>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {categories.map((category) => (
            <AccordionItem
              key={category.id}
              value={category.id}
              className="border rounded-lg bg-white shadow-sm"
            >
              <AccordionTrigger className="px-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  {category.icon}
                  <span className="font-semibold">{category.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-gray-50 space-y-2"
                    >
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.address}</p>
                      <p className="text-sm text-gray-600">{item.contact}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </div>
  );
};

export default PointsOfInterest;