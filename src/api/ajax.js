import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(async (resolve, reject) => {
    let promise
    // 执行ajax
    if (type === 'GET') {
      // 用于拼接url
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        // dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        dataStr = dataStr.substring(0, dataStr.length - 1)

        url = url + '?' + dataStr
      }
      promise = await axios.get(url)
    } else {
      promise = await axios.post.post(url, data)
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
