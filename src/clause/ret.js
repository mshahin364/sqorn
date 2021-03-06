const { build } = require('./util')

module.exports = ctx => {
  if (!ctx.ret) return
  const txt = build(ctx, ctx.ret)
  return txt && `returning ${txt}`
}
