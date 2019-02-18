'use strict';

const qs = require('qs');

const Mock=require('mockjs');

// 引入 mock js
let db=Mock.mock({
    'data|3-6':[{
        id:'@id',
        name:'@name',
        'age|18-32':1
    }]
});

module.exports={
    [`GET /api/users`](req,res){

        res.status(200).json(db);
    },

    [`GET /posts`](req,res){

        res.status(200).json(db);

    },

    [`POST /api/users`](req,res){

        let user=req.body;
        console.log(user);
        user.id=Mock.mock('@id');
        db.data.push(user);
        
        res.status(200).json(user);
    },
}