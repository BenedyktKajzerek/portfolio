import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectTilesProps {
  title: string;
  description: string;
  projectHref: string;
  githubHref: string;
}

const ProjectTiles: React.FC<ProjectTilesProps> = ({
  title,
  description,
  projectHref,
  githubHref,
}) => {
  return (
    <>
      {/* Title, Description, Project and GitHub Links */}
      <span className="project-tile">{title}</span>
      <span className="project-tile text-sm normal-case sm:text-base">
        {description}
      </span>
      <a
        href={projectHref}
        className="project-tile text-right transition-colors hover:text-primary"
        aria-label={`Read more about ${title}`}
      >
        <span>
          Read More <FaExternalLinkAlt size={24} className="inline-block" />
        </span>
      </a>
      <a
        href={githubHref}
        className="project-tile border-none text-right transition-colors hover:text-primary"
        aria-label={`See ${title} code on GitHub`}
      >
        <div>
          See Code <FaExternalLinkAlt size={24} className="inline-block" />
        </div>
      </a>
    </>
  );
};

export { ProjectTiles };
