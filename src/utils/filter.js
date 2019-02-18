/**
 * 数据筛选
 * time: 2018-09-08 by qiuchenglei
 */


/**
 * @param { Object } data  需要筛选数据
 * @param { number } term  筛选的条件
 */
export function userFilter(code,data,term) {
   // console.log(code,data,term);
    switch(code) {
        case '0': 
           let user_result = data.filter(function(item,index,array){   
           // console.log(item);
            return item.account == term ;
        });
        return user_result;
           break;
        case '1': 
           let user_result1 = data.filter(function(item,index,array){   
           // console.log(item);
            return item.name == term ;
        });
        return user_result1;
           break;
        case '2': 
           let user_result2 = data.filter(function(item,index,array){   
           // console.log(item);
            return item.phone == term ;
        });
        return user_result2;
           break;
        default:
            let user_default = data.filter(function(item,index,array){   
                // console.log(item);
                return item.account == term ;
            });
        return user_default;
           break;
    }
}


