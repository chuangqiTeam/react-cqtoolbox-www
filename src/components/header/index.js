import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'react-cqtoolbox/lib/layout';
import {Menu, MenuItem} from 'react-cqtoolbox/lib/menu';
import theme from './theme.css';

class CustomHeader extends Component {
  render() {

    return (
      <Header theme={theme}>
        <div className="logo">
          <a href="http://www.cqaso.com">
            <img height="100%" src={require('../../image/logo.png')} alt=""/>
          </a>
        </div>
        <Menu mode="horizontal">
          <MenuItem><Link to="/">安装</Link></MenuItem>
          <MenuItem><Link to="/component/button">组件</Link></MenuItem>
          <MenuItem><a href="https://github.com/chuangqiTeam/react-cqtoolbox">Github</a></MenuItem>
        </Menu>
      </Header>
    );
  }
}

export default CustomHeader;
