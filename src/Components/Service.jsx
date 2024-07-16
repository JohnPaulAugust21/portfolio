import React from "react";
import "./Service.scss";
import { motion } from "framer-motion";
import frontend from "/FRONTEND.png";
import cover from "/cover.png";
import database from "/DATABASE.png";

const serviceData = [
  {
    id: 1,
    image: frontend,
    title: "Front-End Development",
    subtitle: (
      <>
        <span className="highlight">
          HTML/HTML5, CSS/Sass, JavaScript, and ReactJS Framework.
        </span>{" "}
        <br />
      </>
    ),
  },
  {
    id: 2,
    image: cover,
    title: "Back-End Development",
    subtitle: (
      <>
        <span className="highlight">
          PHP Laravel, Java, Python, C++, C, and C#.{" "}
        </span>
        <br />
      </>
    ),
  },
  {
    id: 3,
    image: database,
    title: "Database Management",
    subtitle: (
      <>
        <span className="highlight">MySQL, R, and COBOL.</span> <br />
      </>
    ),
  },
];

function Service() {
  return (
    <div id="services">
      <div className="service my-16 space-y-4">
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
          SERVICES
        </motion.h1>
        <div className="grid-container">
          {serviceData.map((service, index) => (
            <div key={index} className="service-item">
              <div className="img-container">
                <motion.img
                  src={service.image}
                  alt=""
                  className="img-shadow2 hover:scale-110 duration-300 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
             
                />
              </div>
              <div className="service-info space-y-2">
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
                  {service.title}
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.6,
                  }}
                >
                  {service.subtitle}
                </motion.h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
