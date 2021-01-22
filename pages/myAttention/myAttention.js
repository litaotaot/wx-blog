// pages/attention/attention.js
const { default: baseUrl } = require("../../api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attentionInfo: [],
    userId: '',
    index: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: baseUrl + `my/attention`,
      data: {
        userId: options.id
      },
      method: 'POST',
      success: (res) => {
        if(res.statusCode === 200) {
          this.setData({
            attentionInfo: res.data
          })
        }
      },
    })
    this.setData({
      userId: options.id
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
  otherDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/othersDetail/othersDetail?id=' + id,
    })
  }
})