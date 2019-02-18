/**
 * 表格配置
 * time: 2018-09-07 by qiuchenglei
 */
import { Switch } from 'antd';
import { onChange} from '../api';


// 表格列数据描述对象 : 平台管理员
 export const Columns = {
     // 账号管理
     account:{
         // 厂商用户
        manufacturer:[
          {
            title: '账号',
            dataIndex: 'account',
            width:200,
            align: 'center',
          }, {
            title: '密码',
            dataIndex: 'password',
            width:200,
            align: 'center',
          }, {
            title: '角色',
            dataIndex: 'role',
            width:200,
            align: 'center',
          },
          {
            title: '真实姓名',
            dataIndex: 'name',
            width:100,
            align: 'center',
          },
          {
            title: '绑定手机号',
            dataIndex: 'phone',
            width:200,
            align: 'center',
          },
          {
            title: '银行卡号',
            dataIndex: 'bankCard',
            width:300,
            align: 'center',
          },
          {
            title: '上传资质',
            dataIndex: 'qualifications',
            width:200,
            align: 'center',
            render: (url) => (
                <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
              ),
          },
          {
            title: '定位位置',
            dataIndex: 'location',
            width:200,
            align: 'center',
          },
          {
            title: '创建日期',
            dataIndex: 'date',
            width:200,
            align: 'center',
          },
          {
            title: '身份证号',
            dataIndex: 'ID',
            width:300,
            align: 'center',
          },
          {
            title: '身份证正面',
            dataIndex: 'id_front',
            width:200,
            align: 'center',
            render: (url) => (
                <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
              ),
          },
          {
            title: '身份证反面',
            dataIndex: 'id_reverse',
            width:200,
            align: 'center',
            render: (url) => (
                <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
              ),
          },
          {
            title: '使用状态',
            dataIndex: 'status',
            width:200,
            align: 'center',
            render: (status,tags) => (
                <Switch 
                  checked={status}
                  onChange={() => { onChange(status,tags);window.location.reload(true);} } 
                />
              ),
          },
        ],
     },
     //权限管理
     power:{
       role:[
        {
          title: '角色名',
          dataIndex: 'role_name',
          width:200,
          align: 'center',
        },
        {
          title: '功能权限',
          dataIndex: 'power_right',
          width:200,
          align: 'center',
        },
        {
          title: '数据权限',
          dataIndex: 'data_right',
          width:200,
          align: 'center',
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          width:200,
          align: 'center',
        },
        {
          title: '是否启用',
          dataIndex: 'open_off',
          width:200,
          align: 'center',
          render: (status,tags) => (
              <Switch 
                checked={status}
                onChange={() => { onChange(status,tags);window.location.reload(true);} } 
              />
            ),
        },
       ],
       admin:[
        {
          title: '管理员名称',
          dataIndex: 'admin_name',
          width:200,
          align: 'center',
        },
        {
          title: '账号',
          dataIndex: 'admin_account',
          width:200,
          align: 'center',
        },
        {
          title: '密码',
          dataIndex: 'admin_password',
          width:200,
          align: 'center',
        },
        {
          title: '角色名',
          dataIndex: 'admin_role',
          width:200,
          align: 'center',
        },
        {
          title: '创建时间',
          dataIndex: 'create_time',
          width:200,
          align: 'center',
        },
        {
          title: '是否启用',
          dataIndex: 'open_off',
          width:200,
          align: 'center',
          render: (status,tags) => (
              <Switch 
                checked={status}
                onChange={() => { onChange(status,tags);window.location.reload(true);} } 
              />
            ),
        },
       ],
     },
     // 质保卡申请
     zbcard:{
       apply:[
        {
          title: '商家',
          dataIndex: 'business',
          width:200,
          align: 'center',
        }, {
          title: '商品名称',
          dataIndex: 'good_name',
          width:200,
          align: 'center',
        }, {
          title: '质保负责单位',
          dataIndex: 'zb_address',
          width:200,
          align: 'center',
        },
        {
          title: '质保时长',
          dataIndex: 'zb_time',
          width:100,
          align: 'center',
        },
        {
          title: '质保范围',
          dataIndex: 'zb_range',
          width:200,
          align: 'center',
        },
        {
          title: '购买人/单位',
          dataIndex: 'zb_buyer',
          width:300,
          align: 'center',
        },
        {
          title: '申请数量',
          dataIndex: 'zb_counts',
          width:300,
          align: 'center',
        },
        {
          title: '总价',
          dataIndex: 'total_price',
          width:300,
          align: 'center',
        },
        {
          title: '联系方式',
          dataIndex: 'zb_contact',
          width:300,
          align: 'center',
        },
        {
          title: '状态',
          dataIndex: 'zb_status',
          width:300,
          align: 'center',
        },
        {
          title: '产品图片',
          dataIndex: 'qualifications',
          width:200,
          align: 'center',
          render: (url) => (
              <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
            ),
        },
       ]
     },
     // 其他设置
     other: {
       // 轮播图
       swiper:[
        {
          title: '图片',
          dataIndex: 'other_img',
          width:200,
          align: 'center',
          render: (url) => (
            <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
          ),
        },
        {
          title: '描述',
          dataIndex: 'other_desc',
          width:200,
          align: 'center',
        },
        {
          title: '连接地址',
          dataIndex: 'other_url',
          width:300,
          align: 'center',
        },
        {
          title: '顺序',
          dataIndex: 'other_order',
          width:200,
          align: 'center',
        },
       ],
       // 退货原因
       cause:[
        {
          title: '原因类型',
          dataIndex: 'cause_option',
          width:200,
          align: 'center',
        },
        {
          title: '排序',
          dataIndex: 'other_orders',
          width:200,
          align: 'center',
        },
        {
          title: '顺序',
          dataIndex: 'other_order',
          width:200,
          align: 'center',
        },
        {
          title: '是否启用',
          dataIndex: 'open_off',
          width:200,
          align: 'center',
          render: (status,tags) => (
              <Switch 
                checked={status}
                onChange={() => { onChange(status,tags);window.location.reload(true);} } 
              />
            ),
        },
        {
          title: '添加时间',
          dataIndex: 'add_time',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'opreation',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div>
              <h4 style={{color:'#66CCCC'}}>修改</h4><h4 style={{color:'#CC0033'}}>删除</h4>
            </div>
          ),
        },
       ],
         // 支付设置
        pay:[
          {
            title: '支付方式名称',
            dataIndex: 'pay_name',
            width:200,
            align: 'center',
          },
          {
            title: '账户',
            dataIndex: 'account',
            width:200,
            align: 'center',
          },
          {
            title: '是否启用',
            dataIndex: 'open_off',
            width:200,
            align: 'center',
            render: (status,tags) => (
                <Switch 
                  checked={status}
                  onChange={() => { onChange(status,tags);window.location.reload(true);} } 
                />
              ),
          },
          {
            title: '操作',
            dataIndex: 'other_order',
            width:200,
            align: 'center',
            render: (status,tags) => (
              <div>
                <h4 style={{color:'#66CCCC'}}>编辑</h4>
              </div>
            ),
          },
        ]
     },
     // 资金管理
     money:{
       // 资金账户
       cash_account:[
          {
            title: '平台名称',
            dataIndex: 'plat_name',
            width:200,
            align: 'center',
          },
          {
            title: '总收入',
            dataIndex: 'total_money',
            width:200,
            align: 'center',
          },
          {
            title: '总支出',
            dataIndex: 'total_pay',
            width:200,
            align: 'center',
          },
          {
            title: '总提现',
            dataIndex: 'total_cash',
            width:200,
            align: 'center',
          },
          {
            title: '余额',
            dataIndex: 'reserve_money',
            width:200,
            align: 'center',
          },
          {
            title: '提现',
            dataIndex: 'cash_apply',
            width:200,
            align: 'center',
            render: (status,tags) => (
              <div style={{width:200,height:100,backgroundColor:'#66CCCC',}}>
                <h4 style={{color:'#ffffff'}}>提现</h4>
              </div>
            ),
          },
       ],
       // 提现申请
       cash_apply:[
        {
          title: '账号',
          dataIndex: 'apply_account',
          width:200,
          align: 'center',
        },
        {
          title: '角色',
          dataIndex: 'apply_role',
          width:200,
          align: 'center',
        },
        {
          title: '支付宝账号',
          dataIndex: 'apply_zfb',
          width:200,
          align: 'center',
        },
        {
          title: '申请时间',
          dataIndex: 'apply_time',
          width:200,
          align: 'center',
        },
        {
          title: '提现金额/元',
          dataIndex: 'apply_cash',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'apply_option',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'#66CCCC',}}>
              <h4 style={{color:'#ffffff'}}>同意提现</h4>
            </div>
          ),
        },
        {
          title: '提现状态',
          dataIndex: 'apply_status',
          width:200,
          align: 'center',
        },
       ],
       // 账户资金
       account_money:[
        {
          title: '账号',
          dataIndex: 'account',
          width:200,
          align: 'center',
        },
        {
          title: '角色',
          dataIndex: 'role',
          width:200,
          align: 'center',
        },
        {
          title: '剩余资金',
          dataIndex: 'reserve_money',
          width:200,
          align: 'center',
        },
        {
          title: '资金明细',
          dataIndex: 'money_detail',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div>
              <h4 style={{color:'#ffffff'}}>查看</h4>
            </div>
          ),
        },
       ]
     },
     // 消息管理
     messages:{
       mes_record:[
        {
          title: '申请商',
          dataIndex: 'applyer',
          width:200,
          align: 'center',
        },
        {
          title: '申请商账号',
          dataIndex: 'applyer_account',
          width:200,
          align: 'center',
        },
        {
          title: '消息种类',
          dataIndex: 'mes_option',
          width:200,
          align: 'center',
        },
        {
          title: '消息内容',
          dataIndex: 'mes_content',
          width:200,
          align: 'center',
        },
       ]
     }
 }


