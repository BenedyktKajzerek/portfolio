import React from "react";
import { ABOUT_IMAGE, ABOUT_TITLE, ABOUT_TEXT } from "../../../data";

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-[600px] py-12">
      <div className="container">
        <div className="relative flex w-full max-w-[950px] flex-col items-center gap-12 text-center lg:flex-row lg:pt-0 lg:text-start">
          <div className="relative">
            <img
              src={ABOUT_IMAGE}
              alt=""
              className="h-[250px] w-[300px] rounded-2xl object-cover transition-all sm:h-[350px] sm:w-[400px]"
            />
            {/* <div className="absolute -bottom-[30px] -right-[30px] h-[150px] w-[150px] rounded-full bg-black p-2">
              <img src={curved} alt="Software Developer" />
            </div> */}
          </div>

          <div className="flex max-w-[520px] flex-col justify-center gap-4 lg:max-w-[480px]">
            <h3 className="font-bold uppercase text-primary">About Me</h3>
            <h4 className="text-2xl font-semibold">
              {ABOUT_TITLE[0]}
              <br />
              {ABOUT_TITLE[1]}
            </h4>
            <p className="text-grey">{ABOUT_TEXT[0]}</p>
            <p className="text-grey">{ABOUT_TEXT[1]}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
