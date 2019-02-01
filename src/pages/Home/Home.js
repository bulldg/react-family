import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import history from '../../router/history';
import './Home.less';
import MessageBox from '../../components/MessageBox/MessageBox';
import { getIndex } from '../../service';

export default class Home extends Component {
  render() {
    return (
      <div className="txt">this is home<br/>当前计数：{this.state.count}<br/>
        <Link to={{pathname:"/page", query:{name: "我是参数", id: 0}}}>page</Link>
        <button onClick={this.nav}>路由kjshdfkjhfkshkhkh跳转page</button>  
        <button onClick={() => this.handleClick()}>自增</button>
        <button onClick={() => this.showMessageBox()}>弹框出现</button>
        <MessageBox cancel={this.cancel} comfirm={this.comfirm} content={this.state.content} isShow={this.state.isShow}></MessageBox>
      </div>
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
    };
    this.cancel = this.cancel.bind(this);
    this.comfirm = this.comfirm.bind(this);
  }
  componentWillMount() {
    this.setState({
      count: 1000000000000,
    });
    getIndex({}).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }
  componentDidMount() {
    console.log(2222);
  }
  componentWillUnmount() {
    console.log(3333);
  }
  nav() {
    history.push({ pathname: '/page', query: { name: '我是参数' } });
  }
  handleClick() {
    this.setState({
      count: ++this.state.count,
    });
  }
  showMessageBox() {
    this.setState(() => {
      return { 
        isShow: 'block',
      };
    });
  }
  hideMessageBox() {
    this.setState(() => {
      return { 
        isShow: 'none',
      };
    });
  }
  cancel() {
    console.log('取消');
    this.hideMessageBox();
  }
  comfirm() {
    console.log('确认');
    this.hideMessageBox();
  }
}