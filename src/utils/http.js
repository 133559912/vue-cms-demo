import axios from 'axios'
axios.defaults.timout = 15 * 1000
axios.defaults.baseURL = 'http://localhost:8081/'

axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axios
