import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-cameroon-green text-white py-8 md:py-12 mt-8 md:mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <p className="font-bold text-sm md:text-base">Commune de Mokolo</p>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="h-4 w-4" />
                <p>B.P. 40, Mokolo</p>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base">
                <Phone className="h-4 w-4" />
                <p>620295404/‪+237 6 72 11 77 77</p>
              </div>
              <div className="space-y-1 text-sm md:text-base pl-6">
                <p>Département du Mayo-Tsanaga</p>
                <p>Région de l'Extrême-Nord, Cameroun</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Accès Rapide</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><a href="#council" className="hover:underline">Conseil Municipal</a></li>
              <li><a href="#partners" className="hover:underline">Partenaires</a></li>
              <li><a href="#health" className="hover:underline">Services de Santé</a></li>
              <li><a href="#social" className="hover:underline">Affaires Sociales</a></li>
              <li><a href="/visitors/tourism" className="hover:underline">Tourisme</a></li>
              <li><a href="#projects" className="hover:underline">Projets de Développement</a></li>
              <li><a href="#tenders" className="hover:underline">Appels d'Offres</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">{t("footer.followUs")}</h3>
            <div className="flex space-x-4">
              <a href="#facebook" className="hover:text-cameroon-yellow transition-colors">
                <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#twitter" className="hover:text-cameroon-yellow transition-colors">
                <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#linkedin" className="hover:text-cameroon-yellow transition-colors">
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a href="#youtube" className="hover:text-cameroon-yellow transition-colors">
                <Youtube className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            </div>
          </div>

          {/* Fraud Report */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-bold">Signalement</h3>
            <p className="text-sm md:text-base">
              Vous soupçonnez une fraude municipale, un gaspillage ou un abus ? Signalez-le au bureau de l'inspecteur général de la commune.
            </p>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>2025 © Commune de Mokolo</p>
          <p>Website Designed by DTIMA – Connecting People & Government</p>
        </div>
      </div>
    </footer>
  );
}