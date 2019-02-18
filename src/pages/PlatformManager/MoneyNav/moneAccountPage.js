/**
 * 账户资金页
 * time: 2018-09-11 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Table_ } from '../../../components';
import { Columns } from '../../../config';
import { accountTable, } from '../../../api';


/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class MoneyAccountPage_ extends React.Component {
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
                   <Table_  
                      columns={Columns.money.account_money} 
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

export const MoneyAccountPage = connect(mapStateToProps)(MoneyAccountPage_);

