import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Wrench, Heart, Building, TreePine, Wheat, Sun, ArrowRight, Users, Landmark, ShoppingBag } from "lucide-react";
import { investmentData } from "@/data/investmentData";

const InvestmentOpportunities = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Opportunités d'Investissement à Mokolo</h1>
          <p className="text-xl max-w-2xl">
            Découvrez les secteurs porteurs et les opportunités d'investissement dans notre ville dynamique
          </p>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Aperçu du Marché</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-cameroon-green" />
                  Population
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-cameroon-green">150,000+</p>
                <p className="text-gray-600">Habitants dans la région</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-cameroon-yellow" />
                  Croissance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-cameroon-yellow">5.2%</p>
                <p className="text-gray-600">Taux de croissance annuel</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-cameroon-red" />
                  Commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-cameroon-red">2000+</p>
                <p className="text-gray-600">Entreprises actives</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sectors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {investmentData.map((sector, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="p-4 bg-gray-50 rounded-full inline-block mb-4">
                    {sector.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{sector.title}</h2>
                  <p className="text-gray-600 mb-4">{sector.description}</p>
                  <Button className="flex items-center gap-2">
                    Contactez-nous <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <div className="md:w-2/3 bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Opportunités</h3>
                  <ul className="space-y-4">
                    {sector.opportunities.map((opportunity, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 bg-cameroon-green rounded-full" />
                        {opportunity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestmentOpportunities;