import React from "react";
import "../../App.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div id="branding">
          <h1>
            <span className="highlight">Clarusway </span> Web Design
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home" rel="noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" rel="noreferrer">
                About
              </a>
            </li>
            <li>
              <a href="#services" rel="noreferrer">
                Services
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
