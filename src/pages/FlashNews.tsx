import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";

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

export default function FlashNews() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Flash Info</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {flashNewsData.map((news) => (
          <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-xl mb-2">{news.title}</CardTitle>
              <p className="text-gray-600 mb-2">{news.description}</p>
              <p className="text-sm text-gray-500">
                {format(new Date(news.date), "dd MMMM yyyy")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}