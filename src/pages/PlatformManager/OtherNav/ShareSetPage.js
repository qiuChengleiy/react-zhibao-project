/**
 * 分享次数管理页
 * time: 2018-09-10 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Input,Button  } from 'antd';
import { Modal_,Buttons } from '../../../components';
import { Columns } from '../../../config';
import { accountTable, } from '../../../api';


/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class ShareSetPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = { 
        }
    }

    componentDidMount() {
       
    }

    render() {
        const { account,dispatch } = this.props; // 获取状态
        const btnArr = ['修改完成',]
        const style = {marginBottom:10,marginTop:10};

        return (
            <div style={styles.container}>  
               <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
               <div style={style}>分享间隔: &nbsp;  
                  <Input placeholder="7" size="small" style={{width:100}}/>
                  &nbsp;天 一天只能分享一次
               </div>   
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const ShareSetPage = connect(mapStateToProps)(ShareSetPage_);

