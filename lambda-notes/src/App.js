import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import MainBody from './components/MainBody.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <MainBody />
      </div>
    );
  }
}

export default App; 