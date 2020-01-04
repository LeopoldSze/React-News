const {exec} = require("../db/mysql");


// 根据分类
const getSlideInfo = ()=>{
    let sql = `SELECT * from tab_slide`;
    console.log("sql",sql);
    return exec(sql);
};

module.exports = {getSlideInfo};