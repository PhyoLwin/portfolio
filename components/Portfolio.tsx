'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from '@/lib/i18n/client';
import Image from 'next/image';

interface Project {
  title: string;
  client: string;
  location: string;
  imageSrc: string;
}

interface YearData {
  year: number | string;
  projects: Project[];
}

const portfolioData: YearData[] = [
  {
    year: 2017,
    projects: [
      {
        title: 'portfolio.projects.project1.title',
        client: 'portfolio.projects.project1.client',
        location: 'portfolio.projects.project1.location',
        imageSrc:
          'https://www.shutterstock.com/image-vector/delivery-car-box-fly-out-600nw-1970870492.jpg',
      },
      {
        title: 'portfolio.projects.project2.title',
        client: 'portfolio.projects.project2.client',
        location: 'portfolio.projects.project2.location',
        imageSrc:
          'https://img.freepik.com/free-vector/flat-background-world-tourism-day-celebration_23-2149582530.jpg',
      },
    ],
  },
  {
    year: 2018,
    projects: [
      {
        title: 'portfolio.projects.project3.title',
        client: 'portfolio.projects.project3.client',
        location: 'portfolio.projects.project3.location',
        imageSrc:
          'https://img.freepik.com/free-vector/illustration-post-office_53876-81073.jpg',
      },
      {
        title: 'portfolio.projects.project4.title',
        client: 'portfolio.projects.project4.client',
        location: 'portfolio.projects.project4.location',
        imageSrc:
          'https://img.freepik.com/free-vector/hand-drawn-post-office-cartoon-illustration_23-2151093339.jpg',
      },
      {
        title: 'portfolio.projects.project5.title',
        client: 'portfolio.projects.project5.client',
        location: 'portfolio.projects.project5.location',
        imageSrc:
          'https://img.freepik.com/free-vector/hand-drawn-fire-prevention-concept_23-2149126371.jpg',
      },
    ],
  },
  {
    year: 2019,
    projects: [
      {
        title: 'portfolio.projects.project6.title',
        client: 'portfolio.projects.project6.client',
        location: 'portfolio.projects.project6.location',
        imageSrc: '/images/portfolio/prime.png',
      },
    ],
  },
  {
    year: '2020',
    projects: [
      {
        title: 'portfolio.projects.project7.title',
        client: 'portfolio.projects.project7.client',
        location: 'portfolio.projects.project7.location',
        imageSrc: '/images/portfolio/codehada.png',
      },
      {
        title: 'portfolio.projects.project14.title',
        client: 'portfolio.projects.project14.client',
        location: 'portfolio.projects.project14.location',
        imageSrc: '/images/portfolio/tabtab.png',
      },
    ],
  },
  {
    year: '2021',
    projects: [
      {
        title: 'portfolio.projects.project8.title',
        client: 'portfolio.projects.project8.client',
        location: 'portfolio.projects.project8.location',
        imageSrc:
          'https://www.shutterstock.com/image-vector/cartoon-airplane-over-runway-passenger-600nw-2428871881.jpg',
      },
      {
        title: 'portfolio.projects.project15.title',
        client: 'portfolio.projects.project15.client',
        location: 'portfolio.projects.project15.location',
        imageSrc: '/images/portfolio/healivery.png',
      },
    ],
  },
  {
    year: '2023',
    projects: [
      {
        title: 'portfolio.projects.project9.title',
        client: 'portfolio.projects.project9.client',
        location: 'portfolio.projects.project9.location',
        imageSrc: '/images/portfolio/amma.png',
      },
      {
        title: 'portfolio.projects.project10.title',
        client: 'portfolio.projects.project10.client',
        location: 'portfolio.projects.project10.location',
        imageSrc:
          'https://st4.depositphotos.com/20689124/24064/i/450/depositphotos_240644534-stock-photo-stock-market-forex-trading-graph.jpg',
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        title: 'portfolio.projects.project11.title',
        client: 'portfolio.projects.project11.client',
        location: 'portfolio.projects.project11.location',
        imageSrc:
          'https://shopequo.com/cdn/shop/articles/Cover_58fe9aa4-942a-4469-b73f-d0b207249fc6.jpg?v=1711295069&width=1600',
      },
      {
        title: 'portfolio.projects.project12.title',
        client: 'portfolio.projects.project12.client',
        location: 'portfolio.projects.project12.location',
        imageSrc: '/images/portfolio/2024.mp4',
      },
      {
        title: 'portfolio.projects.project13.title',
        client: 'portfolio.projects.project13.client',
        location: 'portfolio.projects.project13.location',
        imageSrc:
          'https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg',
      },
      {
        title: 'portfolio.projects.project16.title',
        client: 'portfolio.projects.project16.client',
        location: 'portfolio.projects.project16.location',
        imageSrc: 'https://nacharger.com/_nuxt/img/image-Section04.e519ffe.png',
      },
    ],
  },
];

interface Props {
  lng: string;
}

export const PortfolioLayout: React.FC<Props> = ({ lng }) => {
  const { t } = useTranslation(lng, 'common');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="portfolio" className="bg-customBlue px-4 py-20 text-white sm:px-8">
      <h2 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        {t('portfolio.title')}
      </h2>
      {portfolioData.map((yearData, index) => (
        <div key={index} className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
            {t(`portfolio.years.${yearData.year}`)}
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {yearData.projects.map((project, idx) => {
              const isVideo =
                project.imageSrc.endsWith('.mp4') ||
                project.imageSrc.endsWith('.webm') ||
                project.imageSrc.endsWith('.ogg');
              return (
                <div
                  key={idx}
                  className="portfolio-item block overflow-hidden rounded-lg bg-white"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <div className="relative h-80 w-full">
                    {isVideo ? (
                      <video
                        src={project.imageSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <Image
                        src={project.imageSrc}
                        alt={t(project.title)}
                        width={500}
                        height={500}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-2">
                    <h3 className="mb-1 text-lg font-semibold text-gray-500">
                      {t(project.title)}
                    </h3>
                    <p className="mb-1 text-sm text-gray-500">
                      {t('portfolio.projects.client')}: {t(project.client)}
                    </p>
                    <p className="text-sm text-gray-500">
                      {t('portfolio.projects.location')}: {t(project.location)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioLayout;
