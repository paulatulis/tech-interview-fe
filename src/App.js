import React, { Component } from 'react';

import RoutesContainer from './containers/RoutesContainer';

import Footer from './components/Footer';
import Nav from './components/Nav';

// import Login from './views/Login';


import './App.css';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => console.log(res))
  }

  renderRoutesContainer = () => {
    return <RoutesContainer />
  }



  render () { 
    console.log(this.state)
    return (
      <div className="main-container">
        <Nav />
        <div>
        {this.renderRoutesContainer()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
