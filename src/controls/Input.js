import React, { Component } from 'react';
import './Input.css';


export default class Input extends Component {

  state = { };

  onChange = e => {
    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  render() {
    let xclass = this.props.className, alertbox = <div ref="alert" className="alert"/>;
    let a = this.state.alert;
    if (a && a !== 'none' && this.state.alertText) {
//      if (a === 'err' || a === 'error') {
//        a = 'err';
//        xclass += " err-back";
//      }
      alertbox = <div ref="alert" className={`alert show ${a}-back ${a}-text`}>{this.state.alertText}</div>;
    }
    return (
      <div className="Input">
        <input ref="input" {...this.props} className={xclass} onChange={this.onChange}/>
        {alertbox}
      </div>
    )
  }

}
