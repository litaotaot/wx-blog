//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    typeList: [
      { index: 1, type: '创新', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 2, type: '转载', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 3, type: '美文', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 4, type: '诗词', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 5, type: '新闻', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 6, type: '广告', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
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
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  articleDetail: function(e) {
    let id = e.currentTarget.dataset.id
    console.log(e)
    wx.navigateTo({
      url: '/pages/articleDetail/articleDetail?id=' + id,
      success() {
        console.log('成功跳转到详情页')
      }
    })
  }
})
