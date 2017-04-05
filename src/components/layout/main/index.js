import React from 'react';
import {Layout, Content, Sider} from 'react-cqtoolbox/lib/layout';
import {Menu, MenuItem} from 'react-cqtoolbox/lib/menu';
import Button from 'react-cqtoolbox/lib/button';
import components from './modules/components';
import Markdown from '../../markdown';
import Playground from './components/playground';
import theme from './theme.css';
import classnames from 'classnames';
import {Link} from 'react-router-dom';


class Main extends React.Component {
  state = {
    playground: false,
  }

  handlePlayGroundClick = (code) => {
    this.setState({ playground: !this.state.playground });
    this.refs.playground.loadCode(code);
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
    });

    const docs = this.resolveMarkdown();

    const exampleCode = components[this.props.match.params.component].examples[0];

    return (
      <Layout hasSider theme={theme} className={classes}>
        <Button
          raised
          primary
          className={theme['playground-button']}
          icon={state.playground ? 'close' : 'code-o'}
          label="在线代码"
          onClick={this.handlePlayGroundClick.bind(this, exampleCode)}
        />

        <Sider
          collapsible={false}
          defaultCollapsed={false}
          theme={theme}>
          <Menu>
            <MenuItem><Link to="/component/button">Button</Link></MenuItem>
            <MenuItem><Link to="/component/font_icon">FontIcon</Link></MenuItem>
            <MenuItem><Link to="/component/date_select">DateSelect</Link></MenuItem>
          </Menu>
        </Sider>
        <Content className={theme.document}>
          <Markdown markdown={docs} />
        </Content>
        <Content className={theme.playground}>
          <Playground ref="playground"/>
        </Content>
      </Layout>
    );
  }
}

export default Main;
