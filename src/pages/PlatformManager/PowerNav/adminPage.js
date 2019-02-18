/**
 * 管理员设置页
 * time: 2018-09-10 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input  } from 'antd';
import { Buttons,Table_,Modal_ } from '../../../components';
import { Columns } from '../../../config';
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

class AdminPage_ extends React.Component {
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
        const btnArr = ['添加账号','修改账号','删除账号']

        return (
            <div style={styles.container}>   

                     {/* btn */}
                        <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>

                     {/* 模态框 */}
                        <Modal_  visiable={account.modalVisible}/>

                     {/* table */}
                         <Table_  
                            columns={Columns.power.admin} 
                            scrollX={500}
                            pagination={{pageSize:7}} 
                        //    dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const AdminPage = connect(mapStateToProps)(AdminPage_);

