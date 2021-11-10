import React from "react";
import { Component } from "react";
import "./portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <h2>Porfolio</h2>
        <div className="containers" id="main2">
          <div className="project">
            <img className="image" src="/images/3.png" alt="image"></img>
            <div className="details">
              <div className="title">html page</div>
              <p className="desc">BackTracking page Created using HTML,</p>
              <a
                className=" todo-link"
                href="https://rajpoot236.github.io/projects/"
                target="blank"
              >
                Live Demo
              </a>
            </div>
          </div>

          <div className="project">
            <img className="image" src="/images/todo.png" alt="image"></img>
            <div className="details">
              <div className="title">To Do JS</div>
              <p className="desc">Todo App Created using HTML, CSS JS</p>
              <a
                className=" todo-link"
                href="https://rajpoot236.github.io/todojs/"
                target="blank"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="project">
            <img className="image" src="/images/clock.png" alt="image"></img>
            <div className="details">
              <div className="title">clock JS</div>
              <p className="desc">A Clock App Created using HTML, CSS JS</p>
              <a
                className=" todo-link"
                href="https://rajpoot236.github.io/project4/"
                target="blank"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
