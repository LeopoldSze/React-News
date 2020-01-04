const router = require('koa-router')();
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {getDataInfo,getMoreInfo,getOneInfo} = require("../daos/receiveDataDao");

router.prefix('/news');

// 分类列表
router.get('/list',async(ctx,next)=>{
    let listData = await getDataInfo(ctx.query);
    console.log("listdata:",listData);
    ctx.body = new SuccessMsg(listData);
});

// 加载更多
router.get('/more',async(ctx,next)=>{
    let kind = ctx.query.kind;
    let page = ctx.query.page;
    let limit = ctx.query.limit;
    const data = await getMoreInfo(kind,page,limit);
    if(data){
        ctx.body = new SuccessMsg(data);
    }else{
        ctx.body = new ErrorMsg("查询失败");
    }
});

// 获取一条
router.get('/one',async(ctx,next)=>{
    let listData = await getOneInfo(ctx.query);
    console.log("listdata:",listData);
    ctx.body = new SuccessMsg(listData);
});


module.exports = router;