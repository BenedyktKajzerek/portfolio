import React, { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const btnHoverAnimation =
  "relative flex items-center justify-center overflow-hidden bg-white font-medium text-black transition-colors before:absolute before:left-0 before:top-0 before:h-[100%] before:w-[101%] before:origin-right before:scale-x-0 before:bg-primary before:transition-transform before:duration-500 before:ease-in-out before:content-[''] hover:text-white hover:before:origin-left hover:before:scale-x-100";

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
          `${btnHoverAnimation} text-nowrap rounded-lg bg-white px-4 py-[10px] text-sm font-medium text-black`,
          className,
        )}
      >
        <span className="z-[10]">{text}</span>
      </button>
    </a>
  );
};

export { Button };
