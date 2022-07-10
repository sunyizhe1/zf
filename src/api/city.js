import request from '@/utils/request'

/**
 * 获取城市列表数据
 * @param {*} level
 * @returns
 */
export const getCityList = level => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

/**
 * 热门城市
 */
export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}
