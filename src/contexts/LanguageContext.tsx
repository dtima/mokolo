import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.searchPlaceholder": "What can we help you find?",
    "nav.government": "Government",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.meetMayor": "Meet the Mayor",
    "nav.council": "Municipal Council",
    "nav.partner": "Partners",
    "nav.pointsOfInterest": "Points of Interest",
    "nav.guidePratique": "Practical Guide",
    "nav.tourism": "Tourism",
    "nav.hotels": "Hotels & Accommodation",
    "nav.restaurants": "Restaurants",
    "nav.attractions": "Tourist Attractions",
    "nav.events": "Events",
    "nav.investment": "Investment Opportunities",
    "nav.tenders": "Tenders & Procurement",
    "nav.licenses": "Licenses & Permits",
    "nav.taxes": "Municipal Taxes",
    "nav.projects": "Development Projects",
    "poi.hotels": "Hotels",
    "poi.ngos": "NGOs",
    "poi.travelAgencies": "Travel Agencies",
    "poi.restaurants": "Restaurants & Leisure",
    "poi.markets": "Supermarkets & Markets",
    "poi.contact": "Contact",
    "poi.phone": "Phone",
    "poi.email": "Email",
    "poi.address": "Address",
    "poi.slogan": "Slogan",
    "events.title": "Events",
    "events.viewAll": "View All Events",
  },
  fr: {
    "hero.searchPlaceholder": "Que pouvons-nous vous aider à trouver ?",
    "nav.government": "Gouvernement",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.meetMayor": "Rencontrer le Maire",
    "nav.council": "Conseil Municipal",
    "nav.partner": "Partenaires",
    "nav.pointsOfInterest": "Centres d'Intérêt",
    "nav.guidePratique": "Guide Pratique",
    "nav.tourism": "Tourisme",
    "nav.hotels": "Hôtels et Hébergement",
    "nav.restaurants": "Restaurants",
    "nav.attractions": "Sites Touristiques",
    "nav.events": "Événements",
    "nav.investment": "Opportunités d'Investissement",
    "nav.tenders": "Appels d'Offres",
    "nav.licenses": "Licences et Permis",
    "nav.taxes": "Taxes Municipales",
    "nav.projects": "Projets de Développement",
    "poi.hotels": "Hôtels",
    "poi.ngos": "ONG",
    "poi.travelAgencies": "Agences de Voyages",
    "poi.restaurants": "Restaurants & Lieux de Détente",
    "poi.markets": "Supermarchés et Marchés",
    "poi.contact": "Contact",
    "poi.phone": "Téléphone",
    "poi.email": "Email",
    "poi.address": "Adresse",
    "poi.slogan": "Slogan",
    "events.title": "Événements",
    "events.viewAll": "Voir Tous les Événements",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}