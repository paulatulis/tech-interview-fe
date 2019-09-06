import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './components/Landing';
import Footer from './components/Footer';
import Nav from './components/Nav';


import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => console.log(res))
  }



  render () { 
    console.log(this.state)
    return (
      <div className="main-container">
        hello
        <Nav/>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
