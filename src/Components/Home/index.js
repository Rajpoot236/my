import React from "react";
import { Component } from "react";
import "./index.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Container" id="main">
          <img className="bg" src="/images/1.svg" />

          <div className="detail">
            <h2>
              Hi , I am<strong className="name">Shubham Chauhan</strong>
              <p>A front-End Developer</p>
            </h2>

            <div className="hire">
              <span>Get ready to turn ideas into reality.</span>
            </div>

            <div className="btnGroup">
              <a className="hireMe" href="#contact">
                Hire Me
              </a>

              <a className="get" href="#main3">
                Get Resume
              </a>
            </div>
          </div>
          <div className="images">
            <img src="shubhamChauhan.jpg" alt="Shubham Chauhan" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
