//index.js
//获取应用实例
const app = getApp()
import baseUrl from '../../api'

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    msgShow: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    typeList: []
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: baseUrl + 'articleList?list=5',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        let result = []
        if(res.statusCode === 200) {
          result = res.data
        }
        that.setData({
          typeList: result
        })
      },
      fail: function() {
        that.msgShow = true
      },
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  articleDetail: function(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id=' + id,
      success() {
        console.log('成功跳转到详情页')
      }
    })
  }
})
// "list": [
    //   {
    //     "pagePath": "pages/index/index",
    //     "iconPath": "assets/images/find.png",
    //     "selectedIconPath": "assets/images/find.png",
    //     "text": "发现"
    //   },
    //   {
    //     "pagePath": "pages/type/type",
    //     "iconPath": "assets/images/type.png",
    //     "selectedIconPath": "assets/images/type.png",
    //     "text": "分类"
    //   },
    //   {
    //     "pagePath": "pages/edit/edit",
    //     "iconPath": "assets/images/edit.png",
    //     "selectedIconPath": "assets/images/edit.png",
    //     "text": "编辑"
    //   },
    //   {
    //     "pagePath": "pages/my/my",
    //     "iconPath": "assets/images/my.png",
    //     "selectedIconPath": "assets/images/my.png",
    //     "text": "我的"
    //   }
    // ]