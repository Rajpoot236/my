import React from 'react';
import { Component } from 'react';
import Form from '../form/form';
import './contact.css'

class Contact extends React.Component {
    render() { 
        return <div>
              <div className="contact" id="contact">
      <h2>Contact Me</h2>
      <div className="contain">
        <div className="deta">
          <h4 className="tit">Let's Connect</h4>
          <div className="connect">
            <p>
            <i className="fas fa-at "></i>
              <span>shubhamchauhan7420@gmail.com</span> 
            </p>

            <p>
            <i className="fab fa-whatsapp"></i>
              <span>82196-13236</span>
            </p>
          </div>
        </div>
        <Form></Form> 
      </div>
      
    </div>
      </div>;
    }
}
 
export default Contact;