import React from "react";
import "./Header.scss";

import { motion } from "framer-motion";
function Header() {
  return (
    <div>
      <div className="cover">
        <img src="/cover.png" alt="Cover Image" />

        <motion.div
          id="home"
          className="profile"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/2x2 picture.jpg"
            alt="Profile Picture"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </motion.div>
      </div>

      <div className="name">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7,
          }}
        >
          🌟 John Paul August B. Maldo. 🌟
        </motion.h1>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          🎓 BS in Information Technology. 🎓
        </motion.h2>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          🏫 PUP — Manila. 🏫
        </motion.h2>
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          🎨 programmer. 🎨
        </motion.h2>

        <motion.a
          href="https://drive.google.com/file/d/1OrgpkD19SVyhLc1ciDEu0QobkFBGplTq/view?usp=sharing"
          target="_blank"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="resume-icon"
        >
          <motion.img
            src="/resume.png"
            alt="resume logo"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.a>
        <motion.h3
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          johnpaulaugustmaldo@gmail.com
        </motion.h3>
      </div>
    </div>
  );
}

export default Header;
