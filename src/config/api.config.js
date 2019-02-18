/**
 * API请求配置
 * time: 2018-09-08 by qiuchenglei
 */

const api = 'api';

//用户登录
export const Login = `${api}/manage/managelogin`;


 // 平台用户管理API
export const PlatformManager = {
    account:[{
        getTableData:`${api}/account`,
        userStatus: (i) => { return `${api}/account/user_status_${i}`},
    }],

}




