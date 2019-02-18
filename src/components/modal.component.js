/**
 * 模态框组件
 * time: 2018-09-09 by qiuchenglei
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Select,Upload, message, Button, Icon  } from 'antd';
import { connect } from 'dva';

const Option = Select.Option;

// 上传相关
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',   // 上传的地址
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


class Modals extends React.Component {

  render() {
    const { account,dispatch } = this.props; // 获取状态
    const style ={marginLeft:10,width:'60%',position:'absolute'};

    return (
      <div>
        <Modal
          title="添加厂商账号"
          centered
          visible={this.props.visiable}
          onOk={() => dispatch({type: 'account/toggle',payload:{id:'ok'}})}
          onCancel={() => dispatch({type: 'account/toggle',payload:{id:'cancel'}})}
        >
         <div style={{width:'100%'}}>
          <span>账号:  <Input placeholder="请输入账号" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>密码:  <Input placeholder="请输入密码" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>角色:  
              <Select defaultValue="0" size="small" style={{ width: 120,height:30,marginLeft:10}} onChange={val => dispatch({type: 'account/select',payload:{val}})}>
                 <Option value="0">厂商账号</Option>
              </Select></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>真实姓名:  <Input placeholder="" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>银行卡号:  <Input placeholder="" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>上传资质:  
             <Upload {...props}>
              <Button size="small" style={{marginLeft:10,}}>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          </span>
         </div>
         
         
        </Modal>
      </div>
    );
  }
}

// 数据校验
Modals.propTypes = {
    visiable: PropTypes.bool.isRequired,
 };
 
 
 function mapStateToProps(state) {
     return { account: state.account };
   }
 
 export const Modal_ = connect(mapStateToProps)(Modals);
 
