import React from "react";
import { ProjectTiles } from "./ProjectTiles";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
  projectHref: string;
  githubHref: string;
  rowReverse?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  image,
  title,
  description,
  projectHref,
  githubHref,
  rowReverse,
}) => {
  return (
    <div
      className={`mx-auto flex w-full max-w-[640px] flex-col lg:min-h-[550px] lg:max-w-[1100px] ${rowReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <div className="group relative aspect-square lg:w-1/2">
        {/* Project Image */}
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-fill"
        />

        {/* Centered Circle Image */}
        <img
          src={image}
          alt={`${title} preview`}
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full object-cover transition-all duration-300 group-hover:rotate-45"
        />
        <div className="absolute left-1/2 top-1/2 h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>

      {/* Title and Information */}
      <div className="flex flex-col lg:w-1/2">
        <ProjectTiles
          image={image}
          title={title}
          description={description}
          projectHref={projectHref}
          githubHref={githubHref}
        />
      </div>
    </div>
  );
};

export { Project };
