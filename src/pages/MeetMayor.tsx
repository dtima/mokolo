import { useLanguage } from "@/contexts/LanguageContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function MeetMayor() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-8">
            <img
              src="/lovable-uploads/537b547b-0444-4b96-9820-fc8585714567.png"
              alt="Dr VOHOD DEGUIME"
              className="w-64 h-64 object-cover rounded-full mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">Dr VOHOD DEGUIME</h1>
            <p className="text-xl text-gray-600 mb-8">Maire de la Commune de Mokolo</p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">Message du Maire</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Chers concitoyens, chers visiteurs,
              </p>
              <p>
                C'est avec un immense plaisir que je vous souhaite la bienvenue sur le site officiel de la Commune de Mokolo. Notre ville, nichée au cœur des Monts Mandara dans l'Extrême-Nord du Cameroun, est un joyau qui allie tradition et modernité.
              </p>
              <p>
                Mokolo est une terre d'opportunités où l'agriculture, l'élevage, l'artisanat et le tourisme se conjuguent harmonieusement. Notre engagement pour le développement durable et le bien-être de nos populations se manifeste à travers nos nombreux projets structurants, notamment le nouveau marché moderne, l'amélioration des infrastructures scolaires, et nos initiatives en faveur du développement économique local.
              </p>
              <p>
                Notre vision est claire : faire de Mokolo une ville moderne, inclusive et prospère, tout en préservant notre riche patrimoine culturel. Nous travaillons sans relâche pour améliorer les conditions de vie de nos populations et créer un environnement propice aux investissements.
              </p>
              <p>
                Je vous invite à découvrir, à travers ce site, les multiples facettes de notre belle commune et les opportunités qu'elle offre. Notre équipe municipale reste à votre écoute pour construire ensemble l'avenir de Mokolo.
              </p>
              <p className="mt-6">
                Dr VOHOD DEGUIME<br />
                Maire de la Commune de Mokolo
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}