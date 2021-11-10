import React  from 'react';
import { Component } from 'react';
import Skill from '../SkillCard/skill';
import './about.css'

class About extends React.Component {
    render() { 
        return <div className="about" id="about">
                <div class="container" >
                    <div className="aboutDetails">
                        <div className="detail">
                    <h3>About Me</h3>
                    <p>I'm an Aspiring Web Developer who enjoys writing Code. I have strong Technical Skills  an Academic Background in Computer Science Engineering. I'm interested in Front-End Web Development. I enjoy Developing a Web Design into a beautiful Web Site.</p>
                    </div>
                    </div>
                    <Skill></Skill>

                </div>
               
            </div>
        
    }
}
 
export default About;
