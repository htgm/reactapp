import React, { Component } from 'react';
import Modal from 'react-modal';
import './Form.css';

export default class Form extends Component {

  render() {
    return (
      <Modal className="form-frame" overlayClassName="modal-overlay" {...this.props}>
        {this.props.children}
      </Modal>
    );
  }

}
