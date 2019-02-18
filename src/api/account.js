/**
 * 用户请求处理 
 * time: 2018-09-08 by qiuchenglei
 */

import { Login,PlatformManager } from '../config';
import { login,queryAccount,userStatus } from '../services';


//登录
export function login_(data) {
    return login(Login,{...data});
}

//获取表格用户数据
export function accountTable() {
    const getDataParams = PlatformManager.account[0].getTableData; 

    return queryAccount(getDataParams);
}

//用户状态
export function onChange(i,tags) {
    const user_status_url = PlatformManager.account[0].userStatus(tags.key); 
    const content = JSON.stringify(tags);  // 选中的用户内容
    console.log(`switch to ${content},${user_status_url}`);
   // console.log(userStatus(user_status_url))

    return userStatus(user_status_url);
    
}
