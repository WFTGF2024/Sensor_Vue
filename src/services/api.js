import axios from 'axios'

// 创建 axios 实例
const apiClient = axios.create({
  baseURL: 'https://api.example.com',  // 换成真实后端地址
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// 请求拦截器（如需添加 token）
apiClient.interceptors.request.use(config => {
  // const token = localStorage.getItem('token')
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// 响应拦截器（全局错误处理）
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error)
    return Promise.reject(error)
  }
)

export default {
  // 示例：获取列表
  getList(params) {
    return apiClient.get('/items', { params })
  },
  // 示例：获取详情
  getItem(id) {
    return apiClient.get(`/items/${id}`)
  },
  // 示例：创建
  createItem(data) {
    return apiClient.post('/items', data)
  },
  // …更多接口方法…
}
