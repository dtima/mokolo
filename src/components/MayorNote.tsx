import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function MayorNote() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Au service de la commune de Mokolo</h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/lovable-uploads/537b547b-0444-4b96-9820-fc8585714567.png"
              alt="Dr VOHOD DEGUIME - Maire de la Commune de Mokolo"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Dr VOHOD DEGUIME</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Dr VOHOD DEGUIME est le Maire de la Commune de Mokolo, une fonction qu'il occupe avec dévouement et vision. 
              Fort d'une riche expérience en administration locale et développement communautaire, il œuvre sans relâche 
              pour le développement socio-économique de Mokolo. Son leadership est marqué par un engagement profond envers 
              l'amélioration des conditions de vie des populations et la modernisation des infrastructures municipales.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-cameroon-green hover:bg-cameroon-green/90 text-sm md:text-base"
                onClick={() => navigate("/government/meet-mayor")}
              >
                Rencontrer le Maire
              </Button>
              <Button 
                className="bg-cameroon-red hover:bg-cameroon-red/90 text-sm md:text-base"
                onClick={() => navigate("/government/biography")}
              >
                Biographie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}