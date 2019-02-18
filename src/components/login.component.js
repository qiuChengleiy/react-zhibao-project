/**
 * 模态框组件
 * time: 2018-09-09 by qiuchenglei
 */
import React from 'react';
import { Modal, Input, message, Button,  } from 'antd';
import { login_ } from '../api/account';
import {MD5} from '../utils';

class Modals extends React.Component {

  state = {
      username: '',
      password: '',
  }

  login(state) { 
    message.loading('登录中...', 2.5)
    .then(() => {
      const user_data = {loginname:state.username,password: MD5(state.password)};
      const result = login_(user_data);
      //测试账号： 13541677888  密码：123456
      result.then(e => {
        if(e.data.code == 1) {
          message.success('登录成功', 2.5);
          console.log(e.data)
          sessionStorage.setItem('user_data',JSON.stringify(e.data));
          this.props.parm.prop.push('/nav/accountManager');
        }else {
          message.error('用户名或密码错误', 2.5);
          message.error('请重新登录', 2.5)
        }

      })
    })
    
  }

  render() {
    const style ={marginLeft:10,width:'60%',position:'absolute'};

    return (
      <div>
        <Modal
          title="质保后台登录"
          centered
          visible={true}
          onOk={ () => this.login(this.state) }
        //   onCancel={() => dispatch({type: 'account/login',payload:{id:'cancel'}})}
        >
         <div style={{width:'100%'}}>
          <span>账号:  <Input placeholder="请输入账号" size="small" style={style} onChange={(e) => {this.setState({username: e.target.value.trim()})}}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>密码:  <Input placeholder="请输入密码" size="small" type="password" style={style} onChange={(e) => {this.setState({password: e.target.value})}}/></span>
         </div>        
         
        </Modal>
      </div>
    );
  }
}

 export const Login = Modals;
 
