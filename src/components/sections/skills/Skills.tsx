import React from "react";
import { SkillsBox } from "./components";
import { SKILLS } from "../../../data";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28">
      <div className="container">
        <div className="flex w-full max-w-[964px] flex-col">
          <h2 className="pb-10 text-3xl font-semibold sm:text-5xl md:text-7xl">
            Skills
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((skill) => (
              <SkillsBox
                key={skill.href}
                title={skill.title}
                Icon={skill.icon}
                href={skill.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skills };
