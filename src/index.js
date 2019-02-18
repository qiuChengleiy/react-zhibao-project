/**
 * 项目入口
 * time: 2018-09-06 by qiuchenglei
 */

import dva from 'dva';
import createLoading from 'dva-loading';

// UI样式
import './index.css';
import 'antd/dist/antd.css';

// 初始化应用
const app = dva();

// 应用配置
// app.use({});

// 应用状态
app.model(require('./models/account').default);

// 路由管理
app.router(require('./router').default);

//dva-loading
app.use(createLoading());

// 应用启动
app.start('#root');
