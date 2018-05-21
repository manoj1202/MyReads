import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Currently from './currently.js'
import WantToRead from './want.js'

class App extends Component {
 
  render() {
    return (
      <div >
        <Header />
        <Currently  />
        <WantToRead  />
      </div>
    );
  }
}

export default App;
