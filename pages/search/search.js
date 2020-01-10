// pages/search/search.js
import { http } from '../../utils/http'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFocus: false,
    keyword: '',
    courses: []
  },

  changeValue(e) {
    this.setData({
      keyword: e.detail.value
    })
  },

  // 聚焦
  focus() {
    this.setData({
      isFocus: true
    })
  },

  // 取消搜索
  cancel() {
    this.setData({
      isFocus: false,
      keyword: ''
    }, async () => {
      const result = await http({
        url: 'course/search', data: {
          name: this.data.keyword
        }
      })

      this.setData({
        courses: result.data.message
      })
    })
  },

  /**
   * 根据关键字搜索课程
   */
  async getCoursesData() {
    const result = await http({
      url: 'course/search', data: {
        name: this.data.keyword
      }
    })

    this.setData({
      courses: result.data.message
    })
  }
})