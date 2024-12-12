import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Receipt, CreditCard, CalendarDays, AlertCircle } from "lucide-react";

const Taxes = () => {
  const taxes = [
    {
      title: "Taxe Foncière",
      description: "Taxe annuelle sur les propriétés bâties et non bâties",
      rate: "0.1% de la valeur locative",
      deadline: "31 mars",
      paymentMethods: ["Espèces", "Virement bancaire", "Mobile Money"]
    },
    {
      title: "Patente",
      description: "Taxe professionnelle pour les activités commerciales",
      rate: "Variable selon le chiffre d'affaires",
      deadline: "31 janvier",
      paymentMethods: ["Espèces", "Virement bancaire"]
    },
    {
      title: "Taxe de Stationnement",
      description: "Pour les véhicules commerciaux",
      rate: "1,000 FCFA/jour",
      deadline: "Paiement journalier",
      paymentMethods: ["Espèces", "Mobile Money"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Taxes Municipales</h1>
          <p className="text-xl max-w-2xl">
            Informations sur les taxes municipales et modalités de paiement
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Modes de Paiement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Receipt className="h-5 w-5 text-cameroon-green" />
                    En Espèces
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Directement à la trésorerie municipale
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-cameroon-yellow" />
                    Virement Bancaire
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Sur le compte de la commune
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-cameroon-red" />
                    Mobile Money
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Via les opérateurs mobiles agréés
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Types de Taxes</h2>
            {taxes.map((tax, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{tax.title}</CardTitle>
                  <CardDescription>{tax.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold mb-2">Taux:</h3>
                        <p className="text-gray-600">{tax.rate}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Date Limite:</h3>
                        <p className="text-gray-600">{tax.deadline}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Modes de Paiement Acceptés:</h3>
                      <ul className="list-disc pl-5">
                        {tax.paymentMethods.map((method, i) => (
                          <li key={i} className="text-gray-600">{method}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-end pt-4">
                      <Button className="flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Détails
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

export default Taxes;