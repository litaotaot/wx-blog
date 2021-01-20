// pages/articleDetail/articleDetail.js
import baseUrl from '../../api'

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleDetail: {},
    dialogShow: false,
    authShow: false,
    buttons: [{text: '取消'}, {text: '确定'}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { idInfo } = app.globalData
    wx.request({
      url: baseUrl + `articleList/detail`,
      data: {
        articleId: options.id,
        userId: idInfo ? idInfo.openid : '',
      },
      method: 'POST',
      success: (res) => {
        if(res.statusCode === 200 ) {
          this.setData({
            articleDetail: res.data
          })
        }
      },
      fail: () => {
        this.setData({
          articleDetail: []
        })
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
    let that =this;
    return {
      title: 'wxblog-' + this.data.articleDetail.title, // 转发后 所显示的title
      path: '/pages/articleDetail/articleDetail?id=' + this.data.articleDetail.articleId, // 相对的路径
      success: (res)=>{    // 成功后要做的事情
        console.log(res.shareTickets[0])
        wx.getShareInfo({
          shareTicket: res.shareTickets[0],
          success: (res)=> { 
            that.setData({
              isShow:true
            }) 
            console.log(that.setData.isShow)
            },
          fail: function (res) { console.log(res) },
          complete: function (res) { console.log(res) }
        })
      },
      fail: function (res) {
        // 分享失败
        console.log(res)
      }
    }
  },
  showDialog() {
    this.setData({
      dialogShow: true
    })
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false,
    })
  },
  awesome() {
    if(!app.globalData.idInfo) {
      this.setData({
        authShow: true
      })
      return
    }
    wx.request({
      url: baseUrl + `articleList/awesome`,
      data: {
        userId: app.globalData.idInfo.openid,
        articleId: this.data.articleDetail.articleId,
        awesome: this.data.articleDetail.awesome ? 0 : 1,
      },
      method: 'POST',
      success: (res) => {
        if(res.statusCode === 200 ) {
          let temp = this.data.articleDetail
          temp.awesome = this.data.articleDetail.awesome ? 0 : 1
          temp.articleAwesome += this.data.articleDetail.awesome ? 1 : -1
          this.setData({
            articleDetail: temp
          })
        }
      },
    })
  },
  favorites() {
    if(!app.globalData.idInfo) {
      this.setData({
        authShow: true
      })
      return
    }
    wx.request({
      url: baseUrl + `articleList/favorites`,
      data: {
        userId: app.globalData.idInfo.openid,
        articleId: this.data.articleDetail.articleId,
        favorites: this.data.articleDetail.favorites ? 0 : 1,
      },
      method: 'POST',
      success: (res) => {
        if(res.statusCode === 200 ) {
          let temp = this.data.articleDetail
          temp.favorites = this.data.articleDetail.favorites ? 0 : 1
          this.setData({
            articleDetail: temp
          })
        }
      },
    })
  },
  isTrueAuth(e) {
    const { index } = e.detail
    if(index === 0) {
      this.setData({
        authShow: false
      })
    } else if(index === 1) {
      wx.switchTab({
        url: '/pages/my/my',
      })
    }
  },
  othersDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/othersDetail/othersDetail?id=' + id,
    })
  }
})