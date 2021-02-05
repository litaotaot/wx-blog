// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      { index: 1, type: 1, title: '创新', imgUrl: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/cc11728b4710b912d81c7b33c3fdfc0393452219.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 2, type: 2, title: '转载', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180202%2F51302e7af77e42ab97e17a0f15cf6999.png&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615101824&t=94a6f5324a3f12df6a69e611dd319dce', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 3, type: 3, title: '美文', imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2533215658,320580699&fm=26&gp=0.jpg', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 4, type: 4, title: '诗词', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190705%2F23%2F1562340389-qIVkSdMYth.jpg&refer=http%3A%2F%2Fimage.biaobaiju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615101907&t=5b8c27835498879bb7d26d7c841fe149', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 5, type: 5, title: '新闻', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140402%2F330508-14040222525086.jpg&refer=http%3A%2F%2Fwww.juimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615101986&t=4a5f97db2edf0a5617f265cafad7d456', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
      { index: 6, type: 6, title: '广告', imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.sinaimg.cn%2Fedu%2F2009%2F0923%2F2009923102046.jpg&refer=http%3A%2F%2Fi0.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1615102073&t=ced8b68a73c3008296a645c5e3f42a44', description: '谁在最需要的时候轻轻拍着我肩膀,谁在最快乐的时候愿意和我分享,日子那么长 我在你身旁,见证你成长让我感到充满力量.' },
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