const { mysql } = require('../qcloud')
const { uploader } = require('../qcloud')

module.exports = async ctx => {
  // 获取上传之后的结果
  // 具体可以查看：
  const {imgUrl,imgKey}= await uploader(ctx.req)
  var imageInfo={}
  imageInfo.imgUrl = imgUrl
  imageInfo.imgKey = imgKey
  await mysql("album").insert(imageInfo)//将上传图片保存到数据库
  // var res = await mysql("album").where('id', 1)
  ctx.state.data = imageInfo
}
