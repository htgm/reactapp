import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Captcha.css';
import Input from './Input';

function genkey() {
  return Math.floor( Math.random() * 10000000 );
}

export default class Captcha extends Component {

  state = { key: genkey() };

  reload = e => {
    this.setState({ key: genkey() });
    ReactDOM.findDOMNode(this.refs.textbox.refs.input).focus();
  };

  setState(s) {
    let s1 = {}, s2 = {};
    for (let p in s) {
      (p === 'key' ? s1 : s2)[p] = s[p];
    }
    this.refs.textbox.setState(s2);
    super.setState(s1);
  }

  render() {
    return (
      <div className="Captcha-div">
        <Input ref="textbox" {...this.props} style={{ width: "150px" }}/>
        <img className="Captcha" src={"captcha?key=" + this.state.key} onClick={this.reload} alt="CAPTCHA"/>
      </div>
    );
  }

}
