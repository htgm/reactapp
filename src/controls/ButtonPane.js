import React, { Component } from 'react';
import './ButtonPane.css';


export default class ButtonPane extends Component {

  render() {
    return (
      <div className="ButtonPane">
        <div style={{ display: 'inline-block' }}>
          {this.props.children}
        </div>
      </div>
    );
  }

}
