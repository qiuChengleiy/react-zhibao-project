/**
 *  商品发布页面
 *  time: 2018-09-14 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Select,Input,Table,Card,Radio,Button,Upload,Icon,message } from 'antd';
import { Columns,DistributorManager } from '../../../../config';
import { accountTable, } from '../../../../api';
import { userFilter } from '../../../../utils/filter';

// 标签组件
const Search = Input.Search;
const { TextArea } = Input;
const Option = Select.Option;
const gridStyle = {
    g1: {
        width: '25%',
        textAlign: 'center',
        backgroundColor: 'rgb(244, 244, 244)',
    },
    g2: {
        width: '75%',
        textAlign: 'left',
    }
  };

/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}


// 文件上传
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

class GoodsReleasePage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        }
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
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

        // 文件上传相关
        const uploadButton = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">上传</div>
            </div>
          );
        const imageUrl = this.state.imageUrl;
        
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          hideDefaultSelections: true,
          onSelection: this.onSelection,
        }

       const columns_ = [
            {
              title: '型号规格',
              dataIndex: 'xing_hao',
              width:50,
              align: 'center',
            }, {
              title: '参数',
              dataIndex: 'argument',
              width:50,
              align: 'center',
            }, {
              title: '商品编码',
              dataIndex: 'goods_code',
              width:100,
              align: 'center',
            },
            {
              title: '一级经销商/元',
              dataIndex: 'first_level',
              width:50,
              align: 'center',
            },
            {
                title: '二级经销商/元',
                dataIndex: 'second_level',
                width:50,
                align: 'center',
            },
            {
                title: '三级经销商/元',
                dataIndex: 'three_level',
                width:50,
                align: 'center',
            },
            {
                title: '管理库存/件',
                dataIndex: 'manager_ku',
                width:50,
                align: 'center',
            },
            {
                title: '操作',
                dataIndex: 'opration',
                width:50,
                align: 'center',
            },
        ]

        const data = [
            {
                key: 1,
                order_list_num: `187da99sa0a081792938`,
                order_money: '999',
                order_time: '2018-09-11',
                pay: 'xxxxxx',
                pay_way: `支付宝`,
                user: 11111111,
                status: `已发货`,
                auto_ok: '15天',
              }
        ]
       
        return (
            <div style={styles.container}>           

            {/* 商品信息 */}
                  <Card title="商品信息">
                    <Card.Grid style={gridStyle.g1}>商品名称</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>xxxxxxxxxx</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>商品编号</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>xxxxxxx</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>商品关键字</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>xxxxxxx</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>所属类目</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>
                        <Select defaultValue="0" size="small" style={{ width: 100,}} onChange={val => {}}>
                             <Option value="0">选择类目</Option>
                             <Option value="1">车胎</Option>
                             <Option value="2">车灯</Option>
                        </Select>
                    </Card.Grid>

                    <Card.Grid style={gridStyle.g1}>质保期限</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>xxxx年</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>商品参数</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>
                        <Select defaultValue="0" size="small" style={{ width: 100,}} onChange={val => {}}>
                             <Option value="0">白色</Option>
                        </Select>
                    </Card.Grid>

                    <Card.Grid style={gridStyle.g1}>运费</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>无</Card.Grid>
                </Card>


                    {/* 商品规格 */}
                <div style={styles.tops}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>商品规格</span>
                </div>  

              <div style={styles.uploads}>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                </Upload>
                <ul style={styles.ul}>
                 <li style={styles.li}>
                    <div style={{position:"absolute",bottom:5,cursor:'pointer'}}>
                        <span style={{color:'#66CCCC'}}>设为封面</span>
                        <span style={{color:" #FF0000"}}>/删除</span>
                    </div>
                    <img src={require('../../../../assets/status_info.png')} style={styles.imgs} />
                </li>

                <li style={styles.li}>
                    <div style={{position:"absolute",bottom:5,cursor:'pointer'}}>
                        <span style={{color:'#66CCCC'}}>设为封面</span>
                        <span style={{color:" #FF0000"}}>/删除</span>
                    </div>
                    <img src={require('../../../../assets/status_info.png')} style={styles.imgs} />
                </li>

                <li style={styles.li}>
                    <div style={{position:"absolute",bottom:5,cursor:'pointer'}}>
                        <span style={{color:'#66CCCC'}}>设为封面</span>
                        <span style={{color:" #FF0000"}}>/删除</span>
                    </div>
                    <img src={require('../../../../assets/status_info.png')} style={styles.imgs} />
                </li>
                </ul>

                    {/* 型号规格 */}
                    <div style={styles.tops}>
                        <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                        <span style={styles.status_}>型号规格</span>
                    </div>  

                    <ul>
                        <li style={styles.li_}>80*80cm</li>
                        <li style={styles.li_}>80*80cm</li>
                        <li style={styles.li_}>80*80cm</li>
                        <li style={styles.li_}>+ 添加</li>
                    </ul>

                    <div style={{marginTop:50}}>
                     <Table 
                        rowSelection={rowSelection} 
                        columns={columns_} 
                        dataSource={data} 
                        pagination= {8}
                        size="small"
                        scroll={{x:1000,}}
                        loading={false}
                       />

                        <div style={{marginTop:10,}}>
                          <span style={styles.status_}>编辑图为详情: &nbsp;</span>
                           <Button type="primary" 
                            style={styles.btn}
                            onClick={(() => { })}>点击预览
                            </Button>
                        </div>

                       <TextArea rows={4} onPressEnter={ (e) => {}}/>

                       <div style={{marginLeft:500,marginTop:10,}}>
                       <Button type="primary" 
                          style={styles.btn}
                          onClick={(() => { })}>保存
                        </Button>

                        <Button type="primary" 
                            style={styles.btn_}
                            onClick={(() => { })}>取消
                        </Button>
                        </div>
                    </div>

                     {/* 型号规格 */}
                     <div style={styles.tops}>
                        <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                        <span style={styles.status_}>其他操作</span>
                    </div>  

                    <div style={{marginTop:10,}}>

                     <span style={styles.status_}>下架操作: &nbsp;</span>
                        <Button type="primary" 
                          style={styles.btn}
                          onClick={(() => { })}>立即下架
                        </Button>
                     </div>


                     <div style={{marginLeft:500,marginTop:10,}}>
                       <Button type="primary" 
                          style={styles.btn}
                          onClick={(() => { })}>提交
                        </Button>

                        <Button type="primary" 
                            style={styles.btn_}
                            onClick={(() => { })}>取消
                        </Button>
                      </div>
                 </div>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const GoodsReleasePage1 = connect(mapStateToProps)(GoodsReleasePage_);

