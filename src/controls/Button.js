import React, { Component } from 'react';

export default class Button extends Component {

  render() {
    return (
      <button {...this.props}>
        <div className={this.props.className}>
          {this.props.children}
        </div>
      </button>
    );
  }

}
