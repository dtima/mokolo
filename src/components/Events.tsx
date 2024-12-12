import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function Events() {
  const { t } = useLanguage();

  const events = [
    {
      id: 1,
      title: "Fête de la Jeunesse au Cameroun",
      date: "2025-02-11",
      time: "08:00 - 18:00",
      month: "FÉV",
      day: "11"
    },
    {
      id: 2,
      title: "Journée internationale des droits des femmes 2025",
      date: "2025-03-08",
      time: "09:00 - 17:00",
      month: "MAR",
      day: "08"
    },
    {
      id: 3,
      title: "Fête Nationale de l'Unité",
      date: "2025-05-20",
      time: "08:00 - 23:00",
      month: "MAI",
      day: "20"
    }
  ];

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Événements</h2>
        
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {events.map((event) => (
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
          >
            {t("events.viewAll")}
          </Button>
        </div>
      </div>
    </section>
  );
}