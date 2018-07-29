import React, { Component } from 'react';
import './Dialog.css';


export default class Dialog extends Component {

  render() {
    return (
      <div className={"Dialog " + this.props.className}>
      </div>
    );
  }

}
