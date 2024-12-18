import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Award, GraduationCap, Heart, Landmark, Star, UserRound } from "lucide-react";

const Biography = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col items-center mb-12">
            <img
              src="/lovable-uploads/537b547b-0444-4b96-9820-fc8585714567.png"
              alt="Dr VOHOD DEGUIME"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-6 shadow-lg"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Dr VOHOD DEGUIME</h1>
            <p className="text-xl text-gray-600 text-center">Maire de la Commune de Mokolo</p>
            <p className="text-lg text-gray-600 text-center">Président de la Section RDPC du Mayo-Tsanaga I</p>
          </div>

          {/* Biography Sections */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <UserRound className="h-6 w-6 text-cameroon-green" />
                <h2 className="text-2xl font-bold">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Dr VOHOD Déguimé est une figure incontournable de la santé publique et de la politique locale. 
                Né en 1965 à Mendeze-Mokolo, dans le département du Mayo-Tsanaga, il a su allier avec brio une 
                carrière médicale exemplaire et un engagement profond pour le développement de sa communauté.
              </p>
            </section>

            {/* Academic and Professional Background */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-cameroon-red" />
                <h2 className="text-2xl font-bold">Parcours académique et professionnel</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Diplômé de l'Université de Yaoundé et titulaire d'un Doctorat en Médecine, Dr VOHOD Déguimé 
                  a consacré sa carrière à l'amélioration de la santé publique au Cameroun. Après avoir obtenu 
                  son diplôme de médecine en 1992, il a occupé diverses fonctions dans le système de santé camerounais.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Spécialiste des maladies infectieuses, il a dirigé avec succès des programmes de lutte contre 
                  la tuberculose, le VIH/SIDA, et le paludisme. Sa formation continue inclut un Diplôme Universitaire 
                  en Santé Publique de l'Université de Paris VII.
                </p>
              </div>
            </section>

            {/* Political Engagement */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="h-6 w-6 text-cameroon-yellow" />
                <h2 className="text-2xl font-bold">Engagement politique et leadership</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  L'engagement de Dr VOHOD Déguimé en politique remonte à 1991, année où il adhère au RDPC. 
                  Depuis lors, il n'a cessé d'être un acteur clé du parti, occupant plusieurs postes de 
                  responsabilité au sein de la Section RDPC du Mayo-Tsanaga.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Élu Maire de la Commune de Mokolo en mars 2020, il a su allier gestion municipale et 
                  développement local, en veillant à la modernisation des infrastructures de la commune tout 
                  en mettant l'accent sur les problématiques de santé publique.
                </p>
              </div>
            </section>

            {/* Distinctions */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-6 w-6 text-cameroon-green" />
                <h2 className="text-2xl font-bold">Distinctions et contributions</h2>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Dr VOHOD Déguimé a reçu plusieurs distinctions honorifiques, notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Chevalier de l'Ordre du Mérite Camerounais (2012)</li>
                  <li>Officier de l'Ordre du Mérite Camerounais (2016)</li>
                </ul>
              </div>
            </section>

            {/* Personal Life */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-cameroon-red" />
                <h2 className="text-2xl font-bold">Engagement social et personnel</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Originaire d'une famille modeste de cultivateurs, Dr VOHOD Déguimé a été soutenu par des 
                missionnaires catholiques dans son parcours scolaire et universitaire. Père de cinq enfants, 
                il incarne les valeurs de la famille et de l'éducation. Son parcours chrétien est marqué par 
                un baptême spécial en 1980 par le Pape Jean-Paul II à Rome.
              </p>
            </section>

            {/* Vision */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-6 w-6 text-cameroon-yellow" />
                <h2 className="text-2xl font-bold">Vision pour le futur</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Fort de son expérience en gestion de la santé publique, en leadership politique et en 
                développement communautaire, Dr VOHOD Déguimé continue de se battre pour l'amélioration 
                des conditions de vie de ses concitoyens. Son action est portée par une vision de progrès 
                durable, fondée sur la solidarité, la responsabilité et l'optimisme pour l'avenir de 
                Mokolo et du Mayo-Tsanaga.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Biography;