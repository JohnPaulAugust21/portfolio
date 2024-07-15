import React from "react";
import "./Navbar.scss";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Link } from "react-scroll";


function Navbar() {
  return (
    <nav>
    <div className="logo">
      <img src="/image (2) (1).png" alt="august." />
    </div>

    <ul>
      <li>
        <Link
          className="nav-link"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          profile
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          services
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          projects
        </Link>
      </li>
      <li>
        <Link
          className="nav-link"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          contact
        </Link>
      </li>
    </ul>
    <div>
      <MenuRoundedIcon className="menuIcon" />
    </div>
  </nav>
  );
}

export default Navbar;
