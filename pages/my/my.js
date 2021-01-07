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
    current: -1,
    userShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
    msg: {
      info: '',
      type: '',
      show: false
    },
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
      dot: true
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
      dot: true
    }],
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
    console.log(this.data.current)
    this.setData({
      current: -1
    })
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
  },
  isUserInfo() {
    console.log(123)
    this.setData({
      userShow: true
    })
  },
  tapDialogButton(e) {
    let msg = {
      info: '',
      type: '',
      show: false
    }
    var that = this
    wx.getUserInfo({
      success: function(res){
        msg.info = '获取用户信息成功'
        msg.type = 'success'
        msg.show = true
      },
      fail: function() {
        msg.info = '获取用户信息失败'
        msg.type = 'error'
        msg.show = true
      },
      complete: function() {
        that.setData({
          msg
        })
      }
    })
    this.setData({
      userShow: false,
    })
  },
  goType(e) {
    console.log(e)
    switch (e.detail.index) {
      case 0:
        wx.navigateTo({
          url: '../myCreation/myCreation',
        })
        break;
      default:
        wx.navigateTo({
          url: '../attention/attention',
        })
        break;
    }
  }
})