/**
 * @description 博客首页路由
 * @author Alen
 */

const router = require('koa-router')()
const { create } = require('../../controller/blog-home')
const { loginCheck } = require('../../middlewares/loginChecks')

router.prefix('/api/blog')

// 创建博客路由
router.post('/create', loginCheck, async (ctx, next) => {
  const { content, image } = ctx.request.body
  const { id: userId } = ctx.session.userInfo
  ctx.body = await create({ userId, content, image })
})

module.exports = router