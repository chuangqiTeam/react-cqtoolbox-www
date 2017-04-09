import React from 'react';
import CodeMirror from 'codemirror';
import classnames from 'classnames';
import style from './theme.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript.js';
import './one-dark.css';

class Editor extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    codeText: React.PropTypes.string,
    lineNumbers: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    readOnly: React.PropTypes.bool,
    tabSize: React.PropTypes.number,
    theme: React.PropTypes.string
  };

  static defaultProps = {
    className: '',
    lineNumbers: false,
    readOnly: false,
    tabSize: 2,
    theme: 'one-dark'
  };

  componentDidMount () {
    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'javascript',
      lineNumbers: this.props.lineNumbers,
      smartIndent: false,
      tabSize: this.props.tabSize,
      matchBrackets: true,
      theme: this.props.theme,
      readOnly: this.props.readOnly
    });

    this.editor.on('change', this.handleChange);
  }

  componentDidUpdate () {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  }

  handleChange = () => {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  };

  setCode (code) {
    this.editor.getDoc().setValue(code);
    this.handleChange();
  }

  render () {
    const {
      className,
      onChange,// eslint-disable-line
      codeText,
      lineNumbers,// eslint-disable-line
      tabSize,// eslint-disable-line
      theme,// eslint-disable-line
      ...other,
    } = this.props;

    const classes = classnames(style.editor, className);

    return (
      <div className={classes} {...other}>
        <textarea ref="editor" defaultValue={codeText} />
      </div>
    );
  }
}

export default Editor;
