import React, { Component } from 'react';
import Modal from 'react-modal';
import './Form.css';

export default class Form extends Component {

  render() {
    // TODO: i don't know why need to fix 'max-height' manually on react
    const maxHeightFix = { maxHeight: window.innerHeight + 'px' };
    return (
      <Modal className="Form-modal" overlayClassName="Form-modal-overlay" isOpen={this.props.opened} {...this.props}>
        <div className="Form" style={maxHeightFix}>
          {this.props.children}
        </div>
      </Modal>
    );
  }

}
