import request from "./request";
export default function getClassifyAndTag(type) {
  return request.post('/api/article/getAllTagAndCategory')
    .then(res => {
      console.log(res);
      if(type === 'categorys') {
        // console.log(res.data.datas[0].classifys);
        return res.data.datas[0].categorys
      } else if (type === 'tags') {
        return res.data.datas[0].tags
      } else {
        throw new Error("参数错误，应为'classify'或'tag'")
      }
    })
}
