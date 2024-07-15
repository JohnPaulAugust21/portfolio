import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">
        <div className="logo">
          <img src="/uuuu.png" alt="august." />
        </div>

        <div className="contact">
          <h1 className="city">Western Bicutan, Taguig City</h1>

          <h1 className="area">Metro Manila</h1>

          <h1 className="country">1630 Philippines</h1>

          <h1 className="number">+63 (920) 662 2462</h1>
        </div>

        <div className="social">
          {" "}
          <a
            href="https://www.facebook.com/johnpaulaugust.maldo"
            target="_blank"
          >
            <img src="/facebook.png" alt="facebook logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-paul-august-maldo-2183ab187/"
            target="_blank"
          >
            <img src="/linkedin.png" alt="linkedin logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
