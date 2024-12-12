import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Hotel, Utensils, Camera, Calendar } from "lucide-react";

const GuidePratique = () => {
  const categories = [
    {
      id: "tourism",
      title: "Tourisme",
      icon: <MapPin className="h-5 w-5" />,
      items: [
        {
          name: "Office de Tourisme de Mokolo",
          description: "Centre d'information touristique officiel",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "Agence de Voyage Mandara",
          description: "Organisation de circuits touristiques",
          address: "Quartier Commercial, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "hotels",
      title: "Hôtels et Hébergement",
      icon: <Hotel className="h-5 w-5" />,
      items: [
        {
          name: "Hôtel Mont Mandara",
          description: "Hôtel 3 étoiles avec restaurant",
          address: "Route Principale, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "Auberge du Voyageur",
          description: "Hébergement confortable et abordable",
          address: "Quartier Résidentiel, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "restaurants",
      title: "Restaurants",
      icon: <Utensils className="h-5 w-5" />,
      items: [
        {
          name: "Restaurant Le Kapsiki",
          description: "Cuisine traditionnelle camerounaise",
          address: "Centre-ville, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
        {
          name: "La Terrasse de Mokolo",
          description: "Restaurant avec vue panoramique",
          address: "Quartier Commercial, Mokolo",
          contact: "+237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "attractions",
      title: "Sites Touristiques",
      icon: <Camera className="h-5 w-5" />,
      items: [
        {
          name: "Monts Mandara",
          description: "Paysages montagneux spectaculaires",
          address: "Région de Mokolo",
          contact: "Guide local: +237 6XX XXX XXX",
        },
        {
          name: "Village Traditionnel Kapsiki",
          description: "Découverte de la culture locale",
          address: "15km de Mokolo",
          contact: "Chef du village: +237 6XX XXX XXX",
        },
      ],
    },
    {
      id: "events",
      title: "Événements",
      icon: <Calendar className="h-5 w-5" />,
      items: [
        {
          name: "Fête de la Jeunesse au Cameroun",
          description: "Célébration nationale",
          date: "Mardi 11 février 2025",
          location: "Place des Fêtes, Mokolo",
        },
        {
          name: "Journée internationale des droits des femmes",
          description: "Célébration internationale",
          date: "Samedi 8 mars 2025",
          location: "Centre culturel de Mokolo",
        },
        {
          name: "Fête Nationale de l'Unité",
          description: "Célébration nationale",
          date: "20 mai 2025",
          location: "Place des Fêtes, Mokolo",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Guide Pratique</h1>
        <p className="text-gray-600 mb-8">
          Découvrez les services touristiques et les attractions de Mokolo
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
                      {item.description && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                      {item.address && (
                        <p className="text-sm text-gray-600">
                          <MapPin className="inline-block w-4 h-4 mr-1" />
                          {item.address}
                        </p>
                      )}
                      {item.contact && (
                        <p className="text-sm text-gray-600">{item.contact}</p>
                      )}
                      {item.date && (
                        <p className="text-sm text-gray-600">
                          <Calendar className="inline-block w-4 h-4 mr-1" />
                          {item.date}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-sm text-gray-600">
                          <MapPin className="inline-block w-4 h-4 mr-1" />
                          {item.location}
                        </p>
                      )}
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

export default GuidePratique;