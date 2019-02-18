/**
 * 消息模板页
 * time: 2018-09-11 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Input,Button  } from 'antd';



class MesModelPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
         
        }
    }

    componentDidMount() {

    }

    render() {
        const { account,dispatch } = this.props; // 获取状态
        const style ={marginLeft:10,width:'30%',position:'absolute'};

        return (
            <div style={styles.container}> 

               <div style={{width:'100%'}}>
                 <span>申请二维码通知消息模板编辑:  <Input placeholder="请输入..." size="small" style={style}/></span>
                </div>

                <div style={{width:'100%',marginTop:20}}>
                 <span>发货通知消息模板编辑:  <Input placeholder="请输入..." size="small" style={style}/></span>
                </div>

                <div style={{width:'100%',marginTop:20}}>
                 <span>收货通知消息模板编辑:  <Input placeholder="请输入..." size="small" style={style}/></span>
                </div>

                <div style={{width:'100%',marginTop:20}}>
                <span>提现通知消息模板编辑:  <Input placeholder="请输入..." size="small" style={style}/></span>
                </div>

                <div style={{width:'100%',marginTop:20}}>
                  <span>绑定经销商/厂商消息模板编辑:  <Input placeholder="请输入..." size="small" style={style}/></span>
                </div>  

                 <Button type="primary" 
                    key={0} 
                    style={styles.bt1} 
                    onClick={(() => {})}>提交
                  </Button>
                  
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const MesModelPage = connect(mapStateToProps)(MesModelPage_);

