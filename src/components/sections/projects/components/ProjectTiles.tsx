import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProjectTilesProps {
  image: string;
  title: string;
  description: string;
  projectHref: string;
  githubHref: string;
}

const ProjectTiles: React.FC<ProjectTilesProps> = ({
  image,
  title,
  description,
  projectHref,
  githubHref,
}) => {
  return (
    <>
      {/* Title, Description, Project and GitHub Links */}
      <span className="project-tile">{title}</span>
      <span className="project-tile relative overflow-hidden text-sm normal-case sm:text-base">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 m-auto blur-md"
        />
        <span className="z-10">{description}</span>
      </span>
      <Link
        to={projectHref}
        className="project-tile text-right transition-colors hover:text-primary"
        aria-label={`Read more about ${title}`}
      >
        <span>
          Read More <FaExternalLinkAlt size={24} className="inline-block" />
        </span>
      </Link>
      <a
        href={githubHref}
        className="project-tile border-none text-right transition-colors hover:text-primary"
        aria-label={`See ${title} code on GitHub`}
        target="_blank"
      >
        <div>
          See Code <FaExternalLinkAlt size={24} className="inline-block" />
        </div>
      </a>
    </>
  );
};

export { ProjectTiles };
