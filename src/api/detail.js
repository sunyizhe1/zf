import request from '@/utils/request'

export const getCertainRoomData = (id) => {
  return request({
    method: 'GET',
    url: `/houses/${id}`
  })
}
