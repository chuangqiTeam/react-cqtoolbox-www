import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import theme from './boundary.css';
import classnames from 'classnames';
import events from '../../../../utils/event';

const getOffsetParent = (dom) => {
  return ReactDOM.findDOMNode(dom).offsetParent;
}

const getOffsetParentRect = (dom) => {
  return getOffsetParent(dom).getBoundingClientRect();
};

const viewportW = (dom) => {
  const rect = getOffsetParentRect(dom);
  return rect.width;
};

const viewportH = (dom) => {
  const rect = getOffsetParentRect(dom);
  return rect.height;
}

class Boundary extends React.Component {

  static propTypes = {
    type: PropTypes.oneOf(['horizontal', 'vertical']),
    onChange: PropTypes.func,
  }

  static defaultProps = {
    type: 'vertical',
  }

  state = {
    left: 0,
    top: 0,
  }

  componentDidMount() {
    if (this.isHorizontal()) {
      this.initTop();
      window.addEventListener('resize', this.initTop);
    } else {
      this.initLeft();
      window.addEventListener('resize', this.initLeft);
    }
  }

  componentWillUnmount(nextProps, nextState) {
    if (this.isHorizontal()) {
      window.removeEventListener('resize', this.initTop);
    } else {
      window.removeEventListener('resize', this.initLeft);
    }
  }

  initLeft = () => {
    const left = viewportW(this) / 2;
    this.setState({left});

    if (this.props.onChange) {
      this.props.onChange(left);
    }
  }

  initTop = () => {
    const top = viewportH(this) / 2;
    this.setState({top});

    if (this.props.onChange) {
      this.props.onChange(top);
    }
  }

  isHorizontal = () => {
    return this.props.type === 'horizontal';
  }

  handleMouseDown = (event) => {
    if (this.mouseHandler)
      return;

    this.mouseHandler = true;

    events.addEventsToDocument({
      mousemove: this.handleMouseMove,
      mouseup: this.handleMouseUp,
    });
  }

  handleMouseMove = (event) => {
    if (this.mouseHandler) {
      const offset = events.getMousePosition(event);

      if (this.isHorizontal()) {
        const top = offset.y - getOffsetParentRect(this).top;
        this.setState({ top });
        if (this.props.onChange) {
          this.props.onChange(top);
        }
      } else {
        const left = offset.x -  getOffsetParentRect(this).left;
        this.setState({ left });
        if (this.props.onChange) {
          this.props.onChange(left);
        }
      }
    }
  }

  handleMouseUp = (event) => {
    events.removeEventsFromDocument({
      mousemove: this.handleMouseMove,
      mouseup: this.handleMouseUp,
    });

    this.mouseHandler = null;
  }

  render () {
    const {
      type,
    } = this.props;

    const classes = classnames(theme.boundary, theme[type]);

    const style = {};

    if (this.isHorizontal()) {
      style.top = this.state.top;
    } else {
      style.left = this.state.left;
    }

    return (
      <div
        style={style}
        onMouseDown={this.handleMouseDown}
        className={classes} />
    );
  }
}

export default Boundary;
