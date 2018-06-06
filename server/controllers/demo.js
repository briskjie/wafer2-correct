
const {mysql}=require('../qcloud')
module.exports = async ctx => {

  var imageInfo = {
    imgUrl: "sdjsijdiwsj"
  }
  await mysql("album").insert(imageInfo)
  var res = await mysql("album").where('id', 1)
  ctx.state.data = res
}