/**
 *  已发货
 *  time: 2018-09-14 by qiuchenglei
 */

import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Select,Input,Table   } from 'antd';
import { Columns,DistributorManager } from '../../../../config';
import { accountTable, } from '../../../../api';
import { userFilter } from '../../../../utils/filter';

// 标签组件
const Search = Input.Search;

/**
 * 
 * @param {Number} key 标签类别
 */
function callback(key) {
  console.log(key);
}

class AlreadyShippedPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
            selectedRowKeys: [], // Check here to configure the default column
        }
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
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
        
        const { selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
          hideDefaultSelections: true,
          onSelection: this.onSelection,
        }

       const columns_ = [
            {
              title: '订单编号',
              dataIndex: 'order_list_num',
              width:200,
              align: 'center',
            }, {
              title: '订单金额',
              dataIndex: 'order_money',
              width:100,
              align: 'center',
            }, {
              title: '下单时间',
              dataIndex: 'order_time',
              width:100,
              align: 'center',
            },
            {
              title: '支付流水',
              dataIndex: 'pay',
              width:100,
              align: 'center',
            },
            {
                title: '支付方式',
                dataIndex: 'pay_way',
                width:100,
                align: 'center',
            },
            {
                title: '用户账号',
                dataIndex: 'user',
                width:100,
                align: 'center',
            },
            {
                title: '配送状态',
                dataIndex: 'status',
                width:100,
                align: 'center',
            },
            {
                title: '自动确认收货',
                dataIndex: 'auto_ok',
                width:100,
                align: 'center',
            },
        ]

        const columns_1 = [
            {
              title: '商品图片',
              dataIndex: 'goods_img',
              width:200,
              align: 'center',
            }, {
              title: '商品名称',
              dataIndex: 'goods_name',
              width:100,
              align: 'center',
            }, {
              title: '商品编码',
              dataIndex: 'goods_codes',
              width:100,
              align: 'center',
            },
            {
              title: '商品金额/元',
              dataIndex: 'goods_money',
              width:100,
              align: 'center',
            },
            {
                title: '属性',
                dataIndex: 'alt',
                width:100,
                align: 'center',
            },
            {
                title: '数量/件',
                dataIndex: 'user',
                width:100,
                align: 'center',
            },
            {
                title: '质保期限/年',
                dataIndex: 'time',
                width:100,
                align: 'center',
            },
            {
                title: '合计/元',
                dataIndex: 'all',
                width:100,
                align: 'center',
            },
        ]


        const columns_2 = [
            {
              title: '订单编号',
              dataIndex: 'order_account',
              width:200,
              align: 'center',
            }, {
              title: '用户账号',
              dataIndex: 'user_account',
              width:100,
              align: 'center',
            }, {
              title: '商品编码',
              dataIndex: 'goods_codes',
              width:100,
              align: 'center',
            },
            {
              title: '用户手机号',
              dataIndex: 'user_phone',
              width:100,
              align: 'center',
            },
            {
                title: '收件人姓名',
                dataIndex: 'user_name',
                width:100,
                align: 'center',
            },
            {
                title: '收件人电话',
                dataIndex: 'user_tell',
                width:100,
                align: 'center',
            },
            {
                title: '收货地址',
                dataIndex: 'address',
                width:100,
                align: 'center',
            },
        ]


        const columns_3 = [
            {
              title: '类型',
              dataIndex: 'order_option',
              width:200,
              align: 'center',
            }, {
              title: '时间',
              dataIndex: 'time_',
              width:100,
              align: 'center',
            }, {
              title: '支付方式',
              dataIndex: 'pay_way',
              width:100,
              align: 'center',
            },
            {
              title: '操作方式',
              dataIndex: 'option',
              width:100,
              align: 'center',
            },
            {
                title: '说明',
                dataIndex: 'desc',
                width:100,
                align: 'center',
            },
        ]

        const columns_4 = [
            {
              title: '物流单号',
              dataIndex: 'accounts',
              width:200,
              align: 'center',
            }, {
              title: '货物拍照上传',
              dataIndex: 'image_picker',
              width:100,
              align: 'center',
            }, {
              title: '运单明细上传',
              dataIndex: 'trail_upload',
              width:100,
              align: 'center',
            },
            {
              title: '发货的当前位置',
              dataIndex: 'location',
              width:100,
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
               {/* btn */}
                  <div style={styles.tops}>
                    <img src={require('../../../../assets/status.png')} style={styles.img}/>
                    <span style={styles.status}>当前状态： 已发货</span>
                  </div>     

            {/* 基本信息 */}
                  <div style={styles.info}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>基本信息</span>
                  </div>           

                 <Table 
                    rowSelection={rowSelection} 
                    columns={columns_} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                />


                 {/* 商品信息 */}
                 <div style={styles.info}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>商品信息</span>
                  </div>           

                 <Table 
                    rowSelection={rowSelection} 
                    columns={columns_1} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                />

                <div style={styles.info}>
                    <span style={styles.status_}>运费: ¥15元</span>
                    <span style={styles.status_all}>合计: ¥15元</span>
                </div>  

              {/* 收货人信息 */}
              <div style={styles.info}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>收货人信息</span>
                  </div>           

                 <Table 
                    rowSelection={rowSelection} 
                    columns={columns_2} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                />

            {/* 收退款记录 */}
            <div style={styles.info}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>收退款记录</span>
                  </div>           

                 <Table 
                    rowSelection={rowSelection} 
                    columns={columns_3} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                />


            {/* 收发货记录 */}
            <div style={styles.info}>
                    <img src={require('../../../../assets/status_info.png')} style={styles.img}/>
                    <span style={styles.status_}>收发货记录</span>
                    <span style={styles.status_alls}>确认收货</span>
                  </div>           

                 <Table 
                    rowSelection={rowSelection} 
                    columns={columns_4} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                />

                
               
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const AlreadyShippedPage1 = connect(mapStateToProps)(AlreadyShippedPage_);

