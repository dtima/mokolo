import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, ExternalLink } from "lucide-react";

const Tenders = () => {
  const tenders = [
    {
      id: "AO-2024-001",
      title: "Construction d'un marché moderne",
      deadline: "2024-05-15",
      category: "Infrastructure",
      description: "Appel d'offres pour la construction d'un marché moderne dans le centre-ville de Mokolo.",
    },
    {
      id: "AO-2024-002",
      title: "Fourniture d'équipements solaires",
      deadline: "2024-05-20",
      category: "Énergie",
      description: "Fourniture et installation de panneaux solaires pour l'électrification de zones rurales.",
    },
    {
      id: "AO-2024-003",
      title: "Rénovation centre de santé",
      deadline: "2024-06-01",
      category: "Santé",
      description: "Travaux de rénovation et d'extension du centre de santé municipal.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Appels d'Offres</h1>
          <p className="text-xl max-w-2xl">
            Consultez les appels d'offres en cours et participez au développement de Mokolo
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Comment participer ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">1. Consultez les offres</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Parcourez la liste des appels d'offres en cours et leurs détails
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">2. Préparez votre dossier</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Rassemblez tous les documents requis selon le cahier des charges
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">3. Soumettez votre offre</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Déposez votre dossier complet avant la date limite indiquée
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Appels d'Offres en Cours</h2>
            {tenders.map((tender) => (
              <Card key={tender.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{tender.title}</CardTitle>
                      <CardDescription>Référence: {tender.id}</CardDescription>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cameroon-green/10 text-cameroon-green rounded-full text-sm">
                      {tender.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tender.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-500">
                        Date limite : {new Date(tender.deadline).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        Détails
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Dossier
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tenders;