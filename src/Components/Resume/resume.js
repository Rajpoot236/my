import React  from 'react';
import { Component } from 'react';
import './resume.css'

class Resume extends React.Component {
    render() { 
        return <div className="resume" id="main3">
            <h2>Resume</h2>

      <div className="main">
        <div className="data">
        <div className="photo">
        <img src="shubhamChauhan.jpg" />
        </div>
          <div className="section">
            
            
            <h3>Education</h3>
            <div className="educations">
              <div className="education">
                <h4 className="institute">APG Shimla University</h4>
                <h5 className="degree">B.Tech. Computer Science Engineering (CT & IS)</h5>
                <p className="desc">
                  <strong>Attended:</strong> <em>2017-2021</em>
                  <br />
                  <strong>CGPA:</strong> <em>7.45</em>
                </p>
              </div>

              <div className="education">
                <h4 className="institute">Govt.Boys.Sen.Sec.School Theog</h4>
                <h5 className="degree">XII (Science)</h5>
                <p className="desc">
                  <strong>Pass-Out:</strong> <em>2017</em>
                  <br />
                  <strong>Subjects:</strong> <em>Phy Ed, Mathematics, English, Physics, Chemistry</em>
                </p>
              </div>

              <div className="education">
                <h4 className="institute">Govt.Sen.Sec.School Pulbahal</h4>
                <h5 className="degree">X</h5>
                <p className="desc">
                  <strong>Pass-Out:</strong> <em>2015</em>
                  <br />
                  <strong>Subjects:</strong> <em>Drawing, Mathematics, English, Science, Hindi, S.S.T.</em>
                </p>
              </div>
            </div>
          
      
        
      

        </div>
        </div>

        
      </div>
    </div>;
        
    }
}
 
export default Resume;