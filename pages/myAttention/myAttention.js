// pages/attention/attention.js
const { default: baseUrl } = require("../../api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attentionInfo: [
      { name: '用户1', sex: '1', avatar: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1089874897,1268118658&fm=26&gp=0.jpg'  },
      { name: '用户2', sex: '2', avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&fm=26&gp=0.jpg'  },
      { name: '用户3', sex: '1', avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2631334549,246605465&fm=26&gp=0.jpg'  },
    ],
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
      success: function(res){
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
  otherDetail: function() {
    // wx.navigateTo({
    //   url: '../my/my',
    // })
    wx.navigateTo({
      url: '/pages/othersDetail/othersDetail',
    })
  }
})