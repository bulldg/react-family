import React, { Component } from 'react';
import './Page.less';
import image from '../../static/images/logo.jpg'

const el = 
<div className="page-box">
  <p>this is page..............</p>
  <p className="txt">测试less是否有效</p>
  <img src={image}/>
</div>


export default class Page extends Component {
  render() {
    return (
      el
    )
  }
  componentDidMount() {
    console.log(this.props.location);
  }
}