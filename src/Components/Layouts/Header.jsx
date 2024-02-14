import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import "./Header.scss";


function Header() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="Header">
    <div className="header-logo">
      <ScrollLink  to="homepage"
              smooth={true}
              duration={500}
              onClick={scrollToTop}>
        <img src="./taskbuddy-logo.png" alt="Logo" />
      </ScrollLink>
    </div>
    <div className="navigation">
    <header>
      <nav>
        <ul>
          <li>
            <ScrollLink
              to="homepage"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="aboutpage"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contactpage"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="helppage"
              smooth={true}
              duration={500}
              onClick={scrollToTop}
            >
              Help
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  </div>
  );
}

export default Header;
