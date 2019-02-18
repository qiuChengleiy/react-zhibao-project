import request from '../utils/request';
import qs from 'qs';

console.log(qs.stringify({a:1,b:2}))

export function query() {
  return request('/api/users');
}

//test 

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
