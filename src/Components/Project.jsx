import React from "react";
import "./Project.scss";
import linkedin from "/linkedin.png";
import sportscomplex from "/sports-logo.png";
import phoneshop from "/phoneshop.png";
import barbrandy from "/barbrandy.png";
import todo from "/todo.png";

import { motion } from "framer-motion";
const projectData = [
  {
    id: 1,
    image: sportscomplex,
    title: "Sports Complex ",
    subtitle: "Management System",
    url: "https://sportscomplex.infinityfreeapp.com/?i=1",
  },
  {
    id: 2,
    image: barbrandy,
    title: "Barbrandy",
    subtitle: "Delivery Services",
    url: "http://barbrandy.infinityfreeapp.com/",
  },
  {
    id: 3,
    image: phoneshop,
    title: "Phoneshop Management",
    subtitle: " System Database ",
    url: "http://phoneshop.infinityfreeapp.com/home.php",
  },
  {
    id: 4,
    image: todo,
    title: "To Do",
    subtitle: "App",
    url: "https://to-do-vite-lexmeet.vercel.app/",
  },
];

const Project = () => {
  return (
    <div id="projects">
      <div className="project">
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
          PROJECTS
        </motion.h1>
        <div className="grid-container">
          {projectData.map((project, index) => (
            <div key={index} className="project-item">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <div className="img-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-shadow2 hover:scale-110 duration-300 cursor-pointer"
                  />
                </div>
              </a>
              <div className="project-info space-y-2">
                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.1,
                  }}
                  className="text-2xl font-bold text-primary"
                >
                  {project.title}
                </motion.h2>

                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.1,
                  }}
                  className="text-2xl font-bold text-primary"
                >
                  {project.subtitle}
                </motion.h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
