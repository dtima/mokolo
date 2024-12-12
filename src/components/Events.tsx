import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export function Events() {
  const { t } = useLanguage();

  const allEvents = [
    {
      id: 1,
      title: "Fête du travail",
      date: "2025-05-01",
      time: "08:00 - 18:00",
      month: "MAI",
      day: "01"
    },
    {
      id: 2,
      title: "Journée de l'enfant africain",
      date: "2025-06-16",
      time: "09:00 - 17:00",
      month: "JUN",
      day: "16"
    },
    {
      id: 3,
      title: "Journée internationales de la femme rural",
      date: "2025-07-31",
      time: "08:00 - 17:00",
      month: "JUL",
      day: "31"
    },
    {
      id: 4,
      title: "Journée internationale de la décentralisation",
      date: "2025-08-10",
      time: "09:00 - 16:00",
      month: "AOÛ",
      day: "10"
    },
    {
      id: 5,
      title: "Journée de l'enseignant",
      date: "2025-10-05",
      time: "08:00 - 16:00",
      month: "OCT",
      day: "05"
    },
    {
      id: 6,
      title: "Organisation des foires et expositions",
      date: "2025-11-15",
      time: "08:00 - 20:00",
      month: "NOV",
      day: "15"
    },
    {
      id: 7,
      title: "La fête des handicapés",
      date: "2025-12-03",
      time: "09:00 - 17:00",
      month: "DÉC",
      day: "03"
    },
    {
      id: 8,
      title: "La fête des lépreux",
      date: "2025-01-01",
      time: "10:00 - 16:00",
      month: "JAN",
      day: "01"
    },
    {
      id: 9,
      title: "Journée des personnes âgées",
      date: "2025-10-01",
      time: "09:00 - 17:00",
      month: "OCT",
      day: "01"
    }
  ];

  // Sort events by date and get the 5 nearest ones
  const sortedEvents = [...allEvents].sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  ).slice(0, 5);

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Événements</h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {sortedEvents.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow p-3 md:p-4 flex items-start gap-4 md:gap-6">
              <div className="bg-[#0EA5E9] text-white p-2 md:p-4 rounded text-center min-w-[70px] md:min-w-[90px]">
                <div className="text-base md:text-lg font-semibold">{event.month}</div>
                <div className="text-2xl md:text-4xl font-bold">{event.day}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-semibold mb-1 md:mb-2">{event.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{event.time}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end">
          <Button 
            variant="default" 
            className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-6 md:px-8 text-sm md:text-base"
            asChild
          >
            <Link to="/events">
              {t("events.viewAll")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}