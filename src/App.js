import logo from './logo.svg';

import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home';
import About from './Components/About/about';
import Portfolio from './Components/Portfolio/portfolio';
import Resume from './Components/Resume/resume';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';


class App extends React.Component {
  render() { 

    return <div>
      <Navbar></Navbar>
      <Home></Home>
      <div className="raper">
      <About></About>
      <br></br>
      <Portfolio></Portfolio>
      <Resume></Resume>
      <Contact></Contact>
      </div>
      <Footer></Footer>
      
    </div>;
  }
}
 
export default App;

