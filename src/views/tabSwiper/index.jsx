import React, { Component } from "react";
import TabSwiperUI from "./tabSwiperUI";

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
    // 点击抽屉某一项，页面对应的tab跟随切换到视野内scrollIntoView()
    document.getElementById(item.id).scrollIntoView({ behavior: "smooth" });
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
      <TabSwiperUI
        tabListOpts={this.state.tabListOpts}
        subListOpts={this.state.subListOpts}
        drawerVisible={this.state.drawerVisible}
        drawerPlacement={this.state.drawerPlacement}
        handleTabItemClick={this.handleTabItemClick}
        handleIconClick={this.handleIconClick}
        handleSubItemClick={this.handleSubItemClick}
        onClose={this.onClose}
      />
    );
  }
}
