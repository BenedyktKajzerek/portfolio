import React from "react";
import { Project } from "./components";
import { PROJECTS } from "../../../data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="items flex w-full flex-col gap-20 sm:gap-40">
          {PROJECTS.map((project) => (
            <Project
              key={project.title}
              image={project.image}
              title={project.title}
              description={project.description}
              projectHref={project.projectHref}
              githubHref={project.githubHref}
              rowReverse={project.rowReverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
