import { Component } from "react";
import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Shubham chauhan</h1>
          <nav class="navigation">
            <ul className="navList">
              <li>
                <a href="#main" className="navLinks">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="navLinks">
                  About
                </a>
              </li>
              <li>
                <a href="#main2" className="navLinks">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#main3" className="navLinks">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" className="navLinks">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
