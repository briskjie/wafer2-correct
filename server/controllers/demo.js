
const {mysql}=require('../qcloud')
module.exports = async ctx => {
  ctx.state.data = {
    msg:'hello world'
  }
}