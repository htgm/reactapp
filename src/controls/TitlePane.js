import React, { Component } from 'react';
import './TitlePane.css';


export default class TitlePane extends Component {

  render() {
    return (
      <div className="TitlePane">
        {this.props.children}
      </div>
    );
  }

}
