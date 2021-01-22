// pages/othersDetail/othersDetail.js
const { default: baseUrl } = require("../../api")
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    othersInfo: {},
    attentionShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    others: [
      {
        "text": "他的创作",
        "iconPath": "/assets/images/find.png",
        "selectedIconPath": "/assets/images/type.png",
      },
      {
        "text": "他的关注",
        "iconPath": "/assets/images/find.png",
        "selectedIconPath": "/assets/images/type.png",
      },
      {
        "text": "他的收藏",
        "iconPath": "/assets/images/find.png",
        "selectedIconPath": "/assets/images/type.png",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { idInfo } = app.globalData
    wx.request({
      url: baseUrl + 'others/othersDetail',
      data: {
        userId: idInfo ? idInfo.openid : '',
        othersId: options.id
      },
      method: 'POST',
      success: (res) => {
        if(res.statusCode === 200) {
          this.setData({
            othersInfo: res.data
          })
        }
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  attention(e) {
    const { type } = e.currentTarget.dataset
    const { userId } = this.data.othersInfo
    const { idInfo } = app.globalData
    if(!idInfo) {
      this.setData({
        attentionShow: true
      })
      return
    }
    wx.request({
      url: baseUrl + 'others/isAtention',
      data: {
        userId: idInfo.openid,
        othersId: userId,
        type
      },
      method: 'POST',
      success: (res) => {
        console.log(res)
        if(res.statusCode === 200) {
          let othersInfo = this.data.othersInfo
          othersInfo.attention = !Number(type)
          this.setData({
            othersInfo
          })
        }
      },
    })
  },
  isAttention(e) {
    const { index } = e.detail
    if(index === 0) {
      this.setData({
        attentionShow: false
      })
    } else if(index === 1) {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }
  },
  goType(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/attention/attention',
    })
  }
})