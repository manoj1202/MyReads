import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header.js';
import Currently from './currently.js'
import WantToRead from './want.js'
import Read from './read.js'
import Search from './navbutton.js'

class App extends Component {
 
  render() {
    return (
      <div >
        <Header />
        <Currently  />
        <WantToRead  />
        <Read /><br/><br/><br/>
        <Search /><br/><br/>
      </div>
    );
  }
}

export default App;
