import React from "react";
import { Navbar } from "../components/sections/navbar";
import { Link, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { PROJECTS_CONTENT } from "../data";
import { RiGithubLine } from "react-icons/ri";

const ProjectPage: React.FC = () => {
  const projectName = useParams<{ projectName: string }>().projectName || "";

  const project = PROJECTS_CONTENT[projectName];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <Navbar />

      <main className="pt-24">
        <div className="container">
          <article className="flex max-w-[600px] flex-col">
            <div>
              {/* Header & Description */}
              <Link
                to={"/#projects"}
                className="flex items-center gap-2 text-sm text-grey underline transition-colors hover:text-white"
              >
                <IoIosArrowBack size={12} className="inline-block" />
                View all projects
              </Link>

              <h1 className="my-6 text-4xl font-semibold capitalize">
                {project.title}
              </h1>

              <p className="text-grey">{project.description}</p>
            </div>

            {/* Project Gallery */}
            <div>
              {project.images.map((image) => (
                <div className="mt-28 max-w-[600px]">
                  <figure>
                    <img src={image.imageSrc} alt={image.imageSrc} />
                    <figcaption className="mt-4 px-8 text-center text-xs text-grey">
                      Caption for this amazing photo of this amazing project.
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>

            <a
              href={project.githubHref}
              target="_blank"
              className="my-28 text-center text-lg text-grey underline transition-colors hover:text-white"
            >
              See Code <RiGithubLine className="inline-block" />
            </a>
          </article>
        </div>
      </main>
    </>
  );
};

export { ProjectPage };
