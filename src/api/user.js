import request from '@/utils/request'
import { getToken } from '@/utils/token'
// 登录
export const login = ({ username, password }) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 获取用户的信息资料
export const getUserData = () => {
  return request({
    url: '/user',
    method: 'GET',
    headers: {
      authorization: getToken()
    }
  })
}
