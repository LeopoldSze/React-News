const {exec} = require("../db/mysql");

// 登录
const getUserInfo = (data)=>{
    let sql = `select * from tab_user where name = "${data.name}"`;
    //console.log("sql",sql);
    return exec(sql);
};


// 插入传递的用户数据
const insertUserInfo = (data)=>{
    let sql = `insert into tab_user values(null,"${data.name}","${data.pass}","${data.avatar}",
                "${data.email}","${data.provider}","${data.provider_id}","${data.token}")`;
    return exec(sql);
};

module.exports = {getUserInfo,insertUserInfo};