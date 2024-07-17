import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import {
  css,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  typescript,
} from "../assets/icons";
const Skills = () => {
  const skills = [
    {
      imageUrl: css,
      name: "CSS",
      type: "Frontend",
    },

    {
      imageUrl: git,
      name: "Git",
      type: "Version Control",
    },
    {
      imageUrl: github,
      name: "GitHub",
      type: "Version Control",
    },
    {
      imageUrl: html,
      name: "HTML",
      type: "Frontend",
    },
    {
      imageUrl: javascript,
      name: "JavaScript",
      type: "Frontend",
    },
    {
      imageUrl: mongodb,
      name: "MongoDB",
      type: "Database",
    },

    // {
    //   imageUrl: mui,
    //   name: "Material-UI",
    //   type: "Frontend",
    // },
    // {
    //   imageUrl: nextjs,
    //   name: "Next.js",
    //   type: "Frontend",
    // },
    {
      imageUrl: nodejs,
      name: "Node.js",
      type: "Backend",
    },
    {
      imageUrl: react,
      name: "React",
      type: "Frontend",
    },
    // {
    //   imageUrl: redux,
    //   name: "Redux",
    //   type: "State Management",
    // },
    {
      imageUrl: sass,
      name: "Sass",
      type: "Frontend",
    },
    {
      imageUrl: tailwindcss,
      name: "Tailwind CSS",
      type: "Frontend",
    },
    // {
    //   imageUrl: typescript,
    //   name: "TypeScript",
    //   type: "Frontend",
    // },
   
  ];
  return (
    <div id="skills">
      <div className="skill my-16 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
        >
          TECHNICAL SKILLS
        </motion.h1>
        <div className="py-10 flex flex-col">
          {/* <h3 className='subhead-text'>My Skills</h3> */}

          <div className="skills-container py-10">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="btn-back rounded-xl" />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={skill.imageUrl}
                      alt={skill.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
