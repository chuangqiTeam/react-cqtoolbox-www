import React from 'react';
import {Layout, Content, Sider} from 'react-cqtoolbox/lib/layout';
import Button from 'react-cqtoolbox/lib/button';
import components from './modules/components';
import Menu from './components/menu';
import Markdown from '../../markdown';
import Playground from './components/playground';
import Boundary from './components/boundary';
import theme from './theme.css';
import classnames from 'classnames';
import {viewportW} from '../../../utils/dom';


class Main extends React.Component {
  state = {
    playground: false,
    boundary: 0,
  }

  setMarkdownWidth = () => {
    const {boundary} = this.state;
    return boundary / viewportW() * 100 + '%';
  }

  setPlaygroundWidth = () => {
    const {boundary} = this.state;
    return (viewportW() - boundary) / viewportW() * 100 + '%';
  }

  handlePlayGroundClick = (code) => {
    this.setState({ playground: !this.state.playground });
    this.refs.playground.loadCode(code);
  }

  handleBoundaryChange = (boundary) => {
    this.setState({ boundary });
  }

  resolveMarkdown = () => {
    if (this.props.match.params.component) {
      return components[this.props.match.params.component].docs;
    } else {
      return 'react-cqtoolbox';
    }
  }


  render() {
    const state = this.state;

    const classes = classnames({
      [theme.withPlayground]: state.playground,
      [theme.noPlayground]: !state.playground,
    });

    const docs = this.resolveMarkdown();

    const exampleCode = components[this.props.match.params.component].examples[0];

    return (
      <Layout hasSider theme={theme} className={classes}>

        <Sider
          width={220}
          collapsible={false}
          defaultCollapsed={false}
          theme={theme}>
          <Menu />
        </Sider>

        <Content
          style={{width: this.setMarkdownWidth()}}
          className={theme.document}>
          <Button
            raised
            primary
            className={theme['playground-button']}
            icon={state.playground ? 'close' : 'code-o'}
            label="在线代码"
            onClick={this.handlePlayGroundClick.bind(this, exampleCode)}
          />
          <Markdown markdown={docs} />
        </Content>

        {state.playground && <Boundary onChange={this.handleBoundaryChange} />}

        <Content
          style={{width: this.setPlaygroundWidth()}}
          className={theme.playground}>
          <Playground ref="playground"/>
        </Content>

      </Layout>
    );
  }
}

export default Main;
