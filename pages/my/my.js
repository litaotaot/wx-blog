// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    typeInfo: [
      { type: '创作', imgUrl: '../../assets/images/type-title.jpg' },
      { type: '评论', imgUrl: '../../assets/images/type-title.jpg' },
      { type: '关注', imgUrl: '../../assets/images/type-title.jpg' },
      { type: '收藏', imgUrl: '../../assets/images/type-title.jpg' },
      { type: '记录', imgUrl: '../../assets/images/type-title.jpg' }
    ],
    list: [{
      "text": "创作",
      "iconPath": "/assets/images/type-title.jpg",
      "selectedIconPath": "/assets/images/edit.png",
      dot: true
    },
    {
      "text": "评论",
      "iconPath": "/assets/images/find.png",
      "selectedIconPath": "/assets/images/type.png",
      badge: 'New'
    },
    {
      "text": "关注",
      "iconPath": "/assets/images/find.png",
      "selectedIconPath": "/assets/images/type.png",
      badge: 'New'
    },
    {
      "text": "收藏",
      "iconPath": "/assets/images/find.png",
      "selectedIconPath": "/assets/images/type.png",
      badge: 'New'
    },
    {
      "text": "记录",
      "iconPath": "/assets/images/find.png",
      "selectedIconPath": "/assets/images/type.png",
      badge: 'New'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})