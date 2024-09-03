import React from "react";
import { Project } from "./components";
import { PROJECTS } from "../../../data";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-full max-w-[1100px]">
        <div className="flex w-full flex-col px-10">
          <h2 className="mx-auto w-full max-w-[640px] pb-10 text-3xl font-semibold sm:text-5xl md:text-7xl lg:max-w-[1100px]">
            Projects
          </h2>

          <div className="flex flex-col gap-20 sm:gap-40">
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
      </div>
    </section>
  );
};

export { Projects };
