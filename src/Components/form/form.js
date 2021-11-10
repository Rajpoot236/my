import React from 'react';
import { Component } from 'react';
import './form.css'

class Form extends React.Component {
    render() { 
        return <div>
            <form className="form">
      <h4 className="title">Send me a Message</h4>
      <label>
        Name<span className="required">*</span>
        <input type="text" required />
      </label>

      <label>
        Phone Number<span className="required">*</span>
        <input type="text" required />
      </label>

      <label>
        Email<span className="required">*</span>
        <input type="text" required />
      </label>

      <label>
        Message<span className="required">*</span>
        <textarea required></textarea>
      </label>

      <button type="submit" color="yellow">
        Send Message
      </button>
    </form>
        </div>;
    }
}
 
export default Form;