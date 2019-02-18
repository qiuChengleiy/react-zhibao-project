/**
 * 账号管理页
 * time: 2018-09-07 by qiuchenglei
 */
import React from 'react';
import styles from './account.css.js';
import { Tabs,Select,Input  } from 'antd';
import { Buttons,Table_,Modal_ } from '../../../components';
import { Columns } from '../../../config';
import { accountTable, } from '../../../api';
import { userFilter } from '../../../utils/filter';

// 标签组件
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const Search = Input.Search;

/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class AccountManagerPage extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
            count:111,
            modalVisible: false,
        }
    }

    filter_(value) {
      //  console.log(value,this.props.account.val)
        if(value) {
            let data = userFilter(this.props.account.val,this.state.data,value);
          //  console.log(data);
            this.setState({filter_data:data},() =>
              {}     
        );
        }else {
         //   console.log(this.state.data)
            this.setState({filter_data:this.state.data},() => 
              {}   
        );
        }
    }

    onChange(val) {

    }

    componentDidMount() {
        // 初始化获取表格数据
        let dataPromise = accountTable();
        if (dataPromise) {
            dataPromise.then(res => 
                this.setState({data:res.data,status:false},() => 
                this.setState({filter_data:this.state.data},() => 
                 {}    
                 )
               )
           );
        } 
    }

    render() {
        const btnArr = ['添加账号','修改账号','删除账号']
       
        return (
            <div style={styles.container}>
                <Tabs onChange={callback} type="card">
                    <TabPane tab={`厂商用户管理(${this.state.count})`} key="1">
                     {/* btn */}
                        <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                     {/* 模态框 */}
                        <Modal_  visiable={this.state.modalVisible}/>

                     {/* 筛选   */}
                         <Select defaultValue="0" size="small" style={{ width: 120,height:30,margin:'10px 10px 10px 0'}} onChange={val => this.onChange(val) }>
                             <Option value="0">厂商账号</Option>
                             <Option value="1">真实姓名</Option>
                             <Option value="2">绑定手机号</Option>
                         </Select>
                  
                          <Search
                            placeholder="请输入厂商账号/真实姓名/绑定手机账号"
                            enterButton="搜索"
                            size="small"
                            onSearch={value => this.filter_(value)}
                            style={{position: 'absolute',width:'40%',margin:'10px 10px 10px 0'}}
                            />

                     {/* table */}
                         <Table_  
                            columns={Columns.account.manufacturer} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    </TabPane>

                    <TabPane tab={`经销商用户管理(${this.state.count})`} key="2">
                         {/* btn */}
                         <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                      {/* 模态框 */}
                        <Modal_  visiable={this.state.modalVisible}/>

                     {/* 筛选   */}
                         <Select defaultValue="0" size="small" style={{ width: 120,height:30,margin:'10px 10px 10px 0'}} onChange={val => this.onChange(val) }>
                             <Option value="0">厂商账号</Option>
                             <Option value="1">真实姓名</Option>
                             <Option value="2">绑定手机号</Option>
                         </Select>
                  
                          <Search
                            placeholder="请输入厂商账号/真实姓名/绑定手机账号"
                            enterButton="搜索"
                            size="small"
                            onSearch={value => this.filter_(value)}
                            style={{position: 'absolute',width:'40%',margin:'10px 10px 10px 0'}}
                            />

                     {/* table */}
                         <Table_  
                            columns={Columns.account.manufacturer} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    
                    </TabPane>
                    
                    <TabPane tab={`普通用户管理(${this.state.count})`} key="3">
                        {/* btn */}
                        <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>
                        {/* 模态框 */}
                            <Modal_  visiable={this.state.modalVisible}/>

                        {/* 筛选   */}
                            <Select defaultValue="0" size="small" style={{ width: 120,height:30,margin:'10px 10px 10px 0'}} onChange={val => this.onChange(val) }>
                                <Option value="0">厂商账号</Option>
                                <Option value="1">真实姓名</Option>
                                <Option value="2">绑定手机号</Option>
                            </Select>
                    
                            <Search
                                placeholder="请输入厂商账号/真实姓名/绑定手机账号"
                                enterButton="搜索"
                                size="small"
                                onSearch={value => this.filter_(value)}
                                style={{position: 'absolute',width:'40%',margin:'10px 10px 10px 0'}}
                                />

                        {/* table */}
                            <Table_  
                                columns={Columns.account.manufacturer} 
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




export const AccountManager = AccountManagerPage;

