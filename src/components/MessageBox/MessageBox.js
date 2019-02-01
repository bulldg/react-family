import React, { Component } from 'react';
import './MessageBox.less';

export default class MessageBox extends Component {
  render() {
    return (
      <div className="modal" style={{display: this.props.isShow || 'none'}}>
        <div className="title">{this.props.title || '提示'}</div>
        <div className="content">{this.props.content || '内容'}</div>
        <div className="btn">
          <span onClick={this.cancel}>{this.props.cancelButtonText || '取消'}</span>
          <span className="comfirm" onClick={this.comfirm}>{this.props.confirmButtonText || '确认'}</span>
        </div>
      </div>
    )
  }
  constructor(props) {
    super(props)
    this.cancel = this.cancel.bind(this);
    this.comfirm = this.comfirm.bind(this);
  }
  cancel() {
    this.props.cancel();
  }
  comfirm() {
    this.props.comfirm();
  }
}