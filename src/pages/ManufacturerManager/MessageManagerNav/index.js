/**
 *  消息记录
 *  time: 2018-09-14 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input,Button  } from 'antd';
import { Table_,Modal_,Buttons } from '../../../components';
import { Columns,DistributorManager } from '../../../config';
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

class MessageRecordPage_ extends React.Component {
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
        const btnArr = ['添加消息','修改消息','删除消息']

        return (
            <div style={styles.container}>   
            
                  <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>

                   <Modal_  visiable={account.modalVisible}/>

                   <Table_  
                      columns={DistributorManager.message_manager.mes_record} 
                      scrollX={500}
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

export const MessageRecordPages = connect(mapStateToProps)(MessageRecordPage_);

