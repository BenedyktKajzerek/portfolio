// =======
// General
// =======
const X = "https://x.com/benedykt_";
const GITHUB = "https://github.com/BenedyktKajzerek";
const INSTAGRAM = "https://www.instagram.com/benedykt_kajzerek/";
const LINKEDIN = "https://www.linkedin.com/in/benedykt-kajzerek/";

// ============
// Hero Section
// ============
const HERO_TITLE = ["Hi, I'm", "Benedykt"];
const HERO_TITLE_WRITER = [
  "Software Developer",
  "Non-Fiction Fan",
  "Gym Enjoyer",
];
const HERO_TEXT =
  "Hi, I'm Benedykt Kajzerek. A passionate Software Developer based in Poland who can help you build fully responsive and interactive web applications.";

// =============
// About Section
// =============
import ABOUT_IMAGE from "../assets/img2.jpg";
const ABOUT_TITLE = ["Software Developer", "with Passion to Create"];
const ABOUT_TEXT = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos alias architecto dolores.",
  "Mollitia, minus unde distinctio earum magni voluptatum. Lorem ipsum dolor.",
];

// ===============
// Contact Section
// ===============
const CONTACT_HEADER = "Contact Me";
const PUBLIC_ACCESS_KEY = "dac2ef20-1d4c-4098-b411-4981f8bb54e8";
const CONTACT_LABELS = [
  { id: "name", type: "text", placeholder: "John Doe" },
  { id: "email", type: "email", placeholder: "email@gmail.com" },
  {
    id: "message",
    type: "textarea",
    placeholder: "Type your message here.",
    className: "h-[150px]",
  },
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

const SKILLS = [
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

export {
  X,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
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
};

// const SKILLS = [
//   {
//     title: "React.js",
//     icon: FaReact,
//     href: "https://react.dev/",
//     title_2: "Next.js",
//     icon_2: TbBrandNextjs,
//     href_2: "https://nextjs.org/",
//   },
//   {
//     title: "Typescript",
//     icon: TbBrandTypescript,
//     href: "https://www.typescriptlang.org/",
//     title_2: "Javascript",
//     icon_2: RiJavascriptLine,
//     href_2: "https://www.javascript.com/",
//   },
//   {
//     title: "Tailwind",
//     icon: RiTailwindCssFill,
//     href: "https://tailwindcss.com/",
//     title_2: "Sass",
//     icon_2: FaSass,
//     href_2: "https://sass-lang.com/",
//   },
//   {
//     title: "HTML",
//     icon: FaHtml5,
//     href: "https://html.com/",
//     title_2: "CSS",
//     icon_2: FaCss3Alt,
//     href_2: "https://www.w3schools.com/css/",
//   },
//   {
//     title: "Python",
//     icon: FaPython,
//     href: "https://www.python.org/",
//     title_2: "Django",
//     icon_2: SiDjango,
//     href_2: "https://www.djangoproject.com/",
//   },
//   {
//     title: "MySQL",
//     icon: DiMysql,
//     href: "https://www.mysql.com/",
//     title_2: "SQL",
//     icon_2: PiFileSql,
//     href_2: "https://en.wikipedia.org/wiki/SQL",
//   },
// ];
