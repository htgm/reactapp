import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from 'react-modal';
import RegisterForm from './forms/RegisterForm';
import Form from './controls/Form'
import './controls/default.css'
import './myapp.css'

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
        <Form isOpen={true}>
          <RegisterForm/>
        </Form>
      </div>
    );
  }
}

export default App;
