/**
 * 路由管理：
 * time: 2018-09-07 by qiuchenglei
 */

import React from 'react';
import { Router, Route, Switch ,IndexRoute } from 'dva/router';
import IndexPage from './pages/IndexPage';
import { Login } from './components/login.component';

// 菜单导航
class Nav extends React.Component {
    constructor(...args) {
      super(...args);
    }

    render() {
      return (
        <div>
          {console.log(this.props.match.params.id)}
          <IndexPage parm={{id:this.props.match.params.id,prop:this.props.history }}/>
        </div>
      )
    }
}


// 首页
class IndexPages extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div>
        <Login visiable={true} parm={{id:'',prop:this.props.history }}/>
      </div>
    )
  }
}

// 路由配置
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPages} />
        <Route path="/nav/:id" component={Nav} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
