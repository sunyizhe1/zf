import request from '@/utils/request'

// 轮播图
export const getSwiper = () => {
  return request({
    url: '/home/swiper'
  })
}

// 租房小组
export const getGroup = (area) => {
  return request({
    url: '/home/groups',
    params: {
      area
    }
  })
}
