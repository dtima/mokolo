import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const Tourism = () => {
  const { t } = useLanguage();

  const attractions = [
    {
      title: "Les Monts Mandara",
      description: "Découvrez les paysages spectaculaires des Monts Mandara, avec leurs formations rocheuses uniques et leurs panoramas à couper le souffle. Idéal pour la randonnée et la photographie, ces montagnes offrent une expérience inoubliable aux amateurs de nature.",
      image: "/lovable-uploads/9ace2697-1e2c-47c4-ae22-02251e7d856e.png",
      activities: ["Randonnée", "Photographie", "Observation de la faune"],
      location: "Région de l'Extrême-Nord, Mokolo"
    },
    {
      title: "Parc National de Mokolo",
      description: "Explorez la diversité naturelle de notre région, où la faune sauvage côtoie une flore unique. Les cactus et la végétation adaptée au climat créent un paysage fascinant, particulièrement spectaculaire au lever et au coucher du soleil.",
      image: "/lovable-uploads/cbf7e90a-ed86-4ee8-ad6d-d78cb106030e.png",
      activities: ["Safari photo", "Observation des oiseaux", "Circuits guidés"],
      location: "Périphérie de Mokolo"
    },
    {
      title: "Village Traditionnel Kapsiki",
      description: "Immergez-vous dans la culture authentique des Kapsiki en visitant leurs villages traditionnels. Admirez l'architecture unique des cases en paille tressée, témoignage vivant d'un savoir-faire ancestral transmis de génération en génération.",
      image: "/lovable-uploads/a4680655-da15-492f-8dad-e73208757eb7.png",
      activities: ["Visites culturelles", "Artisanat local", "Hébergement traditionnel"],
      location: "Villages Kapsiki, région de Mokolo"
    }
  ];

  const culturalExperiences = [
    {
      title: "Artisanat Traditionnel",
      description: "Découvrez les techniques ancestrales de transformation des céréales et l'artisanat local. Les artisans perpétuent des traditions séculaires, créant des objets uniques qui racontent l'histoire de notre région.",
      image: "/lovable-uploads/7a4202bb-3a37-401a-bd9f-a6931c6f2e68.png",
      contact: {
        phone: "+237 123 456 789",
        email: "artisanat@mokolo.cm"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('/lovable-uploads/9ace2697-1e2c-47c4-ae22-02251e7d856e.png')` }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Découvrez Mokolo</h1>
            <p className="text-xl md:text-2xl max-w-2xl">Une destination unique où nature spectaculaire et traditions ancestrales se rencontrent</p>
          </div>
        </section>

        {/* Natural Attractions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Sites Naturels et Culturels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardHeader>
                    <CardTitle>{attraction.title}</CardTitle>
                    <CardDescription>
                      <MapPin className="inline-block w-4 h-4 mr-2" />
                      {attraction.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {attraction.activities.map((activity, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-cameroon-green/10 text-cameroon-green rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Experiences */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Expériences Culturelles</h2>
            {culturalExperiences.map((experience, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">{experience.title}</h3>
                  <p className="text-gray-600 mb-6">{experience.description}</p>
                  <div className="space-y-2">
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      {experience.contact.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 mr-2" />
                      {experience.contact.email}
                    </p>
                  </div>
                  <Button className="mt-6">Réserver une expérience</Button>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cameroon-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Planifiez Votre Visite</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Laissez-nous vous aider à organiser votre séjour à Mokolo pour une expérience inoubliable
            </p>
            <Button variant="outline" className="bg-white hover:bg-gray-100">
              <Calendar className="w-5 h-5 mr-2" />
              Contactez l'Office de Tourisme
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tourism;