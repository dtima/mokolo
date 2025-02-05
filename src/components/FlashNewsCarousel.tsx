import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FileText } from "lucide-react";

const flashNewsData = [
  {
    id: 1,
    title: "Budget 2023",
    description: "Le budget de l'exercice 2023 de la commune de Mokolo, examiné et adopté ce 13 décembre 2022 par 57 conseillers municipaux sur les 61 que compte cette municipalité s'élève à la somme de 1 191 730 000 francs Cfa contre 1 476 575 813 francs Cfa pour l'exercice précédent.",
    date: "2022-12-13",
    image: "/lovable-uploads/b2b66311-2015-4048-b48f-ceb3c5d7e4f3.png"
  },
  {
    id: 2,
    title: "Nouveau Marché Moderne",
    description: "Bienvenue au nouveau marché moderne de Mokolo.",
    date: "2024-03-14",
    image: "/lovable-uploads/4989d274-8b19-4de0-ac53-9bc274223cce.png"
  }
];

export function FlashNewsCarousel() {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-cameroon-green" />
            <h2 className="text-2xl md:text-3xl font-bold">Flash Info</h2>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate("/flash-news")}
            className="hover:bg-cameroon-green hover:text-white transition-colors"
          >
            Voir tout
          </Button>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {flashNewsData.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(item.date), "dd MMMM yyyy")}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}