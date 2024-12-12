import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const events = [
  {
    id: 1,
    title: "Fête du travail",
    date: "2025-05-01",
    time: "08:00 - 18:00",
    description: "Célébration de la fête du travail"
  },
  {
    id: 2,
    title: "Journée de l'enfant africain",
    date: "2025-06-16",
    time: "09:00 - 17:00",
    description: "Journée dédiée aux enfants africains"
  },
  {
    id: 3,
    title: "Journée internationales de la femme rural",
    date: "2025-07-31",
    time: "08:00 - 17:00",
    description: "Célébration des femmes rurales"
  },
  {
    id: 4,
    title: "Journée internationale de la décentralisation",
    date: "2025-08-10",
    time: "09:00 - 16:00",
    description: "Journée de la décentralisation"
  },
  {
    id: 5,
    title: "Journée de l'enseignant",
    date: "2025-10-05",
    time: "08:00 - 16:00",
    description: "Célébration des enseignants"
  },
  {
    id: 6,
    title: "Organisation des foires et expositions",
    date: "2025-11-15",
    time: "08:00 - 20:00",
    description: "Foires et expositions locales"
  },
  {
    id: 7,
    title: "La fête des handicapés",
    date: "2025-12-03",
    time: "09:00 - 17:00",
    description: "Journée internationale des personnes handicapées"
  },
  {
    id: 8,
    title: "La fête des lépreux",
    date: "2025-01-01",
    time: "10:00 - 16:00",
    description: "Journée mondiale de lutte contre la lèpre"
  },
  {
    id: 9,
    title: "Journée des personnes âgées",
    date: "2025-10-01",
    time: "09:00 - 17:00",
    description: "Journée internationale des personnes âgées"
  }
];

export default function AllEvents() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tous les Événements
        </h1>
        
        <div className="grid gap-6 max-w-4xl mx-auto">
          {events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((event) => (
            <Card key={event.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="md:w-1/4">
                  <div className="text-lg font-semibold">
                    {format(new Date(event.date), "d MMMM yyyy", { locale: fr })}
                  </div>
                  <div className="text-gray-600">{event.time}</div>
                </div>
                <div className="md:w-3/4">
                  <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}