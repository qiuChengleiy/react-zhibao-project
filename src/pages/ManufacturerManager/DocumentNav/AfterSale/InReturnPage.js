/**
 *  退货中
 *  time: 2018-10-17 by qiuchenglei
 */
import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import styles from './css.js';
import { Select,Input,Table,Card,Radio,Button   } from 'antd';
import { Columns,DistributorManager } from '../../../../config';
import { accountTable, } from '../../../../api';
import { userFilter } from '../../../../utils/filter';

// 标签组件
const Search = Input.Search;
const RadioGroup = Radio.Group;
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

class InReturnPage_ extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            data:null,
            status:true,
            filter_data:null,
            selectedRowKeys: [], // Check here to configure the default column
            check:null,
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

        const columns = [
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


        
        // 数据源
        const data = [
            {
               
            }
        ]
       
        return (
            <div style={styles.container}>

                  <div style={styles.tops}>
                    <span style={styles.status_}>退货商品</span>
                  </div> 

                   <Table 
                    rowSelection={rowSelection} 
                    columns={columns} 
                    dataSource={data} 
                    pagination= {8}
                    size="small"
                    scroll={{x:1500,}}
                    loading={false}
                /> 

                 <div style={styles.tops}>
                    <span style={styles.status_}>运费: ¥15元</span>
                 </div>   

            {/* 其他信息 */}
                  <Card title="其他信息">
                    <Card.Grid style={gridStyle.g1}>申请状态</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理-退货中</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>订单编号</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>申请时间</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>用户账号</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>联系电话</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>退货原因</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>问题描述</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>订单金额</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>退运费</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>
                        <RadioGroup name="radiogroup" defaultValue={1} onChange={ e => this.setState({check:e.target.value}) }>
                            <Radio value={1}>退运费</Radio>
                            <Radio value={2}>不退运费</Radio>
                        </RadioGroup>
                    </Card.Grid>

                    <Card.Grid style={gridStyle.g1}>申请时间</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>待处理</Card.Grid>

                    <Card.Grid style={gridStyle.g1}>确认退款金额</Card.Grid>
                    <Card.Grid style={gridStyle.g2}>¥200</Card.Grid>
                </Card>

                <div style={styles.button}>
                 <Button type="primary" 
                    style={styles.btn}
                    onClick={(() => { })}>确认收货
                  </Button>
                </div>
              
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { account: state.account };
  }

export const InReturnPage1 = connect(mapStateToProps)(InReturnPage_);

