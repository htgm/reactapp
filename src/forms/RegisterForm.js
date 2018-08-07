import React, { Component } from 'react';
import Input from '../controls/Input';
import Captcha from '../controls/Captcha';
import Frame from '../controls/Frame';
import TitlePane from '../controls/TitlePane';
import ButtonPane from '../controls/ButtonPane';
import Container from '../controls/Container';
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
      <Frame {...this.props}>
        <TitlePane>Welcome</TitlePane>
        <Container>
        <div>
          <p>user id</p>
          <div><Input ref="userId" onChange={this.onUidChange}/></div>
        </div>
        <div>
          <p>password</p>
          <div><Input ref="password" type="password" onChange={this.onPwChange}/></div>
        </div>
        <div>
          <p>captcha</p>
          <div><Captcha ref="captcha" onChange={this.captchaAlertTest}/></div>
        </div>
        </Container>
        <ButtonPane>
          <button className="default">register</button>
          <button onClick={this.openmsgbox}>msgbox</button>
        </ButtonPane>
        <MessageBox ref="msgbox" ok="Ok" cancel="Cancel">QWERTY</MessageBox>
      </Frame>
    );
  }
}
