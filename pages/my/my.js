const { default: baseUrl } = require("../../api")

// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Hello World',
    userInfo: app.globalData.userInfo,
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
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  isUserInfo() {
    this.setData({
      userShow: true
    })
  },
  tapDialogButton(e) {
    if(e.detail.index === 1) {
      const { userInfo } = app.globalData
      let msg = {
        info: '',
        type: '',
        show: false
      }, info = {}
      var that = this
      const appid = 'wxdf1d8a16eb436cef'
      const secret = '54cdbf2feb65fc2104681d3f9af6ee41'
      const appInfo = { appid, secret }
      wx.login({
        success: (res) => {
          appInfo.code = res.code
          wx.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appInfo.appid}&secret=${appInfo.secret}&js_code=${appInfo.code}&grant_type=authorization_code`,
            method: 'GET',
            success: (res) => {
              if(res.statusCode == 200) {
                app.globalData.idInfo = res.data
                wx.request({
                  url: baseUrl + 'my/login',
                  data: {
                    userId: res.data.openid,
                    key: res.data.session_key,
                    sex: userInfo.gender,
                    userName: userInfo.nickName
                  },
                  method: 'POST',
                  success: function(res){
                    if(res.statusCode == 200) {
                      msg.info = '获取用户信息成功'
                      msg.type = 'success'
                      msg.show = true
                      that.setData({
                        userInfo,
                        hasUserInfo: true
                      })
                    }
                  },
                  fail: () => {
                    msg.info = '获取用户信息失败'
                    msg.type = 'error'
                    msg.show = true
                  },
                  complete: () => {
                    that.setData({
                      msg,
                    })
                  }
                })
              }
            },
            fail: function() {
              msg.info = '获取用户信息失败'
              msg.type = 'error'
              msg.show = true
            },
          })
        },
        fail: function() {
          msg.info = '获取用户信息失败'
          msg.type = 'error'
          msg.show = true
        },
      })
    }
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
  },
  // promisify(fn) {
  //   return async function(args) {
  //     return new Promise((resolve,reject) => {
  //       fn({
  //         success: (res) => {
  //           resolve(res)
  //         },
  //         fail: (err) => {
  //           reject(err)
  //         },
  //       })
  //     })
  //   }
  // }
})