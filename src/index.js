import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/layout/main';
import {Layout} from 'react-cqtoolbox/lib/layout';
import Header from './components/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <Layout>
      <Header/>
      <Route path="/component/:component" component={Main} />
    </Layout>
  </Router>
), document.getElementById('root'));
