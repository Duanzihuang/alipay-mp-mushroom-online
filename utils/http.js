const BASEURL = 'http://localhost:3000/api/'
// const BASEURL = 'http://huangjiangjun.top:3000/api/'

const app = getApp()

export const http = ({url, method = "GET", data, tip = '数据加载中...', isNeedAuth = true }) => {
  return new Promise((resolve, reject) => {
    my.showLoading({
      title: tip,
    })

    // 处理请求头
    const headers = {}
    if (isNeedAuth) { // 是否需要授权
      if (app.globalData.my_token) {
        headers.Authorization = app.globalData.my_token
      } else {
        const my_token = my.getStorageSync({key: 'my_token'}).data

        headers.Authorization = my_token
        app.globalData.my_token = my_token
      }
    }
    
    my.request({
      url: `${BASEURL}${url}`,
      data,
      method,
      headers,
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      },
      complete: () => {
        my.hideLoading()
      }
    })
  })
}