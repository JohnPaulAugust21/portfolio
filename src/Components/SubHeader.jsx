import React from "react";
import "./SubHeader.scss";
import { motion } from "framer-motion";

function SubHeader() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={textVariants}>
      <h2 class="summary" style={{ padding: "70px" }}>
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="important"
        >
          Hey there!
        </motion.span>{" "}
        I'm{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="highlight"
        >
          August.
        </motion.span>
        , a web wizard with a passion for creating{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="vibrant"
        >
          awesome digital stuff
        </motion.span>
        . <br />Adaptability and{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="exciting"
        >
          performance-driven
        </motion.span>
        ,{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bold"
        >
          excellent
        </motion.span>{" "}
        at applying technical skills <br />to provide high-quality results{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="colorful"
        >
          efficiently
        </motion.span>
        . <br />
        Strong{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="creative"
        >
          organizational skills
        </motion.span>{" "}
        and enthusiasm for learning new skills and{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="stunning"
        >
          technologies
        </motion.span>
        , <br />
        along with taking on{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="interactive"
        >
          new responsibilities
        </motion.span>
        , ensure{" "}<br />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="dynamic"
        >
          consistent
        </motion.span>{" "}
        accomplishment and exceeding of<br />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="exciting"
        >
          project objectives
        </motion.span>{" "}
        to{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="colorful"
        >
          improve{" "}
        </motion.span>
   
        customer{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="important"
        >
          experience
        </motion.span>
    
        . <br />
        By the way, my{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="highlight"
        >
          RESUME{" "}
        </motion.span>
        is above THIS, and my{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="vibrant"
        >
          PROJECTS
        </motion.span>{" "}
        are below THIS—<br />just click all of them to see!
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="important"
        >
          {"             "} <br />💻 "code is my canvas, period." 🖌️
        </motion.span>
      </h2>
    </motion.div>
  );
}

export default SubHeader;
