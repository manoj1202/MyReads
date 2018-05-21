import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Currently from './currently.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Currently />
      </div>
    );
  }
}

export default App;
