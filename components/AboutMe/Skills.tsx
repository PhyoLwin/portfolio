import { FC } from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "Django", "PostgreSQL"]
  },
  {
    name: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  // Add more categories
];

export const Skills: FC = () => {
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
        <FaTools className="h-8 w-8 text-[#e896dd]" />
        <h2 className="text-center text-3xl font-bold leading-tight text-black sm:text-4xl">
          Skills
        </h2>
      </div>

      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-[#e896dd] bg-opacity-20 text-[#8a2be2] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};