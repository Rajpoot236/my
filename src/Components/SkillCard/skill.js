import React from 'react';
import { Component } from 'react';
import './skill.css'
class Skills extends React.Component {
  render() { 
    return <div>
          <div className="container">
      <h3 className="title">Languages / Libraries / Technologies</h3>
      <div className="skills">
        <div className="skill">
          <img alt="HTML" src="/images/html.svg" />
          <span>HTML</span>
        </div>

        <div className="skill">
          <img alt="CSS" src="/images/css.svg" />
          <span>CSS</span>
        </div>

        <div className="skill">
          <img alt="JavaScript" src="/images/js.svg" />
          <span>JavaScript</span>
        </div>

        <div className="skill">
          <img alt="REACT" src="/images/react.svg"/>
          <span>REACT</span>
        </div>

        <div className="skill">
          <img alt="Git" src="/images/git.svg" />
          <span>GitHub</span>
        </div>


        <div className="skill">
          <img alt="AWS" src="/images/aws.svg" />
          <span>AWS</span>
        </div>

       
      </div>
    </div>
    </div>
     
    
  }
}
 
export default Skills;