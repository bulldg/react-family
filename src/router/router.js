import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import history from '../router/history';

import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page from 'bundle-loader?lazy&name=page!pages/Page/Page';
import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
import List from 'bundle-loader?lazy&name=List!pages/List/List';
import BeeMobile from 'bundle-loader?lazy&name=BeeMobile!pages/BeeMobile/BeeMobile';

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
);

const getRouter = () => (
  <Router history={history}>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/page">Page</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/user-info">UserInfo</Link></li>
        <li><Link to="/list">List</Link></li>
        <li><Link to="/bee-mobile">BeeMobile组件库</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)}/>
        <Route path="/page" component={createComponent(Page)}/>
        <Route path="/counter" component={createComponent(Counter)}/>
        <Route path="/user-info" component={createComponent(UserInfo)}/>
        <Route path="/list" component={createComponent(List)}/>
        <Route path="/bee-mobile" component={createComponent(BeeMobile)}/>
      </Switch>
    </div>
  </Router>
);

export default getRouter;