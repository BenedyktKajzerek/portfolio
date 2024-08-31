import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"a"> & {
  text: string;
  href: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, href, className, ...props }) => {
  return (
    <a href={href} {...props}>
      <button
        className={twMerge(
          "btn-hover-animation text-nowrap rounded-lg bg-white px-4 py-[10px] text-sm font-medium text-black",
          className,
        )}
      >
        <span className="z-[10]">{text}</span>
      </button>
    </a>
  );
};

export { Button };
