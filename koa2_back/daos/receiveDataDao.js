const {exec} = require("../db/mysql");


// 根据分类
const getDataInfo = (data)=>{
    let sql = `SELECT * from tab_news_data WHERE channel="${data.kind}"`;
    console.log("sql",sql);
    return exec(sql);
};


// 加载更多
const getMoreInfo = (kind,page,limit)=>{
    let start = parseInt(page-1)*parseInt(limit);
    let sql = `SELECT * from tab_news_data WHERE channel="${kind}" limit ${start},${limit}`;
    console.log("sql:",sql);
    return exec(sql);
};

// 获取一条
const getOneInfo = (data)=>{
    let sql = `SELECT * from tab_news_data WHERE id="${data.id}"`;
    console.log("sql",sql);
    return exec(sql);
};

module.exports = {getDataInfo,getMoreInfo,getOneInfo};