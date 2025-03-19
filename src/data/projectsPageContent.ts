import ratethatschool_1 from "../assets/projects/ratethatschool/hero.png";
import ratethatschool_2 from "../assets/projects/ratethatschool/add-review-step-0.png";
import ratethatschool_3 from "../assets/projects/ratethatschool/add-review-step-1.png";
import ratethatschool_4 from "../assets/projects/ratethatschool/add-review-step-2.png";
import ratethatschool_5 from "../assets/projects/ratethatschool/add-review-step-3.png";
import ratethatschool_6 from "../assets/projects/ratethatschool/add-review-step-4.png";
import ratethatschool_7 from "../assets/projects/ratethatschool/city-schools.png";
import ratethatschool_8 from "../assets/projects/ratethatschool/school-reviews.png";
import ratethatschool_9 from "../assets/projects/ratethatschool/popular-section.png";
import ratethatschool_10 from "../assets/projects/ratethatschool/all-schools.png";
import ratethatschool_11 from "../assets/projects/ratethatschool/my-reviews.png";
import ratethatschool_12 from "../assets/projects/ratethatschool/liked-reviews.png";

import soundit_1 from "../assets/projects/soundit/hero.png";
import soundit_2 from "../assets/projects/soundit/select-playlist.png";
import soundit_3 from "../assets/projects/soundit/converting.png";
import soundit_4 from "../assets/projects/soundit/select-track.png";
import soundit_5 from "../assets/projects/soundit/delete.png";

import ecommerce_1 from "../assets/projects/ecommerce/hero.png";
import ecommerce_2 from "../assets/projects/ecommerce/section2.png";
import ecommerce_3 from "../assets/projects/ecommerce/section3.png";
import ecommerce_4 from "../assets/projects/ecommerce/section4.png";
import ecommerce_5 from "../assets/projects/ecommerce/section5.png";

import gameofwords_1 from "../assets/projects/gameofwords/hero.png";
import gameofwords_2 from "../assets/projects/gameofwords/game.png";
import gameofwords_3 from "../assets/projects/gameofwords/register.png";

// import portfolio_1 from "../assets/projects/portfolio/hero.png";
// import portfolio_2 from "../assets/projects/portfolio/about.png";
// import portfolio_3 from "../assets/projects/portfolio/skills.png";
// import portfolio_4 from "../assets/projects/portfolio/contact.png";

