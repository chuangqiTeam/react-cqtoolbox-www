import React, {Component} from 'react';
import {Header} from 'react-cqtoolbox/lib/layout';
import {Menu, MenuItem} from 'react-cqtoolbox/lib/menu';

class CustomHeader extends Component {
  render() {

    return (
      <Header>
        <div className="logo">
          <img height="100%" src={require('../../image/logo.png')} alt=""/>
        </div>
        <Menu mode="horizontal">
          <MenuItem>安装</MenuItem>
          <MenuItem>组件</MenuItem>
          <MenuItem>Github</MenuItem>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
