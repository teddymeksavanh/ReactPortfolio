// Services
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as THREE from 'three'

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whitepaper from './components/Whitepaper';
import Blockchain from './components/Blockchain';
import Device from './components/Device';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar {...this.props}/>
        <Route exact path="/" component={props => <Home/>}/>
        {/* <Route exact path="/whitepaper" component={props => <Whitepaper/>}/> */}
        <Route exact path="/team" component={props => <Team/>}/>
        <Route exact path="/device" component={props => <Device/>}/>
        <Route exact path="/blockchain" component={props => <Blockchain/>}/>
        <Route exact path="/contact" component={props => <Contact/>}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
