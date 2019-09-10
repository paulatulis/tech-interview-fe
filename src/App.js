import React, { Component } from 'react';
import RoutesContainer from './containers/RoutesContainer';
import Footer from './components/Footer';



import './App.css';

class App extends Component {

  render () { 
    return (
      <div>
        <RoutesContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
