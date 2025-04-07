import { FC } from "react";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: "LomTech",
    position: "Senior Software Engineer",
    period: "2020-Present",
    description: "Leading development of enterprise solutions and mentoring junior developers."
  },
  // Add more experience items
];

export const Experience: FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="relative bg-white px-4 py-8 md:px-16 md:py-16"
    >
      <div className="mb-6 flex items-center justify-center space-x-3">
        <FaBriefcase className="h-8 w-8 text-[#e896dd]" />
        <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl">
          Experience
        </h2>
      </div>

      <div className="mx-auto max-w-4xl">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800">{exp.position}</h3>
            <p className="text-xl text-[#e896dd] mb-2">{exp.company}</p>
            <p className="text-gray-600 mb-4">{exp.period}</p>
            <p className="text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};