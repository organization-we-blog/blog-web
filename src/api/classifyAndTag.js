import request from "./request";
export default function getClassifyAndTag(type) {
  return request.post('/api/article/getTagAndClassify')
    .then(res => {
    if(type === 'classify') {
      return res.data.datas[0].classify
    } else if (type === 'tag') {
      return res.data.datas[0].tag
    } else {
      throw new Error("参数错误，应为'classify'或'tag'")
    }
  })
}
