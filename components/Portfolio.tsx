"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "@/lib/i18n/client";
import Image from "next/image";

interface Project {
  title: string;
  client: string;
  location: string;
  imageSrc: string;
  role: string;
  techStack: string[];
}

interface YearData {
  year: string;
  projects: Project[];
}

const portfolioData: YearData[] = [
  {
    year: "2024-2025",
    projects: [
      {
        title: "portfolio.projects.linus.title",
        client: "portfolio.projects.linus.client",
        location: "portfolio.projects.linus.location",
        imageSrc: "https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg",
        role: "Front-end Developer",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Material UI"]
      },
      {
        title: "portfolio.projects.lomtech.title",
        client: "portfolio.projects.lomtech.client",
        location: "portfolio.projects.lomtech.location",
        imageSrc: "https://img.freepik.com/free-vector/gradient-technology-company-banner-template_23-2149173764.jpg",
        role: "Front-end Developer",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"]
      },
      {
        title: "portfolio.projects.eternal.title",
        client: "portfolio.projects.eternal.client",
        location: "portfolio.projects.eternal.location",
        imageSrc: "https://img.freepik.com/free-vector/artificial-intelligence-concept-illustration_114360-7000.jpg",
        role: "Full Stack Developer",
        techStack: ["Python", "NLP", "React", "Node.js"]
      }
    ]
  },
  {
    year: "2023",
    projects: [
      {
        title: "portfolio.projects.cinema.title",
        client: "portfolio.projects.cinema.client",
        location: "portfolio.projects.cinema.location",
        imageSrc: "https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-spotlight-film-strip-clapper-board-popcorn-3d-glasses-tickets-vector-illustration_1284-77181.jpg",
        role: "Java Developer",
        techStack: ["Java", "MySQL", "Bootstrap"]
      },
      {
        title: "portfolio.projects.donut.title",
        client: "portfolio.projects.donut.client",
        location: "portfolio.projects.donut.location",
        imageSrc: "https://img.freepik.com/free-vector/hand-drawn-bakery-landing-page_23-2148777266.jpg",
        role: "Front-end Developer",
        techStack: ["React", "JavaScript", "CSS3", "Responsive Design"]
      },
      {
        title: "portfolio.projects.seventeen.title",
        client: "portfolio.projects.seventeen.client",
        location: "portfolio.projects.seventeen.location",
        imageSrc: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg",
        role: "iOS Developer",
        techStack: ["Swift", "UIKit", "CoreData", "REST API"]
      }
    ]
  },
  {
    year: "2022",
    projects: [
      {
        title: "portfolio.projects.student.title",
        client: "portfolio.projects.student.client",
        location: "portfolio.projects.student.location",
        imageSrc: "https://img.freepik.com/free-vector/school-management-abstract-concept-illustration_335657-4907.jpg",
        role: "C# Developer",
        techStack: ["C#", ".NET", "SQL Server", "WPF"]
      },
      {
        title: "portfolio.projects.maxenergy.title",
        client: "portfolio.projects.maxenergy.client",
        location: "portfolio.projects.maxenergy.location",
        imageSrc: "https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg",
        role: "ASP.NET Developer",
        techStack: ["ASP.NET", "PowerBI", "SQL", "Azure"]
      }
    ]
  }
];

interface Props {
  lng: string;
}

const Portfolio: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, "common");

  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);

  return (
    <section 
      id="portfolio" 
      className="bg-black px-4 py-20 text-white sm:px-8 scroll-mt-20" // Changed from bg-gray-900 to bg-black
    >
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-4xl font-bold">
          {t("portfolio.title")}
        </h2>
        {portfolioData.map((yearData, index) => (
          <div key={index} className="mb-16">
            <h3 className="mb-8 text-2xl font-semibold">
              {yearData.year}
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {yearData.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-xl bg-zinc-900 shadow-xl transition-all hover:scale-[1.02]" // Changed from bg-gray-800 to bg-zinc-900
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.imageSrc}
                      alt={t(project.title)}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="mb-2 text-xl font-bold text-white">
                      {t(project.title)}
                    </h4>
                    <p className="mb-2 text-sm text-gray-300">
                      {project.role}
                    </p>
                    <p className="mb-2 text-sm text-gray-300">
                      {t("portfolio.projects.client")}: {t(project.client)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
