// pages/typeDetail/typeDetail.js
import baseUrl from '../../api'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '美文',
    typeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: baseUrl + `type/typeDetail?type=${options.id}`,
      method: 'GET', 
      success: (res) => {
        if(res.statusCode === 200 ) {
          this.setData({
            typeList: res.data
          })
        }
      },
      fail: function() {
        // fail
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
  articleDetail(e) {
    let articleId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id=' + articleId,
      success() {
        console.log('成功跳转到详情页')
      }
    })
  }
})