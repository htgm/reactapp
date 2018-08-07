import React, { Component } from 'react';
import Modal from 'react-modal';
import './Frame.css';

export default class Frame extends Component {

  render() {
    // TODO: i don't know why need to fix 'max-height' manually on react
    const maxHeightFix = { maxHeight: window.innerHeight + 'px' };
    return (
      <Modal className="Frame-modal" overlayClassName="Frame-modal-overlay" isOpen={this.props.opened} {...this.props}>
        <div className="Frame" style={maxHeightFix}>
          {this.props.children}
        </div>
      </Modal>
    );
  }

}
