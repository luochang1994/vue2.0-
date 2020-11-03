import http from './index'

export const getList = (params) => http({
  url: '/device-os/area/list',
  method: 'GET',
  params,
})

export const create = (data) => http({
  url: '/device-os/area/add',
  method: 'POST',
  data,
})
