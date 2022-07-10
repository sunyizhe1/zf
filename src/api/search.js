import request from '@/utils/request'

/**
 * 小区关键词查询
 */
export const getSearch = ({ name, id }) => {
  return request({
    url: '/area/community',
    params: {
      name,
      id
    }
  })
}
