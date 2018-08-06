import React, { Component } from 'react';
import Modal from 'react-modal';
import './Form.css';

export default class Form extends Component {

  state = {};

  open() {
    this.setState({ opened: true });
  }

  render() {
    return (
      <Modal className="Form-modal" overlayClassName="Form-modal-overlay" isOpen={this.state.opened || this.props.opened} {...this.props}>
        <div className="Form">
          {this.props.children}
        </div>
      </Modal>
    );
  }

}
