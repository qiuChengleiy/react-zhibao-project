/**
 *  提现记录
 *  time: 2018-09-14 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Table_, } from '../../../components';
import { Columns,DistributorManager } from '../../../config';
import { accountTable, } from '../../../api';


class CashsPage_ extends React.Component {
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
            
                    <div>
                        <span><h3>总收入:</h3></span>
                        <span><h3>本月收入:</h3></span>
                        <span><h3>已提现金额:</h3></span>
                        <span><h3>可提现金额:</h3></span>
                    </div>

                   <Table_  
                      columns={DistributorManager.money_manager.income_record} 
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

export const CashsPage = connect(mapStateToProps)(CashsPage_);

