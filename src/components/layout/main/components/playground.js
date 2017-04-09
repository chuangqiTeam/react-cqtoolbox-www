
import React from 'react';
import Editor from '../../../editor';
import Preview from '../../../preview';
import Boundary from '../components/boundary';
import codeText from '../modules/examples/example.txt';
import style from './playground.css';
import {viewportH} from '../../../../utils/dom';

class Playground extends React.Component {
  static propTypes = {
    className: React.PropTypes.string
  };

  state = {
    code: codeText,
    boundary: 0,
  }

  setEditortHeight = () => {
    const {boundary} = this.state;
    const containerHeight = viewportH() - 56;
    return boundary / containerHeight * 100 + '%';
  }

  setPreviewHeight = () => {
    const {boundary} = this.state;
    const containerHeight = viewportH() - 56;
    return (containerHeight - boundary) / containerHeight * 100 + '%';
  }

  handleCodeChange = (code) => {
    this.setState({ code });
  };

  loadCode (code) {
    this.refs.editor.setCode(code);
  }

  handleBoundaryChange = (boundary) => {
    this.setState({ boundary });
  }

  render () {
    return (
      <aside className={this.props.className}>
        <Editor
          ref="editor"
          style={{height: this.setEditortHeight()}}
          className={style.editor}
          codeText={this.state.code}
          onChange={this.handleCodeChange}
        />
        <Boundary
          type="horizontal"
          onChange={this.handleBoundaryChange} />
        <Preview
          style={{height: this.setPreviewHeight()}}
          className={style.preview}
          code={this.state.code}
        />
      </aside>
    );
  }
}

export default Playground;
