import React from "react";
import { LuPlus } from "react-icons/lu";
import { IconType } from "react-icons";

interface SkillsBoxProps {
  title: string;
  Icon: IconType;
  href: string;
}

const SkillsBox: React.FC<SkillsBoxProps> = ({ title, Icon, href }) => {
  return (
    <a
      href={href}
      className="flex h-full w-full max-w-full items-center justify-center"
      target="_blank"
    >
      <div className="skillbox-hover-animation relative z-[10] flex h-[200px] w-full max-w-full items-center justify-center border border-[#424242] lg:max-w-[300px]">
        <LuPlus size={23} className="absolute -left-3 -top-3" />
        <LuPlus size={23} className="absolute -right-3 -top-3" />
        <LuPlus size={23} className="absolute -bottom-3 -right-3" />
        <LuPlus size={23} className="absolute -bottom-3 -left-3" />

        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl font-bold">{title}</span>
          <Icon size={34} />
        </div>
      </div>
    </a>
  );
};

export { SkillsBox };
