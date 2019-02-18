/**
 *  厂商用户页面
 *  time: 2018-09-14 by qiuchenglei
 */

import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input,Button  } from 'antd';
import { Table_,Modal_,Buttons } from '../../../components';
import { Columns,DistributorManager, } from '../../../config';
import { accountTable, } from '../../../api';


// 标签组件
const TabPane = Tabs.TabPane;

/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class ManufacturerUserPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
        }
    }

    componentDidMount() {
        // 初始化获取表格数据
        let dataPromise = accountTable();
        if (dataPromise) {
            dataPromise.then(res => 
                this.setState({data:res.data,status:false},() => 
                this.setState({filter_data:this.state.data},() => 
                 this.props.dispatch({type: 'account/query',payload:{data:this.state.filter_data}})     
                 )
               )
           );
        } 
    }

    render() {
        const { account,dispatch } = this.props; // 获取状态
        return (
            <div style={styles.container}>   

                   <Modal_  visiable={account.modalVisible}/>

                   <Table_  
                      columns={DistributorManager.UserManager.ManufacturerUser} 
                      scrollX={2000}
                      pagination={{pageSize:7}} 
                     // dataSource={this.state.filter_data}
                       loading = {this.state.status}
                     />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const ManufacturerUserPage = connect(mapStateToProps)(ManufacturerUserPage_);

