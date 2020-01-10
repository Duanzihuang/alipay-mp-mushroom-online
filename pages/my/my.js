// pages/my/my.js
import { http } from '../../utils/http.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onShow: function (options) {
    this.getUserInfoData()
  },

  getUserInfoData() {
    http({ url: 'my/info' }).then(res => {
      this.setData({
        userInfo: res.data.message
      })
    })
  },

  // 清除缓存
  clearCache() {
    my.showToast({
      content: '缓存清理中...', //提示的内容,
      type: 'loading', //图标,
      duration: 2000, //延迟时间,
      mask: true, //显示透明蒙层，防止触摸穿透,
      success: res => {
        my.showToast({
          content: '清理缓存成功', //提示的内容,
          type: 'success', //图标,
          duration: 1000, //延迟时间,
          mask: true //显示透明蒙层，防止触摸穿透
        });
      }
    })
  },

  // 联系客服
  contact() {
    my.makePhoneCall({
      number: '400-618-9090'
    })
  }
})