// 经销商用户
export const DistributorManager = {
    // 用户管理
    UserManager:{
       // 普通用户
      OrdinaryUser: [
        {
          title: '账号',
          dataIndex: 'account',
          width:200,
          align: 'center',
        },
        {
          title: '手机号',
          dataIndex: 'phone',
          width:200,
          align: 'center',
        },
        {
          title: '密码',
          dataIndex: 'password',
          width:200,
          align: 'center',
        },
        {
          title: '角色',
          dataIndex: 'role',
          width:200,
          align: 'center',
        },
        {
          title: '申请时间',
          dataIndex: 'apply_time',
          width:200,
          align: 'center',
        },
        {
          title: '上传资质',
          dataIndex: 'qualifications',
          width:200,
          align: 'center',
          render: (url) => (
              <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
            ),
        },
        {
          title: '所在地',
          dataIndex: 'location',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>同意绑定</h4>
            </div>
          ),
        },
      ],
        // 厂商用户
        ManufacturerUser: [
          {
            title: '账号',
            dataIndex: 'account',
            width:200,
            align: 'center',
          },
          {
            title: '手机号',
            dataIndex: 'phone',
            width:200,
            align: 'center',
          },
          {
            title: '角色',
            dataIndex: 'role',
            width:200,
            align: 'center',
          },
          {
            title: '真实姓名',
            dataIndex: 'name',
            width:200,
            align: 'center',
          },
          {
            title: '资质',
            dataIndex: 'qualifications',
            width:200,
            align: 'center',
            render: (url) => (
                <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
              ),
          },
          {
            title: '定位位置',
            dataIndex: 'location',
            width:200,
            align: 'center',
          },
          {
            title: '创建日期',
            dataIndex: 'create_time',
            width:200,
            align: 'center',
          },
        ]
    },
    // 单据管理
    documentManager: {
      // 出售订单管理
      sale_order_list: {
        // 出售订单管理页
        sale_page: [
          {
            title: '订单编号',
            dataIndex: 'order_num',
            width:200,
            align: 'center',
          },
          {
            title: '订单金额/元',
            dataIndex: 'order_money',
            width:200,
            align: 'center',
          },
          {
            title: '下单时间',
            dataIndex: 'order_time',
            width:200,
            align: 'center',
          },
          {
            title: '支持流水',
            dataIndex: 'support_water',
            width:200,
            align: 'center',
          },
          {
            title: '支付方式',
            dataIndex: 'pay_option',
            width:200,
            align: 'center',
          },
          {
            title: '用户账号',
            dataIndex: 'user_account',
            width:200,
            align: 'center',
          },
          {
            title: '收货地址',
            dataIndex: 'receive_address',
            width:200,
            align: 'center',
          },
          {
            title: '用户电话',
            dataIndex: 'user_phone',
            width:200,
            align: 'center',
          },
          {
            title: '操作',
            dataIndex: 'action',
            width:200,
            align: 'center',
            render: (status,tags) => (
              <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
                <h4 style={{color:'#ffffff'}}>查看订单</h4>
              </div>
            ),
          },
        ]
      },
      // 售后
      after_sale: {
        // 售后管理页
        after_sale_page: [
        {
          title: '订单编号',
          dataIndex: 'order_num',
          width:200,
          align: 'center',
        },
        {
          title: '商品名',
          dataIndex: 'goods_name',
          width:200,
          align: 'center',
        },
        {
          title: '申请时间',
          dataIndex: 'apply_time',
          width:200,
          align: 'center',
        },
        {
          title: '用户账户',
          dataIndex: 'user_account',
          width:200,
          align: 'center',
        },
        {
          title: '退款金额',
          dataIndex: 'back_money',
          width:200,
          align: 'center',
        },
        {
          title: '退货原因',
          dataIndex: 'back_cause',
          width:200,
          align: 'center',
        },
        {
          title: '退货说明',
          dataIndex: 'return_policy',
          width:200,
          align: 'center',
        },
        {
          title: '申请状态',
          dataIndex: 'apply_status',
          width:200,
          align: 'center',
        },
        {
          title: '处理时间',
          dataIndex: 'handle_time',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>查看详情</h4>
            </div>
          ),
        },
      ],
     },
      // 挂账申请
    hangup_apply: [
      {
        title: '挂账编号',
        dataIndex: 'hangup_account',
        width:200,
        align: 'center',
      },
      {
        title: '订单编号',
        dataIndex: 'order_account',
        width:200,
        align: 'center',
      },
      {
        title: '挂账金额/元',
        dataIndex: 'hangup_money',
        width:200,
        align: 'center',
      },
      {
        title: '挂账申请时间',
        dataIndex: 'hangup_time',
        width:200,
        align: 'center',
      },
      {
        title: '用户账号',
        dataIndex: 'user_account',
        width:200,
        align: 'center',
      },
      {
        title: '挂账期限（天）',
        dataIndex: 'hangup_day',
        width:200,
        align: 'center',
      },
      {
        title: '操作',
        dataIndex: 'action',
        width:200,
        align: 'center',
        render: (status,tags) => (
          <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
            <h4 style={{color:'#ffffff'}}>同意</h4>
          </div>
        ),
      },
     ],
      // 挂账管理
    hangup_manager: [
      {
        title: '挂账编号',
        dataIndex: 'hangup_account',
        width:200,
        align: 'center',
      },
      {
        title: '订单编号',
        dataIndex: 'order_account',
        width:200,
        align: 'center',
      },
      {
        title: '挂账金额/元',
        dataIndex: 'hangup_money',
        width:200,
        align: 'center',
      },
      {
        title: '挂账申请时间',
        dataIndex: 'hangup_time',
        width:200,
        align: 'center',
      },
      {
        title: '挂账状态',
        dataIndex: 'hangup_status',
        width:200,
        align: 'center',
      },
      {
        title: '用户账号',
        dataIndex: 'user_account',
        width:200,
        align: 'center',
      },
      {
        title: '挂账期限（天）',
        dataIndex: 'hangup_day',
        width:200,
        align: 'center',
      },
     ]
    },
    // 质保卡管理
    zb_card: {
      // 质保卡打印
      zbcard_print: [
        {
          title: '商品名称',
          dataIndex: 'goods_name',
          width:200,
          align: 'center',
        },
        {
          title: '质保负责单位',
          dataIndex: 'zb_company',
          width:200,
          align: 'center',
        },
        {
          title: '质保开启时间',
          dataIndex: 'zb_start_time',
          width:200,
          align: 'center',
        },
        {
          title: '质保有效期',
          dataIndex: 'zb_expiry_date',
          width:200,
          align: 'center',
        },
        {
          title: '质保范围',
          dataIndex: 'zb_range',
          width:200,
          align: 'center',
        },
        {
          title: '购买人/单位',
          dataIndex: 'zb_buyer',
          width:200,
          align: 'center',
        },
        {
          title: '联系方式',
          dataIndex: 'zb_contact',
          width:200,
          align: 'center',
        },
        {
          title: '产品编号',
          dataIndex: 'product_num',
          width:200,
          align: 'center',
        },
        {
          title: '产品图片',
          dataIndex: 'product_img',
          width:200,
          align: 'center',
          render: (url) => (
              <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
            ),
        },
        {
          title: '二维码',
          dataIndex: 'QR_code',
          width:200,
          align: 'center',
          render: (url) => (
              <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
            ),
        },
      ]
    },
    // 分类管理 
    classfic: {
      classfic_page:[
        {
          title: '目录名',
          dataIndex: 'category',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,}}>
              <h4 style={{color:'rgba(22, 155, 213, 1)'}}>删除 </h4>
              <h4 style={{color:'rgba(22, 155, 213, 1)'}}>| 编辑</h4>
            </div>
          ),
        },
      ]
    },
    // 评价收藏
    evaluate: {
      // 用户评价
      user_evaluate: [
        {
          title: '订单编号',
          dataIndex: 'order_num',
          width:200,
          align: 'center',
        },
        {
          title: '商品名称',
          dataIndex: 'goods_name',
          width:200,
          align: 'center',
        },
        {
          title: '商品编号',
          dataIndex: 'goods_num',
          width:200,
          align: 'center',
        },
        {
          title: '评价内容',
          dataIndex: 'evaluate_content',
          width:300,
          align: 'center',
        },
        {
          title: '我的回复',
          dataIndex: 'my_copy',
          width:200,
          align: 'center',
        },
        {
          title: '收货人姓名',
          dataIndex: 'buyer_name',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>回复评价</h4>
            </div>
          ),
        },
      ],
      // 收藏用户
      collect_user: [
        {
          title: '商品名称',
          dataIndex: 'goods_name',
          width:300,
          align: 'center',
        },
        {
          title: '商品编号',
          dataIndex: 'goods_num',
          width:200,
          align: 'center',
        },
        {
          title: '收藏人数',
          dataIndex: 'collect_counts',
          width:200,
          align: 'center',
        },
      ],
    },
    // 商品管理
    goods_manager: {
      // 商品管理页面
      goods_manager_p:[
        {
          title: '商品图片',
          dataIndex: 'goods_img',
          width:200,
          align: 'center',
          render: (url) => (
            <img src={url} style={{height:'80%',cursor:'pointer'}} onClick={() => window.open(url)}/>
          ),
        },
        {
          title: '商品名称',
          dataIndex: 'goods_name',
          width:200,
          align: 'center',
        },
        {
          title: '管理员价格',
          dataIndex: 'manager_price',
          width:100,
          align: 'center',
        },
        {
          title: '科脉价格',
          dataIndex: 'kemai_price',
          width:100,
          align: 'center', 
        },
        {
          title: '类目',
          dataIndex: 'classfic',
          width:100,
          align: 'center', 
        },
        {
          title: '积分',
          dataIndex: 'counts',
          width:100,
          align: 'center', 
        },
        {
          title: '管理员库存',
          dataIndex: 'manager_reserve',
          width:100,
          align: 'center', 
        },
        {
          title: '科脉库存',
          dataIndex: 'kemai_reserve',
          width:100,
          align: 'center', 
        },
        {
          title: '标签',
          dataIndex: 'tags',
          width:100,
          align: 'center', 
        },
        {
          title: '上架状态',
          dataIndex: 'up_status',
          width:100,
          align: 'center', 
        },
        {
          title: '上架时间',
          dataIndex: 'up_time',
          width:100,
          align: 'center', 
        },
        {
          title: '三星经销商/元',
          dataIndex: 'sanxing',
          width:100,
          align: 'center', 
        },
        {
          title: '一级目录',
          dataIndex: 'one_c',
          width:100,
          align: 'center', 
        },
        {
          title: '二级目录',
          dataIndex: 'two_c',
          width:100,
          align: 'center', 
        },
        {
          title: '销量',
          dataIndex: 'sale_',
          width:100,
          align: 'center', 
        },
        {
          title: '二级目录',
          dataIndex: 'two_c',
          width:100,
          align: 'center', 
        },
        {
          title: '关注度',
          dataIndex: 'care_',
          width:100,
          align: 'center', 
        },
        {
          title: '售后',
          dataIndex: 'after_sale',
          width:100,
          align: 'center', 
        },
        {
          title: '评论',
          dataIndex: 'comment',
          width:100,
          align: 'center', 
        },
        {
          title: '商品详情',
          dataIndex: 'goods_desc',
          width:100,
          align: 'center', 
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <span style={{color:'#ffffff'}}>查看</span>
              <span style={{color:'#ffffff'}}>/编辑</span>
            </div>
          ),
        },
      ],
      // 商品发布页面

      //规格管理
      specification: [
        {
          title: '规格名称',
          dataIndex: 'specfic_name',
          width:200,
          align: 'center',
        },
        {
          title: '规格描述',
          dataIndex: 'sepcfic_desc',
          width:200,
          align: 'center',
        },
        {
          title: '规格值',
          dataIndex: 'specific_val',
          width:200,
          align: 'center',
        },
        {
          title: '适用类目',
          dataIndex: 'auto_pro',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>查看详情</h4>
            </div>
          ),
        },
      ],
       //参数管理
       arguments: [
        {
          title: '参数名称',
          dataIndex: 'arg_name',
          width:200,
          align: 'center',
        },
        {
          title: '参数描述',
          dataIndex: 'arg_desc',
          width:200,
          align: 'center',
        },
        {
          title: '可选值',
          dataIndex: 'option_val',
          width:200,
          align: 'center',
        },
        {
          title: '适用类目',
          dataIndex: 'auto_pro',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>查看详情</h4>
            </div>
          ),
        },
      ]
    },
    // 资金管理
    money_manager: {
      // 收入记录
      income_record: [
        {
          title: '资金来源',
          dataIndex: 'money_root',
          width:200,
          align: 'center',
        },
        {
          title: '入账时间',
          dataIndex: 'income_time',
          width:200,
          align: 'center',
        },
        {
          title: '入账金额/元',
          dataIndex: 'income_money',
          width:200,
          align: 'center',
        },
        {
          title: '资金流向',
          dataIndex: 'money_to',
          width:200,
          align: 'center',
        },
      ],
      // 提现记录
      cash_record: [
        {
          title: '交易流水',
          dataIndex: 'trading_flow',
          width:200,
          align: 'center',
        },
        {
          title: '提现时间',
          dataIndex: 'cash_time',
          width:200,
          align: 'center',
        },
        {
          title: '提现金额/元',
          dataIndex: 'cash_money',
          width:200,
          align: 'center',
        },
        {
          title: '资金去向',
          dataIndex: 'money_to',
          width:200,
          align: 'center',
        },
        {
          title: '提现状态',
          dataIndex: 'cash_status',
          width:200,
          align: 'center',
        },
      ],
      // 提现申请
      cash_applys: [
        {
          title: '账号',
          dataIndex: 'cash_account',
          width:200,
          align: 'center',
        },
        {
          title: '角色',
          dataIndex: 'cash_role',
          width:200,
          align: 'center',
        },
        {
          title: '支付宝号',
          dataIndex: 'pay',
          width:200,
          align: 'center',
        },
        {
          title: '申请时间',
          dataIndex: 'apply_time',
          width:200,
          align: 'center',
        },
        {
          title: '提现金额/元',
          dataIndex: 'cash_money',
          width:200,
          align: 'center',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width:200,
          align: 'center',
          render: (status,tags) => (
            <div style={{width:200,height:100,backgroundColor:'rgba(22, 155, 213, 1)',}}>
              <h4 style={{color:'#ffffff'}}>同意提现</h4>
            </div>
          ),
        },
        {
          title: '提现状态',
          dataIndex: 'cash_status',
          width:200,
          align: 'center',
        },
      ]
    },
    // 消息管理
    message_manager: {
      mes_record: [
        {
          title: '申请商',
          dataIndex: 'appyer',
          width:200,
          align: 'center',
        },
        {
          title: '申请商账号',
          dataIndex: 'applyer_account',
          width:200,
          align: 'center',
        },
        {
          title: '消息种类',
          dataIndex: 'mes_class',
          width:200,
          align: 'center',
        },
        {
          title: '消息内容',
          dataIndex: 'mes_content',
          width:300,
          align: 'center',
        },
      ]
    }
   
}
