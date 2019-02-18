/**
 * 账户请求相关
 * time: 2018-09-08 by qiuchenglei
 */

import request from '../utils/request';
import qs from 'qs';

/**
 *  @param { String } params 
 */


 // 用户登录
export function login(url,data) {      // post 请求
	console.log(url,data);
	return request(`/${url}`,{
		method:'POST',
		headers: new Headers({
		    'Content-Type': 'application/json'
		  }),
		body:JSON.stringify({
			...data,
		}), 
	})
}

 //账户表格数据
export function queryAccount(params) {
   return request(`/${params}`);
}

// 用户使用状态管理
export function userStatus(params) {
    return request(`/${params}`);
 }






export function test(params) {
	console.log(`/${qs.stringify(params)}`);
	return request(`/${params}`);
}

export function sends() {      // post 请求
	return request('/api/users',{
		method:'POST',
		headers: new Headers({
		    'Content-Type': 'application/json'
		  }),
		body:JSON.stringify({
			username:'xiaohong',
			age:'20',
		}), 
	})
}
