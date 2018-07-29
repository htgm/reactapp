import React, { Component } from 'react';
import Input from '../controls/Input';
import Captcha from '../controls/Captcha';
import './Form.css';
import MessageBox from './MessageBox';

export default class RegisterForm extends Component {

  componentDidMount() {
  }

  onUidChange = e => {
    if (e.target.value) {
      if (/^[a-zA-Z\d_]{4,32}$/.test(e.target.value)) {
        this.refs.userId.setState({ alert: '' });
      }
      else {
        this.refs.userId.setState({ alert: 'err', alertText: '4+ numerical alphabetical chars are allowed' });
      }
    }
    else {
      this.refs.userId.setState({ alert: '' });
    }
  };

  onPwChange = e => {
    this.refs.password.setState({ alert: 'info', alertText: e.target.value });
  };

  captchaAlertTest = e => {
    this.refs.captcha.setState({ alert: 'info', alertText: e.target.value })
  }

  openmsgbox = () => {
    this.refs.msgbox.show({
      onOk: () => {
      }
    });
  }

  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <p>user id</p>
        <div><Input ref="userId" className="myinput" onChange={this.onUidChange}/></div>
        <p>password</p>
        <div><Input ref="password" type="password" onChange={this.onPwChange}/></div>
        <p>captcha</p>
        <div><Captcha ref="captcha" onChange={this.captchaAlertTest}/></div>
        <hr/>
        <button>register</button>
        <button onClick={this.openmsgbox}>msgbox</button>
        <MessageBox ref="msgbox" ok="Ok" cancel="Cancel">QWERTY</MessageBox>
      </div>
    );
  }
}
