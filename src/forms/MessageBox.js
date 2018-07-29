import React,{ Component } from 'react';
import Modal from 'react-modal';

export default class MessageBox extends Component {

  state = {};
  opened = false;

  show(opts) {
    this.opened = true;
    this.setState(opts || {});
  }

  _close(handler) {
    if (handler) {
      (typeof handler === 'function' ? handler : handler.handle)();
    }
    this.opened = false;
    this.setState({});
  }

  _ok = () => {
    this._close(this.state.onOk);
  }

  _yes = () => {
    this._close(this.state.onYes);
  }

  _no = () => {
    this._close(this.state.onNo);
  }

  _cancel = () => {
    this._close(this.state.onCancel);
  }

  render() {
    const ok = this.state.onOk || this.props.ok;
    const yes = this.state.onYes || this.props.yes;
    const no = this.state.onNo || this.props.no;
    const cancel = this.state.onCancel || this.props.cancel;
    let buttons = [];
    if (ok || (!yes && !no && !cancel)) {
      if (cancel) buttons.push(<button key="cancel" onClick={this._cancel}>{this.props.cancel || "Cancel"}</button>);
      buttons.push(<button key="ok" onClick={this._ok}>{this.props.ok || "Ok"}</button>);
    }
    else {
      buttons.push(<button key="cancel" onClick={this._cancel}>{this.props.cancel || "Cancel"}</button>);
      buttons.push(<button key="no" onClick={this._no}>{this.props.no || "No"}</button>);
      buttons.push(<button key="yes" onClick={this._yes}>{this.props.yes || "Yes"}</button>);
    }
    return (
      <Modal {...this.props} isOpen={this.opened} onRequestClose={this._cancel}>
        {this.props.children}
        {this.state.message}
        <hr/>
        <div style={{ float: "right", display: "inline-block" }}>
          {buttons}
        </div>
      </Modal>
    );
  }

}
