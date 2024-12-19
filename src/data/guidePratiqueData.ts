import { LucideIcon } from "lucide-react";

export type CategoryItem = {
  name: string;
  description?: string;
  address?: string;
  contact?: string;
  date?: string;
  location?: string;
};

export type Category = {
  id: string;
  title: string;
  iconName: "hotel" | "utensils" | "camera" | "calendar";
  items: CategoryItem[];
};

export const categories: Category[] = [
  {
    id: "hotels",
    title: "Hôtels et Hébergement",
    iconName: "hotel",
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
    iconName: "utensils",
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
    iconName: "camera",
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
    iconName: "calendar",
    items: [
      {
        name: "Festival Culturel de Mokolo",
        description: "Célébration annuelle de la culture locale",
        date: "Juillet 2024"
      }
    ]
  }
];