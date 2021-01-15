// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      { index: 1, type: 1, title: '创新', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 2, type: 2, title: '转载', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 3, type: 3, title: '美文', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 4, type: 4, title: '诗词', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 5, type: 5, title: '新闻', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 6, type: 6, title: '广告', imgUrl: '../../assets/images/type-title.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
    ]
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
  typeDetail(e) {
    let typeId = e.currentTarget.dataset.typeid
    wx.navigateTo({
      url: "/pages/typeDetail/typeDetail?id=" + typeId 
    })
  }
})