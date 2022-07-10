import request from '@/utils/request'

/**
 *
 * @param {*} param0
 * @returns 获取城市列表数据
 */
export const getHouseList = ({ cityId }) => {
  return request({
    url: '/houses',
    params: { cityId }
  })
}

/**
 *
 * @param {*} id
 * @returns 获取查询房屋数据
 */
export const getHouseScreen = (id) => {
  return request({
    url: '/area/map',
    params: {
      id
    }
  })
}

/**
 *
 * @param {*} id
 * @returns 获取筛选列表数据
 */
export const getHouseInquiry = ({ id }) => {
  return request({
    url: '/houses/condition',
    params: {
      id
    }
  })
}
