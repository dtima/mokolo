import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Hotel, Utensils, Camera, Calendar, Mountain, TreePine, Building2, Landmark } from "lucide-react";
import { CategoriesSection } from "@/components/guide-pratique/CategoriesSection";

const GuidePratique = () => {
  const touristSites = [
    {
      category: "Montagnes et Sites Naturels",
      icon: <Mountain className="h-5 w-5" />,
      sites: [
        {
          name: "Montagne de Ziver",
          description: "Une montagne transformée en une boule de pierre par l'érosion, offrant une vue panoramique sur le village et un lieu de traditions intactes.",
          location: "Située à une dizaine de km de Mokolo",
          classification: "Site d'intérêt local",
          amenagement: "Délimitation et sécurisation nécessaires"
        },
        {
          name: "Mont Houmpla",
          description: "Une montagne qui fait la beauté des paysages naturels Kapsiki",
          location: "Situé dans l'arrondissement de Mogodé",
          classification: "Site d'intérêt local",
          amenagement: "Doit être aménagé et préservé"
        },
        {
          name: "Montagne Semron",
          description: "Montagne mystique d'après les autochtones avec des traditions particulières",
          location: "Située à Gawar dans le village mouftoum",
          classification: "Non aménagé et nécessite une conservation",
          amenagement: "À intégrer dans le circuit touristique"
        }
      ]
    },
    {
      category: "Sites Culturels et Historiques",
      icon: <Landmark className="h-5 w-5" />,
      sites: [
        {
          name: "Musée d'art royal de Mokolo",
          description: "Siège de la culture des autochtones, grenier de la tradition locale qui regorge les traces de la civilisation des peuples montagnards.",
          location: "Il se trouve à la chefferie de Mokolo",
          classification: "Site d'intérêt national",
          amenagement: "Lieu aménagé et plein de symboles"
        },
        {
          name: "Site culturel de Gudur",
          description: "Important site culturel qui révèle les us et coutumes de la population autochtones",
          location: "Situé dans la plaine à quelques Km de Mokolo",
          classification: "Site d'intérêt Régional",
          amenagement: "Nécessite un aménagement et une reconstitution"
        }
      ]
    },
    {
      category: "Points d'eau et Barrages",
      icon: <Building2 className="h-5 w-5" />,
      sites: [
        {
          name: "Barrage de Woudahai",
          description: "Une réalisation du premier Président qui ravitaille les populations de la zone des monts Mandara. Une curiosité touristique où l'eau est rare et vitale.",
          location: "Situé à 7km de la ville de Mokolo",
          classification: "Site d'intérêt régional",
          amenagement: "Aménagé et accessible en toute saison"
        },
        {
          name: "Mare aux crocodiles de zingos",
          description: "Un lac aux crocodiles dont l'histoire est rattachée à la civilisation locale",
          location: "Situé dans le canton de Mokong",
          classification: "Site d'intérêt local",
          amenagement: "Doit être classé, aménagé et sécurisé"
        }
      ]
    },
    {
      category: "Paysages Remarquables",
      icon: <TreePine className="h-5 w-5" />,
      sites: [
        {
          name: "Paysage lunaire des kapsiki",
          description: "Qualifié par l'explorateur André GIDE d'un des plus beaux paysages du monde avec ses pics en forme de champignons sur un plateau.",
          location: "Situé à 20km au sud de Mokolo",
          classification: "Site d'intérêt régional",
          amenagement: "Site touristique à préserver absolument"
        },
        {
          name: "L'héliport",
          description: "Une plateforme qui regorge pleine d'histoire et des souvenirs, offrant une magnifique vue sur la ville de Mokolo.",
          location: "Se situe à Mofolé, arrondissement de Mokolo",
          classification: "Site d'intérêt national",
          amenagement: "Nécessite des aménagements et une conservation"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Guide Pratique</h1>
        <p className="text-gray-600 mb-8">
          Découvrez les services touristiques et les attractions de Mokolo
        </p>

        <CategoriesSection />

        {/* Tourist Sites Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Sites Touristiques</h2>
          <div className="grid gap-6">
            {touristSites.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <CardTitle>{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {category.sites.map((site, siteIndex) => (
                      <div key={siteIndex} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{site.name}</h3>
                          <Badge variant="outline">{site.classification}</Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{site.description}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="h-4 w-4" />
                          <span>{site.location}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-500 italic">
                          État: {site.amenagement}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GuidePratique;
