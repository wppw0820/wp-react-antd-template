import React, { Component } from "react";
import { Icon, Drawer } from "antd";
import "./index.less";

export default class index extends Component {
  state = {
    tabListOpts: [
      { label: "tabSwiper", active: true, id: "1" },
      { label: "tabSwiper", active: false, id: "2" },
      { label: "tabSwiper", active: false, id: "3" },
      { label: "tabSwiper", active: false, id: "4" },
      { label: "tabSwiper", active: false, id: "5" },
      { label: "tabSwiper", active: false, id: "6" },
      { label: "tabSwiper", active: false, id: "7" },
      { label: "tabSwiper", active: false, id: "8" },
      { label: "tabSwiper", active: false, id: "9" },
      { label: "tabSwiper", active: false, id: "15" },
      { label: "tabSwiper", active: false, id: "115" },
      { label: "tabSwiper", active: false, id: "225" },
      { label: "tabSwiper", active: false, id: "2225" },
      { label: "tabSwiper", active: false, id: "222225" },
      { label: "tabSwiper", active: false, id: "22222225" },
      { label: "tabSwiper", active: false, id: "25" },
    ],
    subListOpts: [
      { label: "subtabSwiper", active: true, id: "subtabSwiper1" },
      { label: "subtabSwiper", active: false, id: "subtabSwiper2" },
    ],
    drawerVisible: false,
    drawerPlacement: "right",
  };
  handleTabItemClick = (item) => {
    console.log(item);
    this.activeTabClass(item);
    this.subTabChange(item);
  };
  // 导航条动态类切换
  activeTabClass(item) {
    const tabListOpts = [...this.state.tabListOpts];
    tabListOpts.forEach((tab) => {
      tab.active = false;
    });
    item.active = true;
    this.setState({ tabListOpts });
  }
  // 一级菜单变化二级菜单跟着变化
  subTabChange(item) {
    const subListOpts = [...this.state.subListOpts];
    subListOpts.forEach((subtab) => {
      subtab.active = false;
      subtab.label = item.label + item.id + "subItem";
    });
    subListOpts[0].active = true;
    this.setState({ subListOpts });
  }
  handleSubItemClick = (subitem) => {
    this.activeSubTabClass(subitem);
  };
  // 二级菜单动态类切换
  activeSubTabClass(subitem) {
    const subListOpts = [...this.state.subListOpts];
    subListOpts.forEach((subtab) => {
      subtab.active = false;
    });
    subitem.active = true;
    this.setState({ subListOpts });
  }
  handleIconClick = () => {
    this.setState({ drawerVisible: true });
  };
  onClose = () => {
    this.setState({ drawerVisible: false });
  };
  render() {
    return (
      <div className="app-container" id="tab-swiper-module">
        <div className="tabbar-area">
          <div className="swiper-bar">
            {this.state.tabListOpts.map((item) => {
              return (
                <div
                  className={`tab-item ${item.active ? "active" : null}`}
                  key={item.id}
                  onClick={this.handleTabItemClick.bind(null, item)}
                >
                  {item.label + item.id}
                </div>
              );
            })}
          </div>
          <div className="icon-show-all" onClick={this.handleIconClick}>
            <Icon type="unordered-list" />
          </div>
          <div className="sub-tab-list">
            {this.state.subListOpts.map((subitem) => {
              return (
                <div
                  className={`sub-tab-item ${subitem.active ? "active" : null}`}
                  key={subitem.id}
                  onClick={this.handleSubItemClick.bind(null, subitem)}
                >
                  {subitem.label}
                </div>
              );
            })}
          </div>
        </div>
        <Drawer
          title="请选择"
          placement={this.state.drawerPlacement}
          closable={false}
          onClose={this.onClose}
          visible={this.state.drawerVisible}
          className="drawer-in-tab-swiper"
        >
          {this.state.tabListOpts.map((tab) => {
            return (
              <p
                key={tab.id}
                title={tab.label + tab.id}
                onClick={this.handleTabItemClick.bind(null, tab)}
                className={`tab-item ${tab.active ? "active" : null}`}
              >
                {tab.label + tab.id}
              </p>
            );
          })}
        </Drawer>
      </div>
    );
  }
}
