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

const USERNAME_SHORT = 'dnnsmnstrr'
const USERNAME_LONG = 'dennismuensterer'
const email = USERNAME_LONG + '@gmail.com'

export const RESUME_DATA = {
  name: "Dennis Muensterer",
  initials: "DM",
  location: "Mainz, Germany",
  locationLink: "https://www.google.com/maps/place/Mainz",
  about:
    "Developer and Maker",
  summary:
    "As a full stack developer, I have worked on various projects, from mobile apps to web platforms. Currently, I work mostly with TypeScript and Svelte. I have over 5 years of experience, starting at the Apple Developer Academy in Naples.",
  avatarUrl: "https://avatars.githubusercontent.com/u/3686989?v=4",
  personalWebsiteUrl: "https://muensterer.lol",
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
      school: "TU Munich & Darmstadt",
      degree: "Engineering & Computer Science",
      start: "2016",
      end: "2019",
    },
    {
      school: "Apple Developer Academy",
      degree: "iOS development with Swift",
      start: "2017",
      end: "2018",
    },
    {
      school: "FES Wiesbaden",
      degree: "Apprenticeship 'Fachinformatiker für Anwendungsentwicklung'",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "hpm",
      link: "https://hpm.agency",
      badges: ["Remote"],
      title: "Developer",
      logo: HpmLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/React-Native",
    "Svelte/SvelteKit",
    "Node.js",
  ],
  projects: [
    {
      title: "TESORA",
      techStack: [
        "Work",
        "JavaScript",
        "React Native",
      ],
      description: "A redirect service with support for aliases",
      link: {
        label: "tesora.app",
        href: "https://tesora.app/",
      },
    },
    {
      title: "Redairect",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
      ],
      description: "A redirect service with support for aliases",
      link: {
        label: "redairect.com",
        href: "https://redairect.com/",
      },
    },
    {
      title: "Raycast BetterTouchTool",
      techStack: ["Side Project", "Raycast Extension"],
      description:
        "An extension for Raycast to trigger named triggers in the BetterTouchTool application for macOS",
      link: {
        label: "BTT in the Raycast Store",
        href: "https://www.raycast.com/dnnsmnstrr/bettertouchtool",
      },
    },
  ],
} as const;
