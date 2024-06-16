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

const summary = `As a full stack developer, I have worked on various projects, from mobile apps to websites.
Since starting my dev journey at the Apple Developer Academy in Naples, I have garnered over 5 years of work experience, crafting cross-platform and web-based experiences for clients from a wide range of industries.`

const initials = name.split(' ').map(name => name.slice(0, 1)).join('')
export const RESUME_DATA = {
  name,
  initials,
  location: "Mainz, Germany",
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
      start: "2019",
      end: "2024",
      description:
        "Worked on different applications for industrial clients, including multiple document-management systems and mobile applications to remotely monitor/control machines",
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
        "Open-source extension for Raycast to interface with the BetterTouchTool application for macOS",
      link: {
        label: "BTT in the Raycast Store",
        href: "https://www.raycast.com/dnnsmnstrr/bettertouchtool",
      },
    },
  ],
} as const;
