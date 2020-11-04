import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
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
      console.log(url, '发送get请求')
      promise = axios.get(url)
    } else {
      console.log(url, '发送post请求')
      promise = axios.post(url, data)
    }
    promise.then((res) => {
      resolve(res.data)
    }).catch((error) => {
      reject(error)
    })
  })
}
