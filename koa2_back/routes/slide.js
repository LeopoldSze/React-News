const router = require('koa-router')();
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {getSlideInfo} = require("../daos/slideDao");

router.prefix('/news');

// 分类列表
router.get('/slide',async(ctx,next)=>{
    let listData = await getSlideInfo(ctx.query);
    console.log("listdata:",listData);
    ctx.body = new SuccessMsg(listData);
});

module.exports = router;