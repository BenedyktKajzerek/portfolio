// =======
// General
// =======
const X: string = "https://x.com/benedykt_";
const GITHUB: string = "https://github.com/BenedyktKajzerek";
const INSTAGRAM: string = "https://www.instagram.com/benedykt_kajzerek/";
const LINKEDIN: string = "https://www.linkedin.com/in/benedykt-kajzerek/";
const CV: string =
  "https://drive.google.com/file/d/1JPdU5V-AHFG6TF3arK_YLfuLIxt-W-B9/view?usp=sharing";

// ======
// Navbar
// ======
const HEADER_LINKS = [
  { title: "Home", href: "/#" },
  { title: "About", href: "/#about" },
  { title: "Skills", href: "/#skills" },
  { title: "Projects", href: "/#projects" },
  { title: "Contact", href: "/#contact" },
];

// ============
// Hero Section
// ============
const HERO_TITLE: string[] = ["Hi, I'm", "Benedykt"];
const HERO_TITLE_WRITER: string[] = [
  "Software Developer",
  "Non-Fiction Fan",
  "Gym Enjoyer",
];
const HERO_TEXT: string =
  "Hi, I'm Benedykt Kajzerek. A passionate Software Developer based in Poland who can help you build fully responsive and interactive web applications.";

// =============
// About Section
// =============
import ABOUT_IMAGE from "../assets/about-img.jpg";
const ABOUT_TITLE: string[] = [
  "Passionate Software Developer",
  "Driven by Innovation",
];
const ABOUT_TEXT: string[] = [
  "Currently, I'm focused on mastering React.js with Typescript and Tailwind, working towards my ambition of becoming a full-stack developer.",
  "Beyond the keyboard, you'll find me enjoying gym workouts, calisthenics, and running. I'm also non-fiction and podcasts enthusiast, who's trying new things whenever the opportunity comes my way.",
];

// ==============
// Skills Section
// ==============
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconType } from "react-icons";

const SKILLS: Skills[] = [
  {
    title: "React.js",
    icon: FaReact,
    href: "https://react.dev/",
  },
  {
    title: "Typescript",
    icon: TbBrandTypescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind",
    icon: RiTailwindCssFill,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Next.js",
    icon: TbBrandNextjs,
    href: "https://nextjs.org/",
  },
  {
    title: "Python",
    icon: FaPython,
    href: "https://www.python.org/",
  },
  {
    title: "Django",
    icon: SiDjango,
    href: "https://www.djangoproject.com/",
  },
];

// ================
// Projects Section
// ================
import soundit from "../assets/projects/soundit/thumbnail.png";
import ecommerce from "../assets/projects/ecommerce/thumbnail.png";
import gameofwords from "../assets/projects/gameofwords/thumbnail.png";
import portfolio from "../assets/projects/portfolio/thumbnail.png";

const PROJECTS: Project[] = [
  {
    image: soundit,
    title: "Soundit",
    description:
      "Soundit lets you bridge the gap between YouTube and Spotify by easily transferring your playlists. Effortlessly select the playlist you want to convert, customize its details, and select the specific songs you want to transfer.",
    projectHref: "/project/soundit",
    githubHref: "https://github.com/BenedyktKajzerek/soundit",
  },
  {
    image: ecommerce,
    title: "Ecommerce",
    description:
      "An elite eCommerce platform dedicated to premium supercar detailing. With a cutting-edge UI and UX, this website ensures a luxurious and intuitive  experience.",
    projectHref: "/project/ecommerce",
    githubHref: "https://github.com/BenedyktKajzerek/ecommerce",
    rowReverse: true,
  },
  {
    image: gameofwords,
    title: "Game of Words",
    description:
      "Dive into the world of wordplay with this web-based app, where you can enjoy endless rounds of a popular word-guessing game. Create an account, track your progress, and keep your winning streak alive.",
    projectHref: "/project/gameofwords",
    githubHref: "https://github.com/BenedyktKajzerek/game-of-words",
  },
  {
    image: portfolio,
    title: "Portfolio",
    description:
      "A sleek and modern personal portfolio created with React.js, TypeScript, and Tailwind. The minimalist design emphasizes key information, and ensures presentation of the most important content in a clean manner.",
    projectHref: "/project/portfolio",
    githubHref: "https://github.com/BenedyktKajzerek/portfolio",
    rowReverse: true,
  },
];

// ===============
// Contact Section
// ===============
const CONTACT_HEADER: string = "Contact Me";
const PUBLIC_ACCESS_KEY: string = "dac2ef20-1d4c-4098-b411-4981f8bb54e8";
const CONTACT_LABELS: Label[] = [
  { id: "name", type: "text", placeholder: "John Doe" },
  { id: "email", type: "email", placeholder: "email@gmail.com" },
  {
    id: "message",
    type: "textarea",
    placeholder: "Type your message here.",
    className: "h-[150px]",
  },
];

export {
  CV,
  X,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  HEADER_LINKS,
  HERO_TITLE,
  HERO_TITLE_WRITER,
  HERO_TEXT,
  ABOUT_IMAGE,
  ABOUT_TITLE,
  ABOUT_TEXT,
  CONTACT_HEADER,
  CONTACT_LABELS,
  PUBLIC_ACCESS_KEY,
  SKILLS,
  PROJECTS,
};

interface Project {
  image: string;
  title: string;
  description: string;
  projectHref: string;
  githubHref: string;
  rowReverse?: boolean;
}

interface Skills {
  title: string;
  icon: IconType;
  href: string;
}

interface Label {
  id: string;
  type: string;
  placeholder: string;
  className?: string;
}
