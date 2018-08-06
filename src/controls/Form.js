import React, { Component } from 'react';
import Modal from 'react-modal';
import './Form.css';

export default class Form extends Component {

  render() {
    return (
      <Modal className="Form-modal" overlayClassName="Form-modal-overlay" {...this.props}>
        <div className="Form">
          {this.props.children}
        </div>
      </Modal>
    );
  }

}
