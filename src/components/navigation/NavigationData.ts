export const getNavigationItems = (t: (key: string) => string) => [
  {
    trigger: t("nav.government"),
    items: [
      { href: "/government/meet-mayor", label: t("nav.meetMayor") },
      { href: "/government/council", label: t("nav.council") },
      { href: "/government/partners", label: t("nav.partner") },
    ],
  },
  {
    trigger: t("nav.residents"),
    items: [
      { href: "/residents/points-of-interest", label: t("nav.pointsOfInterest") },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/guide-pratique", label: t("nav.guidePratique") },
    ],
  },
  {
    trigger: t("nav.business"),
    items: [
      { href: "/business/investment", label: t("nav.investment") },
      { href: "/business/tenders", label: t("nav.tenders") },
      { href: "/business/licenses", label: t("nav.licenses") },
      { href: "/business/taxes", label: t("nav.taxes") },
      { href: "/business/projects", label: t("nav.projects") },
    ],
  },
];