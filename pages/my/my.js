const { default: baseUrl } = require("../../api")

// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
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
    list: [{
      "text": "创作",
      "iconPath": "/assets/images/create.png",
      "selectedIconPath": "/assets/images/select.png",
      // dot: true
    },
    {
      "text": "评论",
      "iconPath": "/assets/images/message.png",
      "selectedIconPath": "/assets/images/select.png",
      // badge: 'New'
    },
    {
      "text": "关注",
      "iconPath": "/assets/images/attention.png",
      "selectedIconPath": "/assets/images/select.png",
      // dot: true
    },
    {
      "text": "收藏",
      "iconPath": "/assets/images/favorites.png",
      "selectedIconPath": "/assets/images/select.png",
      // badge: 'New'
    },
    // {
    //   "text": "记录",
    //   "iconPath": "/assets/images/find.png",
    //   "selectedIconPath": "/assets/images/type.png",
    //   dot: true
    // }
  ],
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
                    sex: userInfo.gender ? userInfo.gender : 0,
                    avatarUrl: userInfo.avatarUrl ? userInfo.avatarUrl : '',
                    userName: userInfo.nickName ? userInfo.nickName : 'xxx'
                  },
                  method: 'POST',
                  success: function(res){
                    if(res.statusCode == 200) {
                      msg.info = '获取用户信息成功'
                      msg.type = 'success'
                      msg.show = true
                      that.setData({
                        userInfo,
                        fans: res.data[0].fans,
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
            complete: () => {
              that.setData({
                msg,
              })
            }
          })
        },
        fail: function() {
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
    this.setData({
      userShow: false,
    })
  },
  goType(e) {
    let msg = {}
    console.log(app.globalData.idInfo)
    if(!app.globalData.idInfo) {
      msg.info = '请先登录！'
      msg.type = 'error'
      msg.show = true
      this.setData({
        msg,
      })
      return
    }
    switch (e.detail.index) {
      case 0:
        wx.navigateTo({
          url: '/pages/myCreation/myCreation?id=' + app.globalData.idInfo.openid,
        })
        break;
      case 1:
        wx.navigateTo({
          url: '/pages/myCreation/myCreation?id=' + app.globalData.idInfo.openid,
        })
        break;
      case 2:
        wx.navigateTo({
          // url: '/pages/attention/attention?id=' + app.globalData.idInfo.openid,
          url: '/pages/myAttention/myAttention?id=od28p4xUlmaz3GGWKMzsmZsdL-ww',
        })
        break;
      case 3:
        wx.navigateTo({
          url: '/pages/myFavorites/myFavorites?id=od28p4xUlmaz3GGWKMzsmZsdL-ww',
          // url: '/pages/myFavorites/myFavorites?id=' + app.globalData.idInfo.openid,
        })
        break;
      case 4:
        wx.navigateTo({
          url: '/pages/attention/attention?id=' + app.globalData.idInfo.openid,
        })
        break;
      default:
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