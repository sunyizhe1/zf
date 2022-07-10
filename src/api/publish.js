import request from '@/utils/request'
import { getToken } from '@/utils/token'
// 发布房源
/**
 *
 * title：房源信息标题
 * description:房源概述
 * houseImg 房源图片。通过uploader本地上传给传图接口，再拿到传图接口返回的图片数据格式作为本接口的图片参数
 * oriented  朝向
 * supporting  房屋配置，在这里的格式为 '配置1|配置2|配置3'
 * price  房屋价格
 * roomType  房型
 * size 房屋面积
 * floor  楼层
 * community  地区id
 */
export const publishRoomData = (title, description, houseImg, oriented, supporting, price, roomType, size, floor, community) => {
  return request({
    url: '/user/houses',
    method: 'POST',
    headers: {
      Authorization: getToken()
    },
    data: {
      title, description, houseImg, oriented, supporting, price, roomType, size, floor, community
    }
  })
}

/**
 * 发布房屋所需的条件
 */
export const publishParams = () => {
  return request({
    url: '/houses/params'
  })
}
