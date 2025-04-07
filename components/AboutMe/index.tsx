"use client";

import { FC } from "react";
import { Education } from "@/components/AboutMe/Education";
import { Experience } from "@/components/AboutMe/Experience";
import { Skills } from "@/components/AboutMe/Skills";

const AboutMe: FC = () => {
  return (
    <section id="aboutme" className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto">
        <h1 className="text-center mb-8 text-3xl font-bold leading-tight text-black sm:text-4xl">
          About Me
        </h1>
        <div className="space-y-16">
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
