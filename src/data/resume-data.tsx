import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  HpmLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

const name = "Dennis Muensterer"
const USERNAME_SHORT = 'dnnsmnstrr'
const USERNAME_LONG = name.replaceAll(' ', '').toLocaleLowerCase()
const email = USERNAME_LONG + '@gmail.com'

const summary = `As a full stack developer, I have worked on a multitude of projects, from mobile apps to websites.
Since starting my dev journey at the Apple Developer Academy in Naples, I have garnered over 5 years of work experience, crafting cross-platform and web-based experiences for clients from a wide range of industries.`

const initials = name.split(' ').map(name => name.slice(0, 1)).join('')
export const RESUME_DATA = {
  name,
  initials,
  location: "Mainz",
  locationLink: "https://www.google.com/maps/place/Mainz",
  about:
    "Developer and Maker",
  summary,
  avatarUrl: "https://avatars.githubusercontent.com/u/3686989?v=4",
  personalWebsiteUrl: "https://muensterer.tech",
  contact: {
    email,
    tel: "+4915730967248",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/" + USERNAME_SHORT,
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/" + USERNAME_LONG,
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/" + USERNAME_SHORT,
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "FES Wiesbaden",
      degree: "Apprenticeship 'Fachinformatiker für Anwendungsentwicklung'",
      badges: [],
      link: "",
      start: "2019",
      end: "2022",
    },
    {
      school: "Apple Developer Academy",
      badges: ["Naples"],
      link: "https://www.developeracademy.unina.it/en/about/",
      degree: "iOS development with Swift",
      start: "2017",
      end: "2018",
    },
    {
      school: "TU Munich & Darmstadt",
      badges: [],
      link: "",
      degree: "Engineering & Computer Science",
      start: "2016",
      end: "2019",
    },
    {
      school: "German International School New York",
      badges: [],
      link: "",
      degree: "Abitur & Highschool Diploma",
      start: "2012",
      end: "2015",
    },
  ],
  work: [
    {
      company: "hpm",
      link: "https://hpm.agency",
      badges: ["Remote"],
      title: "Developer",
      logo: HpmLogo,
      start: "2019",
      end: "2024",
      description:
        "Worked on various projects for industrial clients, including mobile and web applications with React (Native) and SvelteKit, as well as backend development in Node.js with Actionhero",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/React-Native",
    "Svelte/SvelteKit",
    "Node.js",
    "Swift",
    "Docker",
    "Vitest",
    "UML"
  ],
  projects: [
    {
      title: "TESORA",
      techStack: [
        "Work",
        "JavaScript",
        "React Native",
      ],
      description: "Local-first mobile app to track valuable assets created by hpm. I was responsible for the development of the mobile app.",
      link: {
        label: "tesora.app",
        href: "https://tesora.app/",
      },
    },
    {
      title: "Raycast BetterTouchTool",
      techStack: ["Side Project", "Raycast Extension"],
      description:
        "Open-source extension for Raycast on macOS to control the BetterTouchTool application",
      link: {
        label: "BTT in the Raycast Store",
        href: "https://www.raycast.com/dnnsmnstrr/bettertouchtool",
      },
    },
  ],
  interests: [
    "Music",
    "3d Printing",
    "Gaming",
    "Raspberry Pi",
    "Self-hosting",
    "Home Automation",
    "Virtual Reality",
    "Personal Knowledge Management (Zettelkasten)"
  ],
  translation: {
    language: "Deutsch",
    about: "Entwickler und 'Maker'",
    summary: `Als Full-Stack Entwickler habe ich bereits an der vollen Bandbreite gearbeitet, von mobilen Apps zu Webanwendungen und Backend-Services.
Seit meiner Teilnahme an der Apple Developer Academy in Neapel konnte ich über 5 Jahre Erfahrung sammeln. Dabei erstellte ich platformübergreifende und webbasierte Applikationen für Kunden aus verschiedenen Branchen.`,
    education: [
      {
        school: "FES Wiesbaden",
        badges: [],
        link: "",
        degree: "Ausbildung zum 'Fachinformatiker für Anwendungsentwicklung'",
        start: "2019",
        end: "2022",
      },
      {
        school: "Apple Developer Academy",
        badges: ["Neapel"],
        link: "https://www.developeracademy.unina.it/en/about/",
        degree: "App-Entwicklung mit Swift",
        start: "2017",
        end: "2018",
      },
      {
        school: "TU München & Darmstadt",
        badges: [],
        link: "",
        degree: "Ingenieurwissenschaften und Informatik",
        start: "2016",
        end: "2019",
      },
      {
        school: "Deutsche Internationale Schule New York",
        badges: [],
        link: "https://www.gisny.org/",
        degree: "Abitur & Highschool Abschluss",
        start: "2012",
        end: "2015",
      },
    ],
    work: [
      {
        company: "hpm",
        link: "https://hpm.agency",
        badges: ["Remote"],
        title: "Softwareentwickler",
        logo: HpmLogo,
        start: "2019",
        end: "2024",
        description:
          "Arbeit an zahllosen Kundenprojekten, unter anderem mobile Apps und Webanwendungen mit React (Native) und SvelteKit, sowie Backendentwicklung in Node.js mit Actionhero",
      },
    ],
    interests: [
      "Musik",
      "3d-Druck",
      "Gaming",
      "Raspberry Pi",
      "Smart-home",
      "Virtual Reality",
      "Wissensmanagement (Zettelkasten)"
    ],
    projects: [
      {
        title: "TESORA",
        techStack: [
          "JavaScript",
          "React Native",
        ],
        description: "Platformübergreifende React-Native-App entwickelt von hpm.",
        link: {
          label: "tesora.app",
          href: "https://tesora.app/",
        },
      },
      {
        title: "Raycast BetterTouchTool",
        techStack: ["Side Project", "Raycast Extension"],
        description:
          "Open-source Erweiterung für die macOS-Anwendung 'Raycast', um die Software BetterTouchTool zu steuern",
        link: {
          label: "BTT im Raycast Store",
          href: "https://www.raycast.com/dnnsmnstrr/bettertouchtool",
        },
      },
    ]
  }
} as const;
