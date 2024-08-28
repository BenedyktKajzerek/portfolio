import React from "react";
import { Button } from "../../ui/button";
import { FiGithub } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { GITHUB, LINKEDIN, TEXT, TITLE } from "../../../data";
import Typewriter from "typewriter-effect";
import cv from "../../../assets/cv.txt";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-start pt-28 lg:items-center lg:pt-0"
    >
      <div className="container flex justify-center">
        <div className="relative flex w-full max-w-[950px] flex-col-reverse items-center gap-12 text-center lg:flex-row lg:pt-0 lg:text-start">
          {/* Main Content */}
          <div className="flex w-full max-w-[550px] flex-shrink-0 flex-col justify-center">
            <div className="flex flex-col items-center gap-6 lg:items-start">
              <h1 className="xs:text-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                Hi, I'm <span className="text-primary">Benedykt</span>
                <Typewriter
                  options={{
                    strings: TITLE,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="text-base sm:text-lg">{TEXT}</p>
              <div className="flex gap-4">
                <Button
                  href={cv}
                  text="Download CV"
                  className="bg-primary text-white"
                  download={true}
                />
                <Button href="#Contact" text="Contact Me" />
              </div>
              <div className="ml-3 flex gap-3 lg:ml-0">
                <a href={LINKEDIN}>
                  <PiLinkedinLogoBold size={28} />
                </a>
                <a href={GITHUB}>
                  <FiGithub size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image h-[250px] w-full max-w-[250px] sm:h-[350px] sm:max-w-[350px]" />
        </div>
      </div>
    </section>
  );
};

export { Hero };
