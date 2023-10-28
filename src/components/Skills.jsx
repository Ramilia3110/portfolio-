import React, { useRef } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiSass,
} from "react-icons/di";
import { SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const Skills = () => {
  const ref = useRef(); // Move this line inside the component

  const skills = [
    { name: "HTML5", icon: <DiHtml5 size={50} /> },
    { name: "CSS3", icon: <DiCss3 size={50} /> },
    { name: "JavaScript", icon: <DiJavascript1 size={50} /> },
    { name: "React", icon: <DiReact size={50} /> },
    { name: "Redux", icon: <SiRedux size={50} /> },
    { name: "Node.js", icon: <DiNodejsSmall size={50} /> },
    { name: "Sass", icon: <DiSass size={50} /> },
    { name: "TypeScript", icon: <SiTypescript size={50} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={50} /> },
  ];

  return (
    <div id="skills" className="bg-gray-100 py-16 w-[90%] mx-auto">
      <div className="container w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              ref={ref}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={index}
              className="w-[7rem] h-[3.5rem] bg-gray-300 text-[#3b7945] rounded-full flex items-center justify-center p-4 text-sm hover:bg-[#2e8d3e] transform transition duration-300 hover:scale-110"
            >
              {skill.icon}
              <span className="ml-2">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
