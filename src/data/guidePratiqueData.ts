import { Hotel, Utensils, Camera, Calendar, MapPin } from "lucide-react";

export const categories = [
  {
    id: "hotels",
    title: "Hôtels et Hébergement",
    icon: <Hotel className="h-5 w-5" />,
    items: [
      {
        name: "Hôtel de la Paix",
        description: "Hôtel 3 étoiles avec restaurant et piscine",
        address: "Centre-ville, Mokolo",
        contact: "Tel: +237 xxx xxx xxx"
      },
      {
        name: "Auberge du Mont",
        description: "Hébergement confortable avec vue sur les montagnes",
        address: "Quartier Résidentiel, Mokolo",
        contact: "Tel: +237 xxx xxx xxx"
      }
    ]
  },
  {
    id: "restaurants",
    title: "Restaurants",
    icon: <Utensils className="h-5 w-5" />,
    items: [
      {
        name: "Restaurant Le Terroir",
        description: "Cuisine traditionnelle camerounaise",
        address: "Marché Central, Mokolo",
        contact: "Tel: +237 xxx xxx xxx"
      }
    ]
  },
  {
    id: "attractions",
    title: "Attractions Touristiques",
    icon: <Camera className="h-5 w-5" />,
    items: [
      {
        name: "Monts Mandara",
        description: "Paysages montagneux spectaculaires",
        location: "À 10km de Mokolo"
      }
    ]
  },
  {
    id: "events",
    title: "Événements",
    icon: <Calendar className="h-5 w-5" />,
    items: [
      {
        name: "Festival Culturel de Mokolo",
        description: "Célébration annuelle de la culture locale",
        date: "Juillet 2024"
      }
    ]
  }
];