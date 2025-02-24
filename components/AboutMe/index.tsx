"use client";

import { FC } from "react";
import Image from "next/image";
import ThreeDotsImage from "@/public/images/threeDots.svg";
import { Template } from "./Template";
import { motion } from "framer-motion"; // Add this import

const AboutMe: FC = () => {
  const educationData = {
    title: "Education",
    points: [
      {
        title: "University of Yangon",
        description: "Bachelor of Computer Science (Hons)",
      },
      {
        title: "Kokushikan University",
        description:
          "Bachelor of Engineering (Electrical and Information Engineering) - One-Year Student Exchange Program (2023-2024)",
      },
      {
        title: "Professional Web Development Course",
        description:
          "Topics: HTML, CSS, jQuery, Grid Layout, Bootstrap, Color Theory, Typography, UI/UX",
      },
      {
        title: "Additional Studies",
        description:
          "Image, Sound, and Video Processing, Network Communication, AI, Data Science, Software Engineering, and more.",
      },
    ],
  };

  const experienceData = {
    title: "Experience",
    points: [
      {
        title: "Freelance Animation Editor",
        description: "Vyond Animation Project (Jun - Aug 2024)",
      },
      {
        title: "Full Stack Developer",
        description: "Eternal Dynasty Name Generator (Sep - Dec 2024)",
      },
      {
        title: "Internship at Naito Denshi Electronic Company",
        description:
          "Trained in basic work environment and daily operations (One week)",
      },
    ],
  };

  const skillsData = {
    title: "Skills",
    points: [
      {
        title: "Programming Languages",
        description: "Python, C#, Java, PHP, HTML, CSS, SwiftUI, Kotlin",
      },
      {
        title: "Frameworks & Libraries",
        description: "Bootstrap, OpenCV, Pandas, WordPress",
      },
      {
        title: "Full-stack Development",
        description: "PHP, C#, SwiftUI",
      },
      {
        title: "Front-end Development",
        description: "HTML, CSS, C#, Kotlin, SwiftUI",
      },
      {
        title: "Content Management Systems",
        description: "WordPress",
      },
      {
        title: "Tools",
        description:
          "Visual Studio, Firebase, Android Studio, Xcode, NetBeans, Sublime Text, MATLAB, MySQL",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about-me"
      className="relative bg-white px-4 py-12 md:px-16 md:py-24"
    >
      <h2 className="mb-6 text-center text-3xl font-bold leading-tight text-[#4b5563] sm:text-4xl">
        About Me
      </h2>

      <Image
        src={ThreeDotsImage}
        alt="Decorative dots"
        width={5}
        height={5}
        className="mx-auto mb-3"
      />

      <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
        <div className="flex flex-col items-center md:flex-row md:space-x-8">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6 md:mb-0 md:w-1/3"
          >
            <div className="overflow-hidden rounded-full border-4 border-[#f4a4f0] shadow-xl">
              <Image
                src="/images/kimono.jpg"
                alt="Profile picture in kimono"
                width={300}
                height={300}
                className="h-[300px] w-[300px] object-cover transform hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </motion.div>
          <div className="md:w-2/3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-lg leading-relaxed"
            >
              I am a{" "}
              <span className="font-bold text-[#651a5b]">
                software engineer and designer
              </span>{" "}
              with experience in{" "}
              <span className="font-semibold text-[#f4a4f0]">
                front-end development, mobile apps (iOS & Kotlin), PHP websites,
                and C#/Java projects
              </span>
              . I've also worked as a{" "}
              <span className="font-bold text-[#6a1f60]">
                freelance animation editor
              </span>
              , blending creativity with technical skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed bg-gradient-to-r from-pink-50 to-transparent p-4 rounded-lg "
            >
              Beyond development, I participated in a{" "}
              <span className="font-bold text-[#651a5b]">
                Japanese exchange program
              </span>{" "}
              and am currently pursuing a{" "}
              <span className="font-semibold text-[#f4a4f0]">
                master's degree
              </span>
              . Fluent in{" "}
              <span className="font-bold text-[#651a5b]">Japanese</span> and{" "}
              <span className="font-bold text-[#651a5b]">Korean</span>, I enjoy
              cross-cultural collaboration and building innovative digital
              experiences.
            </motion.p>
          </div>
        </div>

        <Template {...educationData} type="education" />
        <Template {...experienceData} type="experience" />
        <Template {...skillsData} type="skills" />
      </div>
    </motion.div>
  );
};

export default AboutMe;
