import { FC } from "react";
import Image from "next/image";
import ThreeDotsImage from "@/public/images/threeDots.svg";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTools, FaLanguage, FaPhone, FaUserTie } from "react-icons/fa";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useState, useEffect } from "react";

interface EducationImage {
  src: string;
  alt: string;
}

const educationImages: EducationImage[] = [
  {
    src: "/images/school/2.jpg",
    alt: "Kokushikan University Campus"
  },
  {
    src: "/images/school/1.jpeg",
    alt: "University of Yangon"
  },
  {
    src: "/images/school/3.jpeg",
    alt: "Web Development"
  },
  {
    src: "/images/school/4.png",
    alt: "Additional Studies"
  }
];

export const Template: FC<Props> = ({ title, points, type = 'education' }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getIcon = () => {
    switch (type) {
      case 'education':
        return <FaGraduationCap className="h-8 w-8 text-[#e896dd]" />;
      case 'experience':
        return <FaBriefcase className="h-8 w-8 text-[#e896dd]" />;
      case 'skills':
        return <FaTools className="h-8 w-8 text-[#e896dd]" />;
      case 'languages':
        return <FaLanguage className="h-8 w-8 text-[#e896dd]" />;
      case 'contact':
        return <FaPhone className="h-8 w-8 text-[#e896dd]" />;
      case 'references':
        return <FaUserTie className="h-8 w-8 text-[#e896dd]" />;
      default:
        return null;
    }
  };

  const renderListItem = ({ title, description, index }: { title: string; description: string; index: number }) => (
    <motion.div 
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } }
      }}
    >
      <motion.div
        className="absolute inset-0 bg-[#e896dd]"
        variants={{
          hidden: { scaleX: 1 },
          visible: { 
            scaleX: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }
        }}
        style={{ originX: 0 }}
      />
      
      <motion.span 
        className="block font-bold text-black text-xl mb-2"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.4 }
          }
        }}
      >
        {title}
      </motion.span>
      
      <motion.span 
        className="block text-lg leading-relaxed text-gray-700"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, delay: 0.6 }
          }
        }}
      >
        {description}
      </motion.span>
    </motion.div>
  );

  useEffect(() => {
    if (type === 'education') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % educationImages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [type]);

  const renderEducationSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {points.map(({ title, description }, index) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors"
        >
          {index % 2 === 0 ? (
            <>
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={educationImages[index]?.src || educationImages[0].src}
                  alt={educationImages[index]?.alt || 'Education'}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>
              <div className="space-y-3">
                {renderListItem({ title, description, index })}
              </div>
            </>
          ) : (
            <>
              <div className="space-y-3">
                {renderListItem({ title, description, index })}
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={educationImages[index]?.src || educationImages[0].src}
                  alt={educationImages[index]?.alt || 'Education'}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
              </div>
            </>
          )}
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="relative bg-white px-4 py-8 md:px-16 md:py-16"
    >
      <div className="mb-6 flex items-center justify-center space-x-3">
        {getIcon()}
        <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl">
          {title}
        </h2>
      </div>

      <Image
        src={ThreeDotsImage}
        alt="Decorative dots"
        width={5}
        height={5}
        className="mx-auto mb-6"
      />

      <div className="mx-auto max-w-4xl">
        {type === 'education' ? renderEducationSection() : (
          <ul className="space-y-6">
            {points.map(({ title, description }, index) => (
              <motion.li
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col space-y-2 text-gray-700 hover:bg-gray-50 p-4 rounded-lg transition-colors"
              >
                {renderListItem({ title, description, index })}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};
