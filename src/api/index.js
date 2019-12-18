import request from '@/request/request'

export function loop () {
  return request.post('v1.home/loopNewResult', {}, false)
}

export function getList (params) {
  return request.post('v1.home/resultList', params)
}

export function getList2 (params) {
  return request.post('v1.home/resultList2', params)
}

export function validate (params) {
  return request.post('v1.home/validateResult', params)
}

export function getChart () {
  return request.post('v1.home/getChartData')
}

export function getRichText (id) {
  return request.post('v1.home/getRichText', {
    id
  })
}
