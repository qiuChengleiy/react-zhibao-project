/**
 *  挂账申请页面
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
const Search = Input.Search;

/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class HangUpApplyPage_ extends React.Component {
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
        const btnArr = ['搜索']

        return (
            <div style={styles.container}> 

                <Search
                    placeholder="请输入"
                    enterButton="搜索"
                    size="small"
                    onSearch={value => this.filter_(value)}
                    style={{width:'30%',marginBottom:20}}
                />  
            
                  {/* <Buttons title={btnArr} styles={{bt1:styles.btn,bt2:styles.btn_}} /> */}

                   <Modal_  visiable={account.modalVisible}/>

                   <Table_  
                      columns={DistributorManager.documentManager.hangup_apply} 
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

export const HangUpApplyPage1 = connect(mapStateToProps)(HangUpApplyPage_);

