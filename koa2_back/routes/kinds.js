const router = require('koa-router')();
const {SuccessMsg,ErrorMsg} = require("../mess/BaseMess");
const {getKindsInfo} = require("../daos/kindsDao");

router.prefix('/news');

// 分类列表
router.get('/kinds',async(ctx,next)=>{
    let listData = await getKindsInfo(ctx.query);
    console.log("listdata:",listData);
    ctx.body = new SuccessMsg(listData);
});

module.exports = router;