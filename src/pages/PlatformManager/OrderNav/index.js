/**
 * 销售统计页
 * time: 2018-09-10 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Card,DatePicker  } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';  // 国际化
moment.locale('zh-cn');

const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class SaleListPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
          
        }
    }

    onPanelChange(value, mode) {
        console.log(value, mode);
      }

    componentDidMount() {
      
    }

    render() {
        const { account,dispatch } = this.props; // 获取状态
        const cardArr = [
            {title:'本日订单统计/件',counts:'100000'},
            {title:'本月订单统计/件',counts:'100000'},
            {title:'今年订单统计/件',counts:'100000'},
            {title:'本日订单金额/元',counts:'100000'},
            {title:'本月订单金额/元',counts:'100000'},
            {title:'今年订单金额/元',counts:'100000'},
          ]
          const cardFilterArr = [
            {title:'订单统计/件',counts:'100000'},
            {title:'订单金额/元',counts:'100000'},
          ]

        return (
            <div style={styles.container}> 

                <div style={styles.border}>
                  <img src={require('../../../assets/icon_money.png')} alt="订单总金额" style={styles.img}/>
                  <strong style={styles.h4}>总累计金额： <span style={styles.txt}>9,999,9 元</span></strong>
                </div>

                <div style={styles.borders}>
                  <img src={require('../../../assets/icon_list.png')} alt="订单总件数" style={styles.img}/>
                  <strong style={styles.h4}>总累计数量： <span style={styles.txt}>999999 件</span></strong>
                </div>

                <Card title="订单统计" style={styles.card}>
                    { cardArr.map((val,key) => 
                        <Card.Grid style={styles.gridStyle}>
                            <h4>{val.title}</h4>
                            <h4>{val.counts}</h4>
                        </Card.Grid>
                  )}
                </Card>

                <Card title="时间筛选" style={styles.card}>

                    <Card.Grid style={styles.gridStyle}>
                       <DatePicker 
                            defaultValue={moment('2018/09/10', dateFormat)} 
                            format={dateFormat} 
                            placeholder="请选择日期"
                        />
                    </Card.Grid>

                    { cardFilterArr.map((val,key) => 
                        <Card.Grid style={styles.gridStyle}>
                            <h4>{val.title}</h4>
                            <h4>{val.counts}</h4>
                         </Card.Grid>   
                  )}
                </Card>

            </div>
        )
    }
}


function mapStateToProps(state) {
   // return { account: state.account };
  }

export const SaleListPage = connect(mapStateToProps)(SaleListPage_);

