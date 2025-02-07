'use client';

import { FC } from 'react';
import Image from 'next/image';
import ThreeDotsImage from '@/public/images/threeDots.svg';

const AboutMe: FC = () => {
  return (
    <div
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
        <p>
          I am a junior web developer and AI engineer currently pursuing a
          Computer Science degree at Yangon University. I specialize in{' '}
          <span className="font-bold">
            HTML, CSS, and JavaScript frameworks
          </span>
          , with a strong foundation in artificial intelligence and software
          engineering.
        </p>

        <p>
          Currently freelancing on a{' '}
          <span className="font-bold">Vyond animation project</span>, I focus on
          creating engaging user experiences. I also developed the{' '}
          <span className="font-bold">Eternal Dynasty Name Generator</span>, a
          website that combines natural language processing with astrological
          concepts to generate meaningful names.
        </p>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Education</h3>
        <ul className="list-inside list-disc">
          <li>
            <span className="font-bold">University of Yangon</span> - Bachelor
            of Computer Science (Hons)
          </li>
          <li>
            <span className="font-bold">Kokushikan University</span> - Bachelor
            of Engineering (Electrical and Information Engineering) - One-Year
            Student Exchange Program (2023-2024)
          </li>
          <li>
            <span className="font-bold">
              Professional Web Development Course
            </span>{' '}
            - Topics: HTML, CSS, jQuery, Grid Layout, Bootstrap, Color Theory,
            Typography, UI/UX
          </li>
          <li>
            Studied: Image, Sound, and Video Processing, Network Communication,
            AI, Data Science, Software Engineering, and more.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Experience</h3>
        <ul className="list-inside list-disc">
          <li>
            <span className="font-bold">Freelance Animation Editor</span> -
            Vyond Animation Project (Jun - Aug 2024)
          </li>
          <li>
            <span className="font-bold">Full Stack Developer</span> - Eternal
            Dynasty Name Generator (Sep - Dec 2024)
          </li>
          <li>
            <span className="font-bold">
              Internship at Naito Denshi Electronic Company
            </span>{' '}
            - Trained in basic work environment and daily operations (One week)
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Skills</h3>
        <ul className="list-inside list-disc">
          <li>
            <span className="font-bold">Programming Languages:</span> Python,
            C#, Java, PHP, HTML, CSS, SwiftUI, Kotlin
          </li>
          <li>
            <span className="font-bold">Frameworks & Libraries:</span>{' '}
            Bootstrap, OpenCV, Pandas, WordPress
          </li>
          <li>
            <span className="font-bold">Full-stack Development:</span> PHP, C#,
            SwiftUI
          </li>
          <li>
            <span className="font-bold">Front-end Development:</span> HTML, CSS,
            C#, Kotlin, SwiftUI
          </li>
          <li>
            <span className="font-bold">Content Management Systems:</span>{' '}
            WordPress
          </li>
          <li>
            <span className="font-bold">Tools:</span> Visual Studio, Firebase,
            Android Studio, Xcode, NetBeans, Sublime Text, MATLAB, MySQL
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Soft Skills</h3>
        <ul className="list-inside list-disc">
          <li>Management Skills</li>
          <li>Creativity</li>
          <li>Digital Marketing</li>
          <li>Problem Solving</li>
          <li>Negotiation</li>
          <li>Critical Thinking</li>
          <li>Time Management</li>
          <li>Teamwork</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Languages</h3>
        <ul className="list-inside list-disc">
          <li>Korean</li>
          <li>English</li>
          <li>Japanese</li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">Contact</h3>
        <ul className="list-inside list-disc">
          <li>
            Phone: <span className="font-bold">+95 925 583 5167</span>
          </li>
          <li>
            Email: <span className="font-bold">thet2hlaing@gmail.com</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0d3388]">References</h3>
        <ul className="list-inside list-disc">
          <li>
            Dr. Thet Thet Hlaing - Professor, University of Yangon - Phone:{' '}
            <span className="font-bold">+959 95132852</span> - Email:{' '}
            <span className="font-bold">wintpapakyaw@gmail.com</span>
          </li>
          <li>
            Dr. Wint Pa Pa Kyaw - Professor, University of Yangon - Phone:{' '}
            <span className="font-bold">+959-9632-25576</span> - Email:{' '}
            <span className="font-bold">phyo12pyaepyae@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
