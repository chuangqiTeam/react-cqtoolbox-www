import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'react-cqtoolbox/lib/layout';
import {Menu, MenuItem} from 'react-cqtoolbox/lib/menu';

class CustomHeader extends Component {
  render() {

    return (
      <Header>
        <div className="logo">
          <a href="http://www.cqaso.com">
            <img height="100%" src={require('../../image/logo.png')} alt=""/>
          </a>
        </div>
        <Menu mode="horizontal">
          <MenuItem>安装</MenuItem>
          <MenuItem><Link to="/component/button">组件</Link></MenuItem>
          <MenuItem><a href="https://github.com/chuangqiTeam/react-cqtoolbox">Github</a></MenuItem>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
