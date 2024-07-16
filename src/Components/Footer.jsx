import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";  // Ensure this is imported

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">

      <motion.a
            href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 0 }}
            whileTap={{ scale: 0.8, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="logo"
          >
            <motion.img
             src="/uuuu.png" alt="august logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>

        {/* <div className="logo">
          <img src="/uuuu.png" alt="august." />
        </div> */}




        <motion.div  initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="contact">
          <h1 className="city">Western Bicutan, Taguig City</h1>
          <h1 className="area">Metro Manila</h1>
          <h1 className="country">1630 Philippines</h1>
          <h1 className="number">+63 (920) 662 2462</h1>
        </motion.div>

        <div className="social">
          <motion.a
            href="https://www.facebook.com/johnpaulaugust.maldo"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.8, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fb"
          >
            <motion.img
              src="/facebook.png"
              alt="facebook logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>


          <motion.a
            href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.8, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fb"
          >
            <motion.img
              src="/linkedin.png" 
              alt="linkedin logo"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.a>
          {/* <a
            href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
