
var CryptoJS = require("crypto-js");
var request = require('request');
var querystring = require('querystring');
let data = [];

// 云市场分配的密钥Id
var secretId = "AKID1t6pWelCPFLuZUyEEo6204PZZGBJE8iD32CW";
// 云市场分配的密钥Key
var secretKey = "528ynopbvjcg6noe47h2ifs39nltndDmrybnx9cm";
var source = "market";

// 签名
var datetime = (new Date()).toGMTString();
var signStr = "x-date: " + datetime + "\n" + "x-source: " + source;
var sign = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(signStr, secretKey))
var auth = 'hmac id="' + secretId + '", algorithm="hmac-sha1", headers="x-date x-source", signature="' + sign + '"';

// 请求方法
var method = 'GET';
// 请求头
var headers = {
    "X-Source": source,
    "X-Date": datetime,
    "Authorization": auth,
}
// 查询参数
var queryParams = {
    'channelId': '',
    'channelName': '互联网焦点',
    'needAllList': '1',
    'needContent': '1',
    'page': '1',
    'title': ''}
// body参数（POST方法下）
var bodyParams = {
}
// url参数拼接
var url = 'https://service-o5ikp40z-1255468759.ap-shanghai.apigateway.myqcloud.com/release/news';
if (Object.keys(queryParams).length > 0) {
    url += '?' + querystring.stringify(queryParams);
}

var options = {
    url: url,
    timeout: 5000,
    method: method,
    headers: headers
}
if (['POST', 'PUT', 'PATCH'].indexOf(method) != -1) {
    options['body'] = querystring.stringify(bodyParams);
    options['headers']['Content-Type'] = "application/x-www-form-urlencoded";
}

let result = ()=>{
    return request(options, function (error, response, body) {
        if (error !== null) {
            console.log('error:', error);
            return;
        }
        data = JSON.parse(body).showapi_res_body.pagebean.contentlist;
        for(let i=0; i< data.length; i++){
            let sql = ""
        }
        console.log("data:",data);
        return data;
    });
};


result();
// const getNewsData = function () {
//     let news = result();
//     console.log("news:",news);
//     // let sql = `select * from tab_news where kind = "${data.kind}" GROUP BY kind `;
//     //return exec(sql);
// };

// module.exports = {getNewsData};