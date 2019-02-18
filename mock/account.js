/**
 * 账户请求相关数据mock
 * time: 2018-09-08 by qiuchenglei
 */
'use strict';
const qs = require('qs');
const Mock=require('mockjs');

const data = [];

// 用户账户数据
function account() {
    for (let i = 0; i < 10; i++) {
        data.push({
          key: i,
          account: `187081792938${i}`,
          password: 'abcd123212',
          role: `厂商`,
          name: '李四',
          phone: `1870612579${i}`,
          bankCard: 1111111111111111111,
          qualifications: `https://www.baidu.com/img/baidu_jgylogo3.gif`,
          location: '江苏无锡新区',
          date: `2018-09-0${i}`,
          ID: 321322199701018618,
          id_front: `https://www.baidu.com/img/baidu_jgylogo3.gif`,
          id_reverse: `https://www.baidu.com/img/baidu_jgylogo3.gif`,
          status: true,
        });
      }
}

module.exports={
    // 获取账户相关信息
    [`GET /api/account`](req,res){
      //  account.apply(null);
        res.status(200).json(data);
    },

    // 用户状态
    [`GET /api/account/user_status_0`](req,res){
       
        data[0].status ?  data[0].status = false :  data[0].status = true;
        res.status(200).json(data[0].status);
    },

}