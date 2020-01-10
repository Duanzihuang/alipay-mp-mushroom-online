App({
  onLaunch(options) {
    const my_token = my.getStorageSync({key: 'my_token'}).data

    // if (my_token) { // 有，则直接跳转到首页
    //  this.globalData.my_token = my_token
    //    my.reLaunch({
    //      url: '/pages/home/home'
    //     })
    // }
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData: {
    my_token: null
  }
});
