import React, { useState } from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import facebook from "../assets/icons/facebook.svg";
import gmail from "../assets/icons/gmail.svg";
import linkedins from "../assets/icons/linkedins.svg";

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("johnpaulaugustmaldo@gmail.com").then(() => {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    });
  };
  return (
    <div>
      <div className="cover">
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
        <div className="name">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
            }}
          >
            Hey, there! I’m <span>August.</span> <br />
            I’m a
            <span style={{ fontWeight: 800, color: "white" }}>
              {" "}
              web developer
            </span>
            <br />
            and <span style={{ textAlign: "left" }}>designer.</span>
          </motion.h1>
          <a
            href="https://drive.google.com/file/d/12zl_RC_zXellfyl79VSGP4Kx-xq-aDnn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.8, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                duration: 0.5,
                ease: "easeOut",
              }}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="resume"
            >
              resume
            </motion.button>
          </a>

          <motion.h1
            className="summarys"
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
            }}
          >
            code is my <br />
            canvas, <span>period.</span>
            <br />
          </motion.h1>

          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
            }}
          >
            I love turning ideas into websites that really <span>pop!</span>{" "}
            With my IT background, I'm all about making user-friendly designs
            that <span>stand out.</span> Whether it's coding solutions or adding
            that special touch to projects, I'm here to make the web more fun
            and <span>interactive.</span> Let's build something amazing{" "}
            <span>together!</span>
          </motion.h2>
        </div>
        <div className="socials">
          <motion.a
            href="https://www.facebook.com/johnpaulaugust.maldo"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fb"
          >
            <motion.img
              src={facebook}
              alt="facebook logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>

          <motion.a
            onClick={copyToClipboard}
            whileHover={{ scale: 1.2, rotate: 0 }}
            whileTap={{ scale: 0.8, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fb"
            style={{ display: "inline-block", cursor: "pointer" }}
          >
            <motion.img
              src={gmail}
              alt="gmail logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>
          {showNotification && (
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "10px 20px",
                background: "#333",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Text copied to clipboard!
            </motion.a>
          )}
          <motion.a
            href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.8, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fb"
          >
            <motion.img
              src={linkedins}
              alt="linkedin logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Header;
