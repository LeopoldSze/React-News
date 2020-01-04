const {exec} = require("../db/mysql");


// 根据分类
const getKindsInfo = ()=>{
    let sql = `SELECT * from tab_kinds`;
    console.log("sql",sql);
    return exec(sql);
};

module.exports = {getKindsInfo};