/**
 * 应用骨架
 * time: 2018-09-07 by qiuchenglei
 */
import React from 'react';
import './IndexPage.css';
import PropTypes from 'prop-types';
import { platformArr,ManufacturerArr,DistributorArr } from '../config';   // 平台管理员相关配置
import { renderPagePlatForm ,} from './renderPageController';  // 页面渲染控制器

// 引入UI相关组件
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { platform } from 'os';
import { Avatar } from 'antd';
import { Modal, Button } from 'antd';

const confirm = Modal.confirm;
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class IndexPage extends React.Component {
  state = {
    collapsed: false,
    route: 'accountManager',  // 路由传来的参数
    title: {t1: '平台管理员',t2:'账号管理导航',t3:'账号管理'},
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  // 路由页面渲染
  renderPage(id) {
    return renderPagePlatForm(id);   //平台管理员
  }

  exit(e) {
    // 退出提示
    confirm({
      title: '注销提示',
      content: '您确定要退出吗？',
      onOk() {
        sessionStorage.removeItem('user_data');
        e.push('/');
      },
      onCancel() {
        return;
      },
    });
  }

  componentDidMount() {
    const session_data = JSON.parse(sessionStorage.getItem('user_data'));
    console.log(session_data);
    if(session_data.code !== '1') {
      this.props.parm.prop.push('/');
    }
   // console.log(this.props.parm)
    this.setState({route:this.props.parm.id})
  }

  render() {
    const { prop } = this.props.parm;
    const session_data = JSON.parse(sessionStorage.getItem('user_data'));

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

        {/* 侧栏导航 */}

            <SubMenu key="sub1" title={<span><Icon type="user" /><span>平台管理员</span></span>}>
              <MenuItemGroup key="g1" title="账号管理导航">
                <Menu.Item key="1" onClick={ () => {this.setState({title:platformArr[0],route:'accountManager'}); prop.push('/nav/accountManager')}}>账号管理</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g2" title="权限管理">
                <Menu.Item key="2" onClick={ () => {this.setState({title:platformArr[1],route:'roleManager'});prop.push('/nav/roleManager') }}>角色管理</Menu.Item>
                <Menu.Item key="3" onClick={ () => {this.setState({title:platformArr[2],route:'adminManager'});prop.push('/nav/adminManager') }}>管理员设置</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g3" title="订单统计">
                <Menu.Item key="4" onClick={ () => {this.setState({title:platformArr[3],route:'orderManager'});prop.push('/nav/orderManager')}}>销售订单</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g4" title="质保卡申请">
                <Menu.Item key="5" onClick={ () => { this.setState({title:platformArr[4],route:'zbManager'});prop.push('/nav/zbManager')}}>质保卡申请</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g5" title="其他设置">
                <Menu.Item key="6" onClick={ () => {this.setState({title:platformArr[5],route:'swiperManager'},);prop.push('/nav/swiperManager') }}>轮播图管理</Menu.Item>
                <Menu.Item key="7" onClick={ () => {this.setState({title:platformArr[6],route:'causeManager'});prop.push('/nav/causeManager') }}>退货原因设置</Menu.Item>
                <Menu.Item key="8" onClick={ () => {this.setState({title:platformArr[7],route:'orderSetManager'});prop.push('/nav/orderSetManager') }}>订单设置</Menu.Item>
                <Menu.Item key="9" onClick={ () => {this.setState({title:platformArr[8],route:'payManager'});prop.push('/nav/payManager') }}>支付设置</Menu.Item>
                <Menu.Item key="10" onClick={ () => {this.setState({title:platformArr[9],route:'shareManager'});prop.push('/nav/shareManager') }}>分享次数设置</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g6" title="资金管理">
                <Menu.Item key="11" onClick={ () => {this.setState({title:platformArr[10],route:'cashAccountManager'});prop.push('/nav/cashAccountManager') }}>资金账户</Menu.Item>
                <Menu.Item key="12" onClick={ () => {this.setState({title:platformArr[11],route:'cashApplyManager'});prop.push('/nav/cashApplyManager') }}>提现申请</Menu.Item>
                <Menu.Item key="13" onClick={ () => {this.setState({title:platformArr[12],route:'accountCashManager'});prop.push('/nav/accountCashManager') }}>账户资金</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g7" title="消息管理">
                <Menu.Item key="14" onClick={ () => {this.setState({title:platformArr[13],route:'mesModelManager'}); prop.push('/nav/mesModelManager')}}>消息模板</Menu.Item>
                <Menu.Item key="15" onClick={ () => {this.setState({title:platformArr[14],route:'mesRecordManager'});prop.push('/nav/mesRecordManager') }}>消息记录</Menu.Item>
              </MenuItemGroup>
            </SubMenu>

            <SubMenu key="sub2" title={<span><Icon type="team" /><span>经销商用户</span></span>}>
             <MenuItemGroup key="g8" title="用户管理">
                <Menu.Item key="16" onClick={ () => {this.setState({title:DistributorArr[0],route:'ordinaryUserPage'}); prop.push('/nav/ordinaryUserPage')}}>普通用户</Menu.Item>
                <Menu.Item key="17" onClick={ () => {this.setState({title:DistributorArr[1],route:'manufacturerUserPage'}); prop.push('/nav/manufacturerUserPage')}}>厂商用户</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g9" title="单据管理">

                  <SubMenu key="sub3" title="出售订单管理">
                    <Menu.Item key="69" onClick={() => {this.setState({title:DistributorArr[2],route:'saleOrderListPage'}); prop.push('/nav/saleOrderListPage')}}>出售订单管理</Menu.Item>
                    <Menu.Item key="18" onClick={() => {this.setState({route:'alreadyShippedPage'}); prop.push('/nav/alreadyShippedPage')}}>已发货订单</Menu.Item>
                    <Menu.Item key="19" onClick={() => {this.setState({route:'pendingDliveryPage'}); prop.push('/nav/pendingDliveryPage')}}>代发货订单</Menu.Item>
                    <Menu.Item key="20" onClick={() => {this.setState({route:'returnGoodsPage'}); prop.push('/nav/returnGoodsPage')}}>退货中订单</Menu.Item>
                    <Menu.Item key="21" onClick={() => {this.setState({route:'successOrderPage'}); prop.push('/nav/successOrderPage')}}>成功的的订单</Menu.Item>
                    <Menu.Item key="22" onClick={() => {this.setState({route:'closeOrderPage'}); prop.push('/nav/closeOrderPage')}}>关闭的订单</Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub4" title="售后管理" >
                    <Menu.Item key="70" onClick={ () => {this.setState({title:DistributorArr[3],route:'afterSalePage'}); prop.push('/nav/afterSalePage')}}>售后管理</Menu.Item>
                    <Menu.Item key="23" onClick={ () => {this.setState({route:'afterSaleDetailPage'}); prop.push('/nav/afterSaleDetailPage')}}>售后详情</Menu.Item>
                    <Menu.Item key="24" onClick={ () => {this.setState({route:'dismissalPage'}); prop.push('/nav/dismissalPage')}}>已驳回</Menu.Item>
                    <Menu.Item key="25" onClick={ () => {this.setState({route:'agreePage'}); prop.push('/nav/agreePage')}}>已同意</Menu.Item>
                    <Menu.Item key="26" onClick={ () => {this.setState({route:'inReturnPage'}); prop.push('/nav/inReturnPage')}}>退货中</Menu.Item>
                  </SubMenu>

                  <Menu.Item key="27" onClick={ () => {this.setState({title:DistributorArr[4],route:'hangUpApplyPage'}); prop.push('/nav/hangUpApplyPage')}}>挂账申请</Menu.Item>
                  <Menu.Item key="28" onClick={ () => {this.setState({title:DistributorArr[5],route:'hangUpManagerPage'}); prop.push('/nav/hangUpManagerPage')}}>挂账管理</Menu.Item>

              </MenuItemGroup>
            

              <MenuItemGroup key="g10" title="质保卡管理">
                <Menu.Item key="29" onClick={ () => {this.setState({title:DistributorArr[6],route:'zBCardNavsPage'});prop.push('/nav/zBCardNavsPage')}}>质保卡打印</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g11" title="分类管理">
                <Menu.Item key="30" onClick={ () => { this.setState({title:DistributorArr[7],route:'classficPage'});prop.push('/nav/classficPage')}}>类别管理</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g12" title="评价收藏">
                <Menu.Item key="31" onClick={ () => {this.setState({title:DistributorArr[8],route:'userEvaluationPage'});prop.push('/nav/userEvaluationPage') }}>用户评价</Menu.Item>
                <Menu.Item key="32" onClick={ () => {this.setState({title:DistributorArr[9],route:'collectUserPage'});prop.push('/nav/collectUserPage') }}>收藏用户</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g13" title="商品管理">

                <SubMenu key="sub5" title="商品管理">
                    <Menu.Item key="71" onClick={ () => {this.setState({title:DistributorArr[10],route:'goodsManagerPage'}); prop.push('/nav/goodsManagerPage')}}>商品管理</Menu.Item>
                    <Menu.Item key="33" onClick={ () => {this.setState({route:'goodsInfoPage'}); prop.push('/nav/goodsInfoPage')}}>商品信息查看</Menu.Item>
                </SubMenu>

                <SubMenu key="sub6" title="商品发布" 
                onClick={ () => {this.setState({title:DistributorArr[11],route:'goodsReleasePage'}); prop.push('/nav/goodsReleasePage')}}>
                    <Menu.Item key="34">修改商品信息</Menu.Item>
                </SubMenu>

                 <Menu.Item key="35" onClick={ () => {this.setState({title:DistributorArr[12],route:'specificationPage'}); prop.push('/nav/specificationPage')}}>规格管理</Menu.Item>
                 <Menu.Item key="36" onClick={ () => {this.setState({title:DistributorArr[13],route:'argumentPage'}); prop.push('/nav/argumentPage')}}>参数管理</Menu.Item>

              </MenuItemGroup>

              <MenuItemGroup key="g14" title="资金管理">
                <Menu.Item key="37" onClick={ () => {this.setState({title:DistributorArr[14],route:'incomePage'}); prop.push('/nav/incomePage')}}>收入记录</Menu.Item>
                <Menu.Item key="38" onClick={ () => {this.setState({title:DistributorArr[15],route:'cashsPage'});prop.push('/nav/cashsPage') }}>提现记录</Menu.Item>
                <Menu.Item key="39" onClick={ () => {this.setState({title:DistributorArr[16],route:'applysPage'});prop.push('/nav/applysPage') }}>提现申请</Menu.Item>
              </MenuItemGroup>

               <MenuItemGroup key="g15" title="消息管理">
                <Menu.Item key="40" onClick={ () => {this.setState({title:DistributorArr[17],route:'messageRecordPage'}); prop.push('/nav/messageRecordPage')}}>消息记录</Menu.Item>
              </MenuItemGroup>

            </SubMenu>

            <SubMenu key="sub7" title={<span><Icon type="team" /><span>厂商管理员</span></span>}>

            <MenuItemGroup key="g16" title="厂商管理导航">
                <Menu.Item key="41" onClick={ () => {this.setState({title:ManufacturerArr[0],route:'distributorUserPage'}); prop.push('/nav/distributorUserPage')}}>经销商用户管理</Menu.Item>
                <Menu.Item key="42" onClick={ () => {this.setState({title:ManufacturerArr[1],route:'distributorRequestPage'}); prop.push('/nav/distributorRequestPage')}}>经销商请求</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g9" title="权限设置">
                  <Menu.Item key="43" onClick={ () => {this.setState({title:ManufacturerArr[2],route:'roleManager1'}); prop.push('/nav/roleManager1')}}>角色管理</Menu.Item>
                  <Menu.Item key="44" onClick={ () => {this.setState({title:ManufacturerArr[3],route:'adminManager1'}); prop.push('/nav/adminManager1')}}>管理员设置</Menu.Item>
              </MenuItemGroup>
            
              <MenuItemGroup key="g17" title="商品管理">
                  <SubMenu key="sub8" title="商品管理">
                    <Menu.Item key="72" onClick={ () => {this.setState({title:ManufacturerArr[4],route:'goodsManagerPage1'}); prop.push('/nav/goodsManagerPage1')}}>商品管理</Menu.Item>
                    <Menu.Item key="45" onClick={ () => {this.setState({route:'goodsInfoPage1'}); prop.push('/nav/goodsInfoPage1')}}>商品信息查看</Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub9" title="商品发布" 
                onClick={ () => {this.setState({title:ManufacturerArr[5],route:'goodsReleasePage1'}); prop.push('/nav/goodsReleasePage1')}}>
                    <Menu.Item key="46">修改商品信息</Menu.Item>
                   </SubMenu>

                 <Menu.Item key="47" onClick={ () => {this.setState({title:ManufacturerArr[6],route:'specificationPage1'}); prop.push('/nav/specificationPage1')}}>规格管理</Menu.Item>
                 <Menu.Item key="48" onClick={ () => {this.setState({title:ManufacturerArr[7],route:'argumentPage1'}); prop.push('/nav/argumentPage1')}}>参数管理</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g18" title="质保卡管理">
                <Menu.Item key="49" onClick={ () => { this.setState({title:ManufacturerArr[8],route:'zBCardNavsPage1'});prop.push('/nav/zBCardNavsPage1')}}>质保卡打印</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g19" title="分类管理">
                <Menu.Item key="50" onClick={ () => {this.setState({title:platformArr[9],route:'classficPage1'});prop.push('/nav/classficPage1') }}>类别管理</Menu.Item>
              </MenuItemGroup>

              <MenuItemGroup key="g20" title="单据管理">

                <SubMenu key="sub10" title="出售订单管理">
                    <Menu.Item key="73" onClick={() => {this.setState({title:DistributorArr[2],route:'saleOrderListPage1'}); prop.push('/nav/saleOrderListPage1')}}>出售订单管理</Menu.Item>
                    <Menu.Item key="51" onClick={() => {this.setState({route:'alreadyShippedPage1'}); prop.push('/nav/alreadyShippedPage1')}}>已发货订单</Menu.Item>
                    <Menu.Item key="52" onClick={() => {this.setState({route:'pendingDliveryPage1'}); prop.push('/nav/pendingDliveryPage1')}}>代发货订单</Menu.Item>
                    <Menu.Item key="53" onClick={() => {this.setState({route:'returnGoodsPage1'}); prop.push('/nav/returnGoodsPage1')}}>退货中订单</Menu.Item>
                    <Menu.Item key="54" onClick={() => {this.setState({route:'successOrderPage1'}); prop.push('/nav/successOrderPage1')}}>成功的的订单</Menu.Item>
                    <Menu.Item key="55" onClick={() => {this.setState({route:'closeOrderPage1'}); prop.push('/nav/closeOrderPage1')}}>关闭的订单</Menu.Item>
                  </SubMenu>

                  <SubMenu key="sub11" title="售后管理" >
                    <Menu.Item key="74" onClick={ () => {this.setState({title:DistributorArr[3],route:'afterSalePage1'}); prop.push('/nav/afterSalePage1')}}>售后管理</Menu.Item>
                    <Menu.Item key="56" onClick={ () => {this.setState({route:'afterSaleDetailPage1'}); prop.push('/nav/afterSaleDetailPage1')}}>售后详情</Menu.Item>
                    <Menu.Item key="57" onClick={ () => {this.setState({route:'dismissalPage1'}); prop.push('/nav/dismissalPage1')}}>已驳回</Menu.Item>
                    <Menu.Item key="58" onClick={ () => {this.setState({route:'agreePage1'}); prop.push('/nav/agreePage1')}}>已同意</Menu.Item>
                    <Menu.Item key="59" onClick={ () => {this.setState({route:'inReturnPage1'}); prop.push('/nav/inReturnPage1')}}>退货中</Menu.Item>
                  </SubMenu>

                  <Menu.Item key="60" onClick={ () => {this.setState({title:DistributorArr[4],route:'hangUpApplyPage1'}); prop.push('/nav/hangUpApplyPage1')}}>挂账申请</Menu.Item>
                  <Menu.Item key="61" onClick={ () => {this.setState({title:DistributorArr[5],route:'hangUpManagerPage1'}); prop.push('/nav/hangUpManagerPage1')}}>挂账管理</Menu.Item>

              </MenuItemGroup>

              <MenuItemGroup key="g21" title="资金管理">
                <Menu.Item key="62" onClick={ () => {this.setState({title:DistributorArr[14],route:'incomePage1'}); prop.push('/nav/incomePage1')}}>收入记录</Menu.Item>
                <Menu.Item key="63" onClick={ () => {this.setState({title:DistributorArr[15],route:'cashsPage1'});prop.push('/nav/cashsPage1') }}>提现记录</Menu.Item>
                <Menu.Item key="64" onClick={ () => {this.setState({title:DistributorArr[16],route:'applysPage1'});prop.push('/nav/applysPage1') }}>提现申请</Menu.Item>
              </MenuItemGroup>

               <MenuItemGroup key="g22" title="其他设置">
                <Menu.Item key="65" onClick={ () => {this.setState({title:ManufacturerArr[17],route:'levelSetPage'}); prop.push('/nav/levelSetPage')}}>星级设置</Menu.Item>
              </MenuItemGroup>

               <MenuItemGroup key="g23" title="店铺管理">
                <Menu.Item key="66" onClick={ () => {this.setState({title:ManufacturerArr[18],route:'shopNavPage'}); prop.push('/nav/shopNavPage')}}>商品信息</Menu.Item>
              </MenuItemGroup>

               <MenuItemGroup key="g24" title="货物追踪">
                <Menu.Item key="67" onClick={ () => {this.setState({title:ManufacturerArr[19],route:'cargoTrackingPage'}); prop.push('/nav/cargoTrackingPage')}}>货物追踪</Menu.Item>
              </MenuItemGroup>

               <MenuItemGroup key="g25" title="消息管理">
                <Menu.Item key="68" onClick={ () => {this.setState({title:ManufacturerArr[20],route:'messageRecordPages'}); prop.push('/nav/messageRecordPages')}}>消息记录</Menu.Item>
              </MenuItemGroup>

            </SubMenu>
           
          </Menu>
        </Sider>
        <Layout style={{background:"#ffffff",}}>
          
        {/* 内容区块 */}
      
          <Header style={{padding: 5,height:'60px',background:"#ffffff",}}>
            <div style={{ width:'100%',height:'60px',position:'fixed',backgroundColor: '#ffffff',}}>
              <img src={require('../assets/logo.png')} alt="logo" style={{width:'80px',height:'100%',marginLeft:'10px',}}/>
              <span style={{color:'#333333',zIndex:111,cursor:"pointer",fontSize:'20px',marginLeft:'10px'}}>&nbsp;&nbsp;质保后台管理系统</span>
              <Avatar shape="circle" size="large" src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1256225134,3204656128&fm=27&gp=0.jpg' style={{marginLeft:"50%",marginRight:'10px',}}/>
              <span style={{color:'#001529',zIndex:111,cursor:"pointer"}}>{session_data.data.nickname}</span>
              <span style={{color:'#001529',zIndex:111,cursor:"pointer"}} onClick={() => this.exit(prop)}>&nbsp;&nbsp;登录/注销</span>
            </div>
          </Header>

      {/* 标题 */}
           <Header style={{padding: 0,height:'40px',marginTop:'15px',background:"#ffffff",}}>
            <div style={{ width:'100%',height:'40px',backgroundColor: 'rgba(244, 244, 244, 1)',position:'fixed'}}>
             <div style={{width:"10px",height:"40px",backgroundColor: 'rgba(102, 204, 204, 1)',position:'fixed'}}>
               <h3 style={{position:'fixed',marginLeft:'20px',fontSize:'15px',lineHeight:'40px'}}>{this.state.title.t3}</h3>
             </div>
            </div>
          </Header>

          <Content style={{ margin: '110px 16px' ,position:'fixed'}}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{this.state.title.t1}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.title.t2}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.title.t3}</Breadcrumb.Item>
            </Breadcrumb>
        {/* 渲染区 */}
            <div style={{width:'80%',background: '#fff', minHeight: 360,height:'80%',position:'fixed' }}>
              {this.renderPage(this.state.route)}
            </div>
          </Content>
          <Footer style={{ width:'80%',textAlign: 'center' ,position:'fixed',bottom:0,background:"#ffffff",fontSize:12}}>
           zb ©2018 Created by 2018-09-07
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default IndexPage;
