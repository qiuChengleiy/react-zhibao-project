/**
 *  商品管理面
 *  time: 2018-10-18 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Tabs,Select,Input  } from 'antd';
import { Buttons,Table_,Modal_ } from '../../../../components';
import { Columns,DistributorManager } from '../../../../config';
import { accountTable, } from '../../../../api';
import { userFilter } from '../../../../utils/filter';

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

class GoodsManagerPage_ extends React.Component {
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
        const btnArr = ['添加商品','修改商品','商品上架','商品下架','自定义搜索'];
       
        return (
            <div style={styles.container}>

              {/* <Search
                    placeholder="请输入"
                    enterButton="搜索"
                    size="small"
                    onSearch={value => this.filter_(value)}
                    style={{width:'40%',marginBottom:20}}
                />  */}

                <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}}/>

                <Tabs onChange={callback} type="card">
                    <TabPane tab={`全部(${account.count})`} key="1">
                    
                     {/* 模态框 */}
                        <Modal_  visiable={account.modalVisible}/>

                     {/* table */}
                         <Table_  
                            columns={DistributorManager.goods_manager.goods_manager_p} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    </TabPane>

                    <TabPane tab={`已上架(${account.count})`} key="2">
                      {/* 模态框 */}
                        <Modal_  visiable={account.modalVisible}/>

                     {/* table */}
                         <Table_  
                            columns={DistributorManager.goods_manager.goods_manager_p} 
                            scrollX={2500}
                            pagination={{pageSize:7}} 
                            dataSource={this.state.filter_data}
                            loading = {this.state.status}
                          />
                    
                    </TabPane>
                    
                    <TabPane tab={`已下架(${account.count})`} key="3">
                      
                        {/* 模态框 */}
                            <Modal_  visiable={account.modalVisible}/>

                        {/* table */}
                            <Table_  
                                columns={DistributorManager.goods_manager.goods_manager_p} 
                                scrollX={2500}
                                pagination={{pageSize:7}} 
                                dataSource={this.state.filter_data}
                                loading = {this.state.status}
                            />
                        
                    </TabPane>

                     <TabPane tab={`缺货商品(${account.count})`} key="4">
                      
                      {/* 模态框 */}
                          <Modal_  visiable={account.modalVisible}/>

                      {/* table */}
                          <Table_  
                              columns={DistributorManager.goods_manager.goods_manager_p} 
                              scrollX={2500}
                              pagination={{pageSize:7}} 
                              dataSource={this.state.filter_data}
                              loading = {this.state.status}
                          />
                      
                  </TabPane>

                   <TabPane tab={`库存警报(${account.count})`} key="5">
                      
                      {/* 模态框 */}
                          <Modal_  visiable={account.modalVisible}/>

                      {/* table */}
                          <Table_  
                              columns={DistributorManager.goods_manager.goods_manager_p} 
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

export const GoodsManagerPage = connect(mapStateToProps)(GoodsManagerPage_);

