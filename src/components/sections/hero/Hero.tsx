import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../../ui/button";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";
import {
  GITHUB,
  LINKEDIN,
  HERO_TEXT,
  HERO_TITLE,
  HERO_TITLE_WRITER,
} from "../../../data";
import { CV } from "../../../data";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-start pt-28 lg:items-center"
    >
      <div className="container">
        <div className="relative flex w-full max-w-[1200px] flex-col-reverse items-center gap-12 text-center lg:flex-row lg:justify-between lg:pt-0 lg:text-start">
          <div className="flex w-full max-w-[550px] flex-shrink-0 flex-col justify-center">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              {/* Hero Content */}
              <h1 className="text-3xl font-semibold leading-tight xs:text-4xl sm:text-5xl">
                {HERO_TITLE[0]}
                <span className="text-primary"> {HERO_TITLE[1]}</span>
                <Typewriter
                  options={{
                    strings: HERO_TITLE_WRITER,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="text-base text-grey sm:text-lg">{HERO_TEXT}</p>
              <div className="flex gap-4">
                <Button
                  href={CV}
                  text="Download CV"
                  className="bg-primary text-white before:bg-white hover:text-black"
                  download={true}
                  target="_blank"
                />
                <Button href="#contact" text="Contact Me" />
              </div>
              <div className="ml-3 flex gap-3 lg:ml-0">
                <a href={LINKEDIN}>
                  <PiLinkedinLogoBold
                    size={28}
                    className="transition-colors hover:fill-primary"
                  />
                </a>
                <a href={GITHUB}>
                  <RiGithubLine
                    size={28}
                    className="transition-colors hover:fill-primary"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image h-[250px] w-full max-w-[250px] sm:h-[350px] sm:max-w-[350px]" />
        </div>
      </div>
    </section>
  );
};

export { Hero };
