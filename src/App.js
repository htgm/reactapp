import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import RegisterForm from './forms/RegisterForm';
import BigForm from './forms/BigForm';
import './controls/default.css'
//import './myapp.css'

Modal.setAppElement('#root');

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RegisterForm/>
        <BigForm opened/>
      </div>
    );
  }
}

export default App;
