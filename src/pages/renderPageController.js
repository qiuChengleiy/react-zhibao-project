/**
 * 应用页面控制器
 * time: 2018-09-11 by qiuchenglei
 */
import { 
  // 平台管理员相关
   AccountManager, RolePage, AdminPage,SaleListPage, 
   ZBcardPage,SwiperPage,ReturnCausePage,OrderSetPage,
   PaySetPage,ShareSetPage,CashAccountPage,CashApplyPage,
   MoneyAccountPage,MesModelPage,MesRecordPage,

   // 经销商相关
   OrdinaryUserPage,ManufacturerUserPage,SaleOrderListPage,
   AfterSalePage,
   HangUpApplyPage,HangUpManagerPage,ZBCardNavsPage,ClassficPage,AlreadyShippedPage,PendingDliveryPage,ReturnGoodsPage,
   SuccessOrderPage,CloseOrderPage,
   AfterSaleDetailPage,AgreePage,DismissalPage,InReturnPage,
   UserEvaluationPage,CollectUserPage,GoodsInfoPage,
   ArgumentPage,SpecificationPage,GoodsManagerPage,GoodsReleasePage,
   IncomePage,CashsPage,ApplysPage,MessageRecordPage,

   // 厂商相关
   DistributorUserPage,DistributorRequestPage,RolePage_,AdminPage_,
   GoodsInfoPage1,GoodsManagerPage1,GoodsReleasePage1,ArgumentPage1,SpecificationPage1,
   ZBCardNavsPages,ClassficPages,SaleOrderListPage1,AfterSalePage1,
   HangUpApplyPage1,HangUpManagerPage1,ZBCardNavsPage1,ClassficPage1,AlreadyShippedPage1,PendingDliveryPage1,ReturnGoodsPage1,
   SuccessOrderPage1,CloseOrderPage1,AfterSaleDetailPage1,AgreePage1,DismissalPage1,InReturnPage1,
   IncomePage1,CashsPage1,ApplysPage1,LevelSetPage,ShopNavPage,CargoTrackingPage,MessageRecordPages,
   
} from './routes.config';

 /**
  * 
  * @param { String } id  ‘路由参数’
  */
 export function renderPagePlatForm(id) {
    switch(id) {
      // 平台管理员相关
      case 'accountManager' : 
        return <AccountManager />
        break;
      case 'roleManager' :
        return <RolePage />
        break;
      case 'adminManager' :
        return <AdminPage />
        break;
      case 'orderManager' :
        return <SaleListPage />
        break;
      case 'zbManager' :
        return <ZBcardPage />
        break;
      case 'swiperManager' :
        return <SwiperPage />
        break;
      case 'causeManager' :
        return <ReturnCausePage />
        break;
      case 'orderSetManager' :
        return <OrderSetPage />
        break;
      case 'payManager' :
        return <PaySetPage />
        break;
      case 'shareManager' :
        return <ShareSetPage />
        break;
      case 'cashAccountManager' :
        return <CashAccountPage />
        break;
      case 'cashApplyManager' :
        return <CashApplyPage />
        break;
      case 'accountCashManager' :
        return <MoneyAccountPage />
        break;
      case 'mesModelManager' :
        return <MesModelPage />
        break;
      case 'mesRecordManager' :
        return <MesRecordPage />
        break;
      // 经销商用户
      case 'ordinaryUserPage': 
        return <OrdinaryUserPage />
        break;
      case 'manufacturerUserPage':
        return <ManufacturerUserPage />
        break;
      case 'saleOrderListPage':  // ------  订单管理
        return <SaleOrderListPage />
        break;
      case 'alreadyShippedPage':  
        return <AlreadyShippedPage />
        break;
      case 'pendingDliveryPage':
        return <PendingDliveryPage />
        break;
      case 'returnGoodsPage':
        return <ReturnGoodsPage />
        break;
      case 'successOrderPage':
        return <SuccessOrderPage />
        break;
      case 'closeOrderPage':
        return <CloseOrderPage />
        break;
      case 'afterSalePage':  // ------售后 
        return <AfterSalePage />
        break;
      case 'afterSaleDetailPage':
        return <AfterSaleDetailPage />
        break;
      case 'agreePage':
        return <AgreePage />
        break;
      case 'dismissalPage':
        return <DismissalPage />
        break;
      case 'inReturnPage':
        return <InReturnPage />
        break;
      case 'hangUpApplyPage':
        return <HangUpApplyPage />
        break;
      case 'hangUpManagerPage':
        return <HangUpManagerPage />
        break;
      case 'zBCardNavsPage':   // --- 质保卡
        return <ZBCardNavsPage />
        break;
      case 'classficPage': 
        return <ClassficPage />
        break;
      case 'userEvaluationPage':
        return <UserEvaluationPage />
        break;
      case 'collectUserPage': 
        return <CollectUserPage />
        break;
      case 'goodsManagerPage':   // ----- 商品管理
        return <GoodsManagerPage />
        break;
      case 'goodsInfoPage':
        return <GoodsInfoPage />
        break;
      case 'goodsReleasePage':
        return <GoodsReleasePage />
        break;
      case 'argumentPage':
        return <ArgumentPage />
        break;
      case 'specificationPage':
        return <SpecificationPage />
        break;
      case 'incomePage':
        return <IncomePage />
        break;
      case 'cashsPage':
        return <CashsPage />
        break;
      case 'applysPage':
        return <ApplysPage />
        break;
      case 'messageRecordPage':
        return <MessageRecordPage />
        break;
      case 'distributorUserPage':  // ------    厂商相关
        return <DistributorUserPage />
        break;
      case 'distributorRequestPage':
        return <DistributorRequestPage />
        break;
      case 'roleManager1' :
        return <RolePage_ />
        break;
      case 'adminManager1' :
        return <AdminPage_ />
        break;
        case 'goodsManagerPage1':   // ----- 商品管理
        return <GoodsManagerPage1 />
        break;
      case 'goodsInfoPage1':
        return <GoodsInfoPage1 />
        break;
      case 'goodsReleasePage1':
        return <GoodsReleasePage1 />
        break;
      case 'argumentPage1':
        return <ArgumentPage1 />
        break;
      case 'specificationPage1':
        return <SpecificationPage1 />
        break;
      case 'zBCardNavsPage1':
        return <ZBCardNavsPages />
        break;
      case 'classficPage1': 
        return <ClassficPages />
        break;
        case 'saleOrderListPage1':  // ------  订单管理
        return <SaleOrderListPage1 />
        break;
      case 'alreadyShippedPage1':  
        return <AlreadyShippedPage1 />
        break;
      case 'pendingDliveryPage1':
        return <PendingDliveryPage1 />
        break;
      case 'returnGoodsPage1':
        return <ReturnGoodsPage1 />
        break;
      case 'successOrderPage1':
        return <SuccessOrderPage1 />
        break;
      case 'closeOrderPage1':
        return <CloseOrderPage1 />
        break;
      case 'afterSalePage1':  // ------售后 
        return <AfterSalePage1 />
        break;
      case 'afterSaleDetailPage1':
        return <AfterSaleDetailPage1 />
        break;
      case 'agreePage1':
        return <AgreePage1 />
        break;
      case 'dismissalPage1':
        return <DismissalPage1 />
        break;
      case 'inReturnPage1':
        return <InReturnPage1 />
        break;
      case 'hangUpApplyPage1':
        return <HangUpApplyPage1 />
        break;
      case 'hangUpManagerPage1':
        return <HangUpManagerPage1 />
        break;
      case 'incomePage1':   // ---- 资金管理
        return <IncomePage1 />
        break;
      case 'cashsPage1':
        return <CashsPage1 />
        break;
      case 'applysPage1':
        return <ApplysPage1 />
        break;
      case 'levelSetPage':
        return <LevelSetPage />
        break;
      case 'shopNavPage':
        return <ShopNavPage />
        break;
      case 'cargoTrackingPage':
        return <CargoTrackingPage />
        break;
      case 'messageRecordPages':
        return <MessageRecordPages />
        break;
      default:
        return <AccountManager />
        break;
    }
  }

