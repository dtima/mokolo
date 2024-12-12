import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Building2, TreePine, MapPin, Hospital, School } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Construction du Marché Central",
      description: "Nouveau marché moderne avec 200 boutiques et infrastructures sanitaires",
      status: "En cours",
      progress: 65,
      budget: "500 millions FCFA",
      duration: "2023-2024",
      icon: <Building2 className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Reboisement Urbain",
      description: "Plantation de 5000 arbres dans la ville",
      status: "En cours",
      progress: 40,
      budget: "50 millions FCFA",
      duration: "2023-2024",
      icon: <TreePine className="h-6 w-6 text-cameroon-green" />
    },
    {
      title: "Réhabilitation des Routes",
      description: "Rénovation de 15km de routes urbaines",
      status: "Planifié",
      progress: 20,
      budget: "300 millions FCFA",
      duration: "2024-2025",
      icon: <MapPin className="h-6 w-6 text-cameroon-yellow" />
    },
    {
      title: "Centre de Santé Moderne",
      description: "Construction d'un centre de santé avec maternité",
      status: "En cours",
      progress: 80,
      budget: "250 millions FCFA",
      duration: "2023-2024",
      icon: <Hospital className="h-6 w-6 text-cameroon-red" />
    },
    {
      title: "École Professionnelle",
      description: "Construction d'un centre de formation professionnelle",
      status: "Planifié",
      progress: 10,
      budget: "400 millions FCFA",
      duration: "2024-2025",
      icon: <School className="h-6 w-6 text-cameroon-green" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="relative py-20 bg-cameroon-green text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projets de Développement</h1>
          <p className="text-xl max-w-2xl">
            Découvrez les projets en cours et à venir pour le développement de Mokolo
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {project.icon}
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === "En cours" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Progression</span>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                        <p className="text-gray-900">{project.budget}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Période</h3>
                        <p className="text-gray-900">{project.duration}</p>
                      </div>
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

export default Projects;
