import { BASE_URL } from '../config.js'
// const BASE_URL = 'http://www.daoting.co:24073'
function request(uri, params, methods, headers) {
  // let url = uri.replace(BASE_URL, '');
  let header = {
    'content-type': 'application/json'
  };
  if (headers) {
    header = headers;
  }
  if (wx.getStorageSync('token')) {
    header['Authorization'] = wx.getStorageSync('token')
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + uri,
      header: header,
      data: params,
      method: methods,
      success(res) {
        if (res.statusCode == 200) {
          if (res.data && res.data.constructor == Object && res.header.Authorization) {
            res.data.token = res.header.Authorization;
          }
          resolve(res.data)
        }
      },
      fail(error) {
        reject(error)
      },
      complete(info) {

      }
    })
  })
}

//get请求
function get(url, params) {
  return request(url, params, 'GET')
}

//post请求(json)
function post(url, params) {
  return request(url, params, 'POST')
}

//post请求(form)
function post_form(url, params) {
  let header = {
    'content-type': 'application/x-www-form-urlencoded'
  }
  return request(url, params, 'POST', header)
}

module.exports = {
  get,
  post,
  post_form,
}