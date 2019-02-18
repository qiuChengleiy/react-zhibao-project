import { query,test,sends } from '../services/example';
import { routerRedux } from 'dva/router'

// test('posts').then((data) => {  //异步
// 	console.log(data.data[0])   
// })

console.log(query().then(function(res) {
	console.log(res)
}))

sends().then(function(res){
	console.log(res);
})

export default {
	namespace:'count',
	state:{
		record:0,
		current:0,
	},
	effects: {    // 额外的触发一个异步
		*add({payload:todo},{call,put,select}) {
			yield call(delay,1000);   // 执行函数
			yield put({ type:'minus' },{ payload:todo});  // dispatch(action)
			yield select((state) => { console.log(state.count,state.modelName) })  // select 可以获取model里的所有state
		},
		*index(action,{call,put}) {
			yield put(routerRedux.push({
				pathname:'/',
				query:{
					page:2,
				}
			}));  //实现监听跳转
		}
	},

	 reducers: {
	   add(state,action) {
	     const newCurrent = state.current + 1;
	     return { ...state,
	       record: newCurrent > state.record ? newCurrent : state.record,
	       current: newCurrent,
	       test:action.payload,
	     };
	   },
	   minus(state) {
	     return { ...state, current: state.current - 1};
	   },
	   test(state,action) {
	   	return {...state,...action.data}
	   }
   },
   subscriptions:{
   	//监听地址
   	setup({dispatch,history}) {
   		history.listen(location => {
			console.log(location.query);  // 获取参数  
   			if( location.pathname.includes('test')) {
   				dispatch({type:'index'})
				test('posts').then((res) => {  //异步
					dispatch({type:'test',data:res});  
				})
   			}
   		})
   	},
   	

   }
}




function delay(timeout){
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  })
}

 //代理设置
 // "proxy": {
 //    "/": {
 //      "target": "http://localhost:3000/",
 //      "changeOrigin": true
 //    }
 //  },




