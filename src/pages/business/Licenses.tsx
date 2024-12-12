import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Clock, Info } from "lucide-react";

const Licenses = () => {
  const licenses = [
    {
      title: "Permis de Construire",
      description: "Autorisation nécessaire pour toute nouvelle construction ou rénovation majeure",
      requirements: [
        "Plan architectural",
        "Titre foncier ou bail",
        "Étude d'impact environnemental (si nécessaire)",
        "Pièce d'identité"
      ],
      duration: "30 jours",
      cost: "Variable selon la surface"
    },
    {
      title: "Licence Commerciale",
      description: "Permis d'exploitation d'une activité commerciale dans la commune",
      requirements: [
        "Registre de commerce",
        "Numéro de contribuable",
        "Pièce d'identité",
        "Plan de localisation"
      ],
      duration: "15 jours",
      cost: "50,000 FCFA/an"
    },
    {
      title: "Autorisation d'Occupation Temporaire",
      description: "Pour l'utilisation temporaire de l'espace public",
      requirements: [
        "Demande manuscrite",
        "Plan de situation",
        "Pièce d'identité",
        "Patente (si commerce)"
      ],
      duration: "7 jours",
      cost: "25,000 FCFA/mois"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Licences et Permis</h1>
          <p className="text-xl max-w-2xl">
            Guide complet pour l'obtention des licences et permis dans la commune de Mokolo
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Processus de Demande</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-cameroon-green" />
                    1. Préparer le Dossier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Rassemblez tous les documents requis selon le type de licence
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-cameroon-yellow" />
                    2. Soumettre la Demande
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Déposez votre dossier au guichet unique de la mairie
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-cameroon-red" />
                    3. Suivi du Dossier
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Suivez l'état d'avancement de votre demande
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Types de Licences et Permis</h2>
            {licenses.map((license, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{license.title}</CardTitle>
                  <CardDescription>{license.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Documents Requis:</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {license.requirements.map((req, i) => (
                          <li key={i} className="text-gray-600">{req}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <div className="space-y-1">
                        <p className="text-sm text-gray-500">
                          Délai de traitement: {license.duration}
                        </p>
                        <p className="text-sm text-gray-500">
                          Coût: {license.cost}
                        </p>
                      </div>
                      <Button className="flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Plus d'infos
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

export default Licenses;