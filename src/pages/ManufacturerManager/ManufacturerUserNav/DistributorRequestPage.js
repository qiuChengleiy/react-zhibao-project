/**
 *  经销商请求页面
 *  time: 2018-09-14 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input,Button  } from 'antd';
import { Table_,Modal_,Buttons } from '../../../components';
import { accountTable, } from '../../../api';


// 标签组件
const TabPane = Tabs.TabPane;

// 表格
const columns_ = [
    {
      title: '账号',
      dataIndex: 'account',
      width:200,
      align: 'center',
    },{
        title: '手机号',
        dataIndex: 'phone',
        width:200,
        align: 'center',
      },{
      title: '角色',
      dataIndex: 'role',
      width:200,
      align: 'center',
    },
    {
      title: '申请时间',
      dataIndex: 'apply_time',
      width:100,
      align: 'center',
    },
    {
        title: '上传资质',
        dataIndex: 'qualifications',
        width:200,
        align: 'center',
        render: (url) => (
            <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
          ),
      },
      {
        title: '定位位置',
        dataIndex: 'location',
        width:200,
        align: 'center',
      },
    {
      title: '操作',
      dataIndex: 'status',
      width:200,
      align: 'center',
      render: (status,tags) => (
        <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
          <h4 style={{color:'#ffffff'}}>同意绑定</h4>
        </div>
      ),
    },
  ];

/**
 * 
 * @param {Number} key 标签类别
 */

function callback(key) {
  console.log(key);
}

class DistributorRequestPage_ extends React.Component {
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
        const btnArr = ['删除请求']

        return (
            <div style={styles.container}>   
            
                  <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>

                   <Modal_  visiable={account.modalVisible}/>

                   <Table_  
                      columns={columns_} 
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

export const DistributorRequestPage = connect(mapStateToProps)(DistributorRequestPage_);



