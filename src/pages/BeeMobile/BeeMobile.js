import React, { Component } from 'react';
import { Button, Swiper, TabsGroup, Tabs, Tab } from 'bee-mobile';
import './BeeMobile.less';
import { showLoading, showToast } from '../../utils/notify';

export default class BeeMobile extends Component {
  render() {
    return (
      <div>
        <div className="button">
          <Button theme="success">弹出加载框</Button>
        </div>
        <div>
          <Swiper autoplay="true" paginationClickable="true">
            <div className="box blue">Slide1</div>
            <div className="box red">Slide2</div>
            <div className="box yellow">Slide3</div>
            <div className="box green">Slide4</div>
          </Swiper>
        </div>
        <div>
          <TabsGroup>
            <Tabs>
              <Tab>Home</Tab>
              <Tab>Article</Tab>
              <Tab>Personal</Tab>
            </Tabs>
          </TabsGroup>
        </div>
      </div>
    )
  }
  componentDidMount() {
    showLoading();
    setTimeout(() => {
      showToast('请求成功');
    }, 3000);
  }
}