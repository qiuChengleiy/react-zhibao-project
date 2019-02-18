/**
 * 经销商账号管理页
 * time: 2018-11-01 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input,Switch  } from 'antd';
import { Buttons,Table_,Modal_ } from '../../../components';
import { accountTable, } from '../../../api';
import { userFilter } from '../../../utils/filter';

// 标签组件
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const Search = Input.Search;

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
      title: '真实姓名',
      dataIndex: 'name',
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
        title: '星级',
        dataIndex: 'level',
        width:100,
        align: 'center',
      },
    {
      title: '创建日期',
      dataIndex: 'date',
      width:200,
      align: 'center',
    },
    {
      title: '使用状态',
      dataIndex: 'status',
      width:200,
      align: 'center',
      render: (status,tags) => (
          <Switch 
            checked={status}
            onChange={() => { /*onChange(status,tags);window.location.reload(true);*/} } 
          />
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

class DistributorUserPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
        }
    }

    filter_(value) {
      //  console.log(value,this.props.account.val)
        if(value) {
            let data = userFilter(this.props.account.val,this.state.data,value);
          //  console.log(data);
            this.setState({filter_data:data},() =>
              this.props.dispatch({type: 'account/query',payload:{data:this.state.filter_data}})     
        );
        }else {
         //   console.log(this.state.data)
            this.setState({filter_data:this.state.data},() => 
              this.props.dispatch({type: 'account/query',payload:{data:this.state.filter_data}})     
        );
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
                <Tabs onChange={callback} type="card">
                    <TabPane tab={`一星级经销商(${account.count})`} key="1">
                     {/* btn */}
                        <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                     {/* 模态框 */}
                        <Modal_  visiable={account.modalVisible}/>

                     {/* table */}
                         <Table_  
                            columns={columns_} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    </TabPane>

                    <TabPane tab={`二星级经销商(${account.count})`} key="2">
                         {/* btn */}
                         <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                      {/* 模态框 */}
                        <Modal_  visiable={account.modalVisible}/>

                     {/* table */}
                         <Table_  
                            columns={columns_} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    
                    </TabPane>
                    
                    <TabPane tab={`三星经级销商(${account.count})`} key="3">
                        {/* btn */}
                        <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                        {/* 模态框 */}
                            <Modal_  visiable={account.modalVisible}/>

                        {/* table */}
                            <Table_  
                                columns={columns_} 
                                scrollX={2500}
                                pagination={{pageSize:7}} 
                                dataSource={this.state.filter_data}
                                loading = {this.state.status}
                            />
                        
                    </TabPane>
                </Tabs>
               
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const DistributorUserPage = connect(mapStateToProps)(DistributorUserPage_);

