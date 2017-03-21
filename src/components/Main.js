// require('normalize.css/normalize.css');
// require('styles/App.css');
import style from '../styles/style.css';
import React from 'react';
import Playground from './playground.js';
// let yeomanImage = require('../images/yeoman.png');
// <div className="index">
//   <img src={yeomanImage} alt="Yeoman Generator" />
//   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
// </div>
class AppComponent extends React.Component {
  render() {
    let className = style.root;
    className += ` ${style['with-playground']}`;
    return (
        <Playground ref="playground"></Playground>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
