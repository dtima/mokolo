import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Council = () => {
  const councilMembers = [
    { name: "VOHOD DEGUIME", title: "Conseiller Municipal" },
    { name: "ANDRE VAIWA", title: "Conseiller Municipal" },
    { name: "BELLO", title: "Conseiller Municipal" },
    { name: "DZAMDA GANABAÏ", title: "Conseiller Municipal" },
    { name: "NGAIBAI NDAWADAI", title: "Conseiller Municipal" },
    { name: "BALKISSOU BELLO", title: "Conseiller Municipal" },
    { name: "MOUSTAPHA DJALIGUE ZOGOI", title: "Conseiller Municipal" },
    { name: "MOUNA YOUGOUDA", title: "Conseiller Municipal" },
    { name: "BOUBA HAMADOU", title: "Conseiller Municipal" },
    { name: "DJAKAIGAI GONONDO", title: "Conseiller Municipal" },
    { name: "HELLE JEAN", title: "Conseiller Municipal" },
    { name: "ALIOUM EMANUEL", title: "Conseiller Municipal" },
    { name: "KOUMTSAI TIGE", title: "Conseiller Municipal" },
    { name: "ZRA NDJIDDA", title: "Conseiller Municipal" },
    { name: "YAOUBA SADOU", title: "Conseiller Municipal" },
    { name: "KOSSIMA KOYANG", title: "Conseiller Municipal" },
    { name: "GUEDAIDAI Noé", title: "Conseiller Municipal" },
    { name: "KONAI PASCAL", title: "Conseiller Municipal" },
    { name: "AISSATOU OUMAROU Epse YAHEDA", title: "Conseiller Municipal" },
    { name: "MOUSSA HAMAN", title: "Conseiller Municipal" },
    { name: "AMINATOU KOULKOU L ADAMOU AIDA", title: "Conseiller Municipal" },
    { name: "ZAIMBA BOUBA", title: "Conseiller Municipal" },
    { name: "MATEME MARIE LOUISE", title: "Conseiller Municipal" },
    { name: "MARADEK NICOLO NOUHOU", title: "Conseiller Municipal" },
    { name: "MOUTCHIDA CHELE", title: "Conseiller Municipal" },
    { name: "ZINAHAD CHRISTOPHE", title: "Conseiller Municipal" },
    { name: "MBLAYA BOYKETE RICHARD", title: "Conseiller Municipal" },
    { name: "GAMALA BITOKO", title: "Conseiller Municipal" },
    { name: "BOURTAYA SOLANGE", title: "Conseiller Municipal" },
    { name: "RGKOU DJANOUAK", title: "Conseiller Municipal" },
    { name: "DEOUDEOU NDOUMI", title: "Conseiller Municipal" },
    { name: "HAOUA IBRAHIMA", title: "Conseiller Municipal" },
    { name: "MOHAMADOU HOUSSEINI", title: "Conseiller Municipal" },
    { name: "HASSANA BAWA", title: "Conseiller Municipal" },
    { name: "MALAMA GABRIEL", title: "Conseiller Municipal" },
    { name: "ABDOULAYE OUSMANOU", title: "Conseiller Municipal" },
    { name: "MARA KODA", title: "Conseiller Municipal" },
    { name: "OUMAROU KOTE", title: "Conseiller Municipal" },
    { name: "NGUIZIYE MARIE", title: "Conseiller Municipal" },
    { name: "NGUIRDIBAI JOACHIM", title: "Conseiller Municipal" },
    { name: "SOUKOUZBAÏ MATHIEU", title: "Conseiller Municipal" },
    { name: "HABIBA", title: "Conseiller Municipal" },
    { name: "SUZANE HIDE", title: "Conseiller Municipal" },
    { name: "KOGNI ABEL", title: "Conseiller Municipal" },
    { name: "BAVDAM BAVA CECILE", title: "Conseiller Municipal" },
    { name: "YAKADAM ROSALIE", title: "Conseiller Municipal" },
    { name: "OUSMANOU ADAMOU", title: "Conseiller Municipal" },
    { name: "MATASSAI TCHIVED SOL", title: "Conseiller Municipal" },
    { name: "MOUSSA", title: "Conseiller Municipal" },
    { name: "NASSOUROU ABDOULAYE", title: "Conseiller Municipal" },
    { name: "GANABAÏ BOURHA", title: "Conseiller Municipal" },
    { name: "TEGOSSE KAVAYA", title: "Conseiller Municipal" },
    { name: "KADIRI", title: "Conseiller Municipal" },
    { name: "HOUZAMATOU MOURTALA", title: "Conseiller Municipal" },
    { name: "BOUBAKARY HAMAGABDO", title: "Conseiller Municipal" },
    { name: "BOIKETE ZEBAÏ", title: "Conseiller Municipal" },
    { name: "OUMAROU NDRIZOU", title: "Conseiller Municipal" },
    { name: "MAMTSAI MAFTAKWA", title: "Conseiller Municipal" },
    { name: "ADAMOU", title: "Conseiller Municipal" },
    { name: "OUMAROU HAMADJODA L.", title: "Conseiller Municipal" },
    { name: "HAMADOU", title: "Conseiller Municipal" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-8 md:pt-28">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Conseil Municipal de Mokolo
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Une équipe dévouée au service de notre communauté
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="/placeholder.svg" alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 text-center">{member.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Council;