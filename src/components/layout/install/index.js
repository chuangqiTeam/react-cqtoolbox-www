import React from 'react';
import Markdown from '../../markdown';
import installMD from 'react-cqtoolbox/README.md';
import theme from './theme.css';

class Install extends React.Component {
  render () {
    return (
      <div className={theme.install}>
        <Markdown markdown={installMD} />
      </div>
    );
  }
}

export default Install;