const PROJECTS_CONTENT: ProjectsContent = {
  ratethatschool: {
    websiteHref: "https://ratethatschool.com",
    title: "ratethatschool",
    description:
      "RateThatSchool was built with Next.js, React, TypeScript, and Tailwind CSS, leveraging Firebase for data storage and authentication, and Cloudinary for image management. Firebase Authentication powers the signup and login process, ensuring a seamless and secure user experience.",
    githubHref: "https://github.com/BenedyktKajzerek/ratethatschool",
    images: [
      {
        imageSrc: ratethatschool_1,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Hero section showcasing the platform's purpose and features",
      },
      {
        imageSrc: ratethatschool_2,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Step 0: Enter your school's name if it does not already exist on the platform",
      },
      {
        imageSrc: ratethatschool_3,
        imageAlt: "RateThatSchool",
        imageDescription: "Step 1: Select your relationship with the school",
      },
      {
        imageSrc: ratethatschool_4,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Step 2: Provide a rating for your school based on your experience",
      },
      {
        imageSrc: ratethatschool_5,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Step 3: Write a detailed review and optionally upload images",
      },
      {
        imageSrc: ratethatschool_6,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Step 4: Review your submission before submitting your review",
      },
      {
        imageSrc: ratethatschool_7,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Browse schools within a specific city to explore available reviews",
      },
      {
        imageSrc: ratethatschool_8,
        imageAlt: "RateThatSchool",
        imageDescription: "View detailed reviews and ratings for your school",
      },
      {
        imageSrc: ratethatschool_9,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Discover the most popular schools and cities based on user engagement",
      },
      {
        imageSrc: ratethatschool_10,
        imageAlt: "RateThatSchool",
        imageDescription:
          "Access a directory of all schools listed on the platform",
      },
      {
        imageSrc: ratethatschool_11,
        imageAlt: "RateThatSchool",
        imageDescription: "Review your approved reviews",
      },
      {
        imageSrc: ratethatschool_12,
        imageAlt: "RateThatSchool",
        imageDescription: "View a collection of reviews you have liked",
      },
    ],
  },
  soundit: {
    title: "soundit",
    description:
      "Soundit was developed using a robust stack including HTML, CSS, JavaScript, Python, Django, SQLite3, YouTube API, Spotify API and OAuth 2.0. The application prioritizes user security and data privacy by implementing OAuth 2.0, which guarantees secure authentication and authorization, safeguarding user information throughout their experience.",
    githubHref: "https://github.com/BenedyktKajzerek/soundit",
    images: [
      {
        imageSrc: soundit_1,
        imageAlt: "Soundit",
        imageDescription: "Hero section",
      },
      {
        imageSrc: soundit_2,
        imageAlt: "Soundit",
        imageDescription: "1. Select playlist",
      },
      {
        imageSrc: soundit_3,
        imageAlt: "Soundit",
        imageDescription: "2. Edit details",
      },
      {
        imageSrc: soundit_4,
        imageAlt: "Soundit",
        imageDescription: "3. Pick tracks, hit convert and enjoy!",
      },
      {
        imageSrc: soundit_5,
        imageAlt: "Soundit",
        imageDescription: "You can also delete playlist if you want",
      },
    ],
  },
  ecommerce: {
    title: "ecommerce",
    description:
      "Developed with a foundation in React, TypeScript, Vite, and Tailwind CSS, this project emphasizes exceptional user interaction. The integration of advanced libraries such as Framer Motion and SwiperJS enriches the experience, providing fluid animations and interactive elements that elevate overall usability and engagement.",
    githubHref: "https://github.com/BenedyktKajzerek/ecommerce",
    images: [
      {
        imageSrc: ecommerce_1,
        imageAlt: "Ecommerce",
        imageDescription: "Hero section",
      },
      {
        imageSrc: ecommerce_2,
        imageAlt: "Ecommerce",
        imageDescription: "Infinite slider",
      },
      {
        imageSrc: ecommerce_3,
        imageAlt: "Ecommerce",
        imageDescription: "Swiperjs",
      },
      {
        imageSrc: ecommerce_4,
        imageAlt: "Ecommerce",
        imageDescription: "Gallery presentation",
      },
      {
        imageSrc: ecommerce_5,
        imageAlt: "Ecommerce",
        imageDescription: "Horizontal scroll testimonials",
      },
    ],
  },
  gameofwords: {
    title: "game of words",
    description:
      "Game of Words is a dynamic word puzzle game developed using HTML, CSS, and JavaScript for the frontend, complemented by Python and Flask on the backend. These technologies work together to deliver a smooth and engaging interface, backed by the robust capabilities of Flask for server-side logic.",
    githubHref: "https://github.com/BenedyktKajzerek/game-of-words",
    images: [
      {
        imageSrc: gameofwords_1,
        imageAlt: "Game of Words",
        imageDescription: "Hero section",
      },
      {
        imageSrc: gameofwords_2,
        imageAlt: "Game of Words",
        imageDescription: "Type with your or with screen keyboard",
      },
      {
        imageSrc: gameofwords_3,
        imageAlt: "Game of Words",
        imageDescription: "Registration and login validation",
      },
    ],
  },
  // portfolio: {
  //   title: "portfolio",
  //   description:
  //     "Crafted with a combination of React, TypeScript, and Tailwind CSS, this personal portfolio represents a commitment to both aesthetic simplicity and technical robustness. The focus on readability and maintainability ensures the codebase remains clean and scalable for future enhancements. ",
  //   githubHref: "https://github.com/BenedyktKajzerek/portfolio",
  //   images: [
  //     {
  //       imageSrc: portfolio_1,
  //       imageAlt: "Portfolio",
  //       imageDescription: "Hero section",
  //     },
  //     {
  //       imageSrc: portfolio_2,
  //       imageAlt: "Portfolio",
  //       imageDescription: "About section",
  //     },
  //     {
  //       imageSrc: portfolio_3,
  //       imageAlt: "Portfolio",
  //       imageDescription: "Skills section",
  //     },
  //     {
  //       imageSrc: portfolio_4,
  //       imageAlt: "Portfolio",
  //       imageDescription: "Contact section",
  //     },
  //   ],
  // },
};

type Project = {
  websiteHref?: string;
  title: string;
  description: string;
  githubHref: string;
  images: {
    imageSrc: string;
    imageAlt: string;
    imageDescription: string;
  }[];
};

type ProjectsContent = {
  [key: string]: Project;
};

export { PROJECTS_CONTENT };
