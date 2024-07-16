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
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="important"
        >
          Hey there!
        </motion.span>{" "}
        I'm{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="highlight"
        >
          August.
        </motion.span>
        , a web wizard with a passion for creating{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="vibrant"
        >
          awesome digital stuff
        </motion.span>
        . <br />I love turning{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="exciting"
        >
          ideas
        </motion.span>{" "}
        into{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bold"
        >
          websites
        </motion.span>{" "}
        that really{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="colorful"
        >
          pop
        </motion.span>
        ! <br />
        With my{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="creative"
        >
          IT background
        </motion.span>
        , I'm all about making{" "}
        <motion.span
          style={{ display: "inline-block", minWidth: "8px" }} // Adjust as needed
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="stunning"
        >
          user-friendly designs
        </motion.span>{" "}
        that stand out. <br />
        Whether it's{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="interactive"
        >
          coding solutions
        </motion.span>{" "}
        or adding that{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="dynamic"
        >
          special touch
        </motion.span>{" "}
        to projects, I'm here to make the web more{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="exciting"
        >
          fun
        </motion.span>{" "}
        and{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="colorful"
        >
          interactive
        </motion.span>
        . <br />
        Let's build something{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="important"
        >
          amazing
        </motion.span>{" "}
        together! <br />
        By the way, my{" "}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          // animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="highlight"
        >
          RESUME
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
        are below THIS—just click all of them to see!
      </h2>
    </motion.div>
  );
}

export default SubHeader;
