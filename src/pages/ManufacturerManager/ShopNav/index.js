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


class ShopNavPage_ extends React.Component {

  render() {
    const { account,dispatch } = this.props; // 获取状态
    const style ={marginLeft:10,width:'60%',position:'absolute'};

    return (
      <div>
         <div style={{width:'100%'}}>
          <span>商品名称:  <Input placeholder="请输入商品名称" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>所在地:  
              <Select defaultValue="0" size="small" style={{ width: 120,height:30,marginLeft:10}} onChange={val => dispatch({type: 'account/select',payload:{val}})}>
                 <Option value="0">省</Option>
              </Select>

              <Select defaultValue="0" size="small" style={{ width: 120,height:30,marginLeft:10}} onChange={val => dispatch({type: 'account/select',payload:{val}})}>
                 <Option value="0">市</Option>
              </Select>

              <Select defaultValue="0" size="small" style={{ width: 120,height:30,marginLeft:10}} onChange={val => dispatch({type: 'account/select',payload:{val}})}>
                 <Option value="0">区</Option>
              </Select>
          </span>
              
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>联详细地址:  <Input placeholder="" size="small" style={style}/></span>
         </div>

         

         <div style={{width:'100%',marginTop:20}}>
          <span>联系人姓名:  <Input placeholder="" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>联系电话:  <Input placeholder="" size="small" style={style}/></span>
         </div>

         <div style={{width:'100%',marginTop:20}}>
          <span>资质上传:  
             <Upload {...props}>
              <Button size="small" style={{marginLeft:10,}}>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          </span>
        </div>

        <div style={{width:'100%',marginTop:20}}>
           <span>封面图上传:  
             <Upload {...props}>
              <Button size="small" style={{marginLeft:10,}}>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          </span>
        </div>

           <Button type="primary" onClick={() => {}} style={{marginTop:20,}}>提交</Button>

      </div>
    );
  }
}

// 数据校验
ShopNavPage_.propTypes = {
    visiable: PropTypes.bool.isRequired,
 };
 
 
 function mapStateToProps(state) {
     return { account: state.account };
   }
 
 export const ShopNavPage = connect(mapStateToProps)(ShopNavPage_);
 
