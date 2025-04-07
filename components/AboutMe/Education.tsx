import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen, FaAward, FaUniversity } from "react-icons/fa";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface EducationItem {
  src: string;
  alt: string;
  period: string;
  degree: string;
  university: string;
  details: string[];
  achievements?: string[];
  relevantCourses?: string[];
}

const educationData: EducationItem[] = [
  {
    src: "/images/school/1.jpeg",
    alt: "University of Yangon",
    period: "2018 - 2024",
    degree: "Bachelor of Computer Science (Hons)",
    university: "University of Yangon",
    details: [
      "Specialized in AI, Image Processing, and Software Engineering",
      "Developed proficiency in Python, Java, C++, C#, JavaScript, PHP"
    ],
    relevantCourses: [
      "AI Development",
      "Computer Vision & Image Processing",
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "Computer Networks"
    ],
    achievements: [
      "Developed Student Management System in C#",
      "Created Burmese Name Generator (NLP project)",
      "Built Paradise Cinema Ticket System in Java"
    ]
  },
  {
    src: "/images/school/2.jpg",
    alt: "Kokushikan University",
    period: "2023 - 2024",
    degree: "Exchange Program in Electrical and Information Engineering",
    university: "Kokushikan University, Japan",
    details: [
      "One Year Student Exchange Program",
      "Worked with Prof. Kouzu's group on electrical circuits and robotics"
    ],
    relevantCourses: [
      "Image, Sound, and Video Processing",
      "Network Communication",
      "Introduction to AI",
      "Basic Course for Technologists"
    ],
    achievements: [
      "Built robots and worked with 3D printers",
      "Developed Python game to enhance AI knowledge",
      "Studied computer vision in Python"
    ]
  },
  {
    src: "/images/school/3.jpeg",
    alt: "Web Development Courses",
    period: "2020",
    degree: "Professional Web Development Certification",
    university: "Intelligence Web Development",
    details: [
      "Completed professional web development course",
      "Front-end and back-end development skills"
    ],
    relevantCourses: [
      "HTML, CSS, JavaScript, jQuery",
      "Bootstrap Framework",
      "UI/UX Design",
      "Color Theory & Typography"
    ],
    achievements: [
      "Created Donut Shop Website",
      "Developed responsive designs",
      "Implemented interactive elements"
    ]
  },
  {
    src: "/images/school/4.png",
    alt: "Additional Studies",
    period: "2021-2022",
    degree: "Self-Study in Advanced Topics",
    university: "Online Platforms",
    details: [
      "Continued education in AI and machine learning",
      "Explored natural language processing"
    ],
    relevantCourses: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Data Science"
    ],
    achievements: [
      "Researched Myanmar Name Generator",
      "Studied TensorFlow, PyTorch",
      "Learned big data technologies"
    ]
  }
];

export const Education: FC = () => {
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
      className="relative bg-gradient-to-br from-gray-50 to-white px-4 py-8"
      id="education"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col items-center">
          <div className="flex items-center space-x-4 mb-4">
            <FaGraduationCap className="h-8 w-8 text-indigo-600" />
            <h2 className="text-center text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Education Journey
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            My academic path with hands-on projects and international experience
          </p>
        </div>

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.university}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-6 items-stretch`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-[400px] relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <FaUniversity className="h-6 w-6 text-white mb-2" />
                    <h3 className="text-white text-xl font-bold">{item.university}</h3>
                    <p className="text-indigo-200 font-medium">{item.period}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 flex">
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.degree}</h3>
                  <p className="text-indigo-600 font-medium mb-4">{item.university}</p>
                  
                  <div className="flex-grow space-y-4">
                    <div>
                      <h4 className="flex items-center text-base font-semibold text-gray-700 mb-2">
                        <span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
                        Key Details
                      </h4>
                      <ul className="space-y-1">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex text-sm">
                            <span className="text-indigo-500 mr-2">•</span>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center text-base font-semibold text-gray-700 mb-2">
                        <FaBookOpen className="text-indigo-500 mr-2 h-4 w-4" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {item.relevantCourses?.map((course, i) => (
                          <span 
                            key={i}
                            className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="flex items-center text-base font-semibold text-gray-700 mb-2">
                        <FaAward className="text-indigo-500 mr-2 h-4 w-4" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements?.map((achievement, i) => (
                          <li key={i} className="flex text-sm">
                            <span className="text-indigo-500 mr-2">▹</span>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section with adjusted spacing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Technical Skills Gained Through Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <h4 className="font-semibold text-lg text-indigo-700 mb-4">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-indigo-600 mb-2">Programming</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>Python, C#, C++</li>
                    <li>Java, PHP, SQL</li>
                    <li>HTML, CSS, SwiftUI</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-indigo-600 mb-2">AI/ML</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>Computer Vision</li>
                    <li>NLP, Deep Learning</li>
                    <li>Data Science</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-lg text-purple-700 mb-4">Tools & Technologies</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-purple-600 mb-2">Frameworks</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>TensorFlow, PyTorch</li>
                    <li>OpenCV, Pandas</li>
                    <li>NumPy, Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-600 mb-2">Development</h5>
                  <ul className="text-sm space-y-1 text-gray-700">
                    <li>Full-stack (PHP)</li>
                    <li>C# .NET, Git</li>
                    <li>Web & Mobile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};