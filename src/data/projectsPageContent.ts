import image from "../assets/img.png";
import image2 from "../assets/img2.jpg";

const PROJECTS_CONTENT: ProjectsContent = {
  soundit: {
    title: "soundit",
    description:
      "description of project dlora korsaiojrisao rsaj rosjr isajrisjr sairjosirj siarj oi idjsaiod siojariosjrisa risajr iosa risajriosja isdksjad sadksajdkls ajdkslajdkls jdksjakdljskal ",
    githubHref: "https://github.com/BenedyktKajzerek/soundit",
    images: [
      {
        imageSrc: image,
        imageAlt: "image",
        imageDescription:
          "deedsdasdsadasd sadasdas ddsadsa as ddsa sad asdsdsad",
      },
      {
        imageSrc: image2,
        imageAlt: "dsadsa",
        imageDescription: "dsad asd sadsadsa ds",
      },
      {
        imageSrc: image,
        imageAlt: "dsadsa",
        imageDescription: "dsad asd sadsadsa ds",
      },
    ],
  },
  ecommerce: {
    title: "ecommerce",
    description: "description",
    githubHref: "https://github.com/BenedyktKajzerek/ecommerce",
    images: [
      {
        imageSrc: image,
        imageAlt: "",
        imageDescription: "",
      },
      {
        imageSrc: image,
        imageAlt: "",
        imageDescription: "",
      },
    ],
  },
  gameofwords: {
    title: "gameofwords",
    description: "description",
    githubHref: "https://github.com/BenedyktKajzerek/game-of-words",
    images: [
      {
        imageSrc: "",
        imageAlt: "",
        imageDescription: "",
      },
      {
        imageSrc: "",
        imageAlt: "",
        imageDescription: "",
      },
    ],
  },
  portfolio: {
    title: "portfolio",
    description: "description",
    githubHref: "https://github.com/BenedyktKajzerek/portfolio",
    images: [
      {
        imageSrc: "",
        imageAlt: "",
        imageDescription: "",
      },
      {
        imageSrc: "",
        imageAlt: "",
        imageDescription: "",
      },
    ],
  },
};

type Project = {
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
