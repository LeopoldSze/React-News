const router = require('koa-router')();
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {getUserInfo,insertUserInfo} = require("../daos/userDao");

router.prefix('/user');

// 登录
router.post('/login',async(ctx,next)=>{
    let listData = await getUserInfo(ctx.request.body);
    if(listData[0]){
        ctx.body = new SuccessMsg(listData,"登录成功");
    }else{
        ctx.body = new ErrorMsg(listData,"该账号不存在，请重试！");
    }
});

// 注册
router.post("/register",async (ctx,next)=>{
    let data = await getUserInfo(ctx.request.body);
    if(data[0]){
        ctx.body = new ErrorMsg("传递失败，账号已存在");
    }else{
        const result = insertUserInfo(ctx.request.body);
        ctx.body = new SuccessMsg("传递成功");
    }
});


module.exports = router;