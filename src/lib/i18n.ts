export const SUPPORTED_LANGUAGES = ['en', 'de'] as const // first language is selected by default

export type LocalizedStrings = Record<string, string | string[]>

export const translations: Record<typeof SUPPORTED_LANGUAGES[number], LocalizedStrings> = {
    de: {
      about: 'Über mich',
      actions: 'Aktionen',
      changeLanguage: 'Sprache wechseln (English Language)',
      city: 'Stadt',
      contact: 'Kontakt',
      education: 'Bildung',
      email: 'E-Mail',
      from: 'aus',
      homepage: 'Homepage',
      interests: 'Interessen',
      language: 'DE',
      months: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      noResults: 'Keine Ergebnisse',
      openMenu: 'um das Menü zu öffnen',
      personalWebsite: 'Persönliche Webseite',
      placeholder: 'Befehl eingeben oder suchen...',
      press: "Drücke",
      print: 'Drucken',
      projects: 'Projekte',
      skills: 'Fähigkeiten',
      since: 'Seit',
      workExperience: 'Arbeitserfahrung'
    },
    en: {
      about: 'About',
      actions: 'Actions',
      changeLanguage: 'Change Language (Deutsche Sprache)',
      city: 'City',
      contact: 'Contact',
      education: 'Education',
      email: 'Email',
      from: 'from',
      homepage: 'Homepage',
      interests: 'Interests',
      language: 'EN',
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      noResults: 'No results found.',
      personalWebsite: 'Website',
      placeholder: 'Type a command or search...',
      press: "Press",
      print: 'Print',
      projects: 'Projects',
      skills: 'Skills',
      since: 'Since',
      workExperience: 'Work Experience'
    }
  } as const