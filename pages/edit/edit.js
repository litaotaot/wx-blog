const { default: baseUrl } = require("../../api")

// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: [
      {type: 1, key: '创新'},
      {type: 2, key: '转载'},
      {type: 3, key: '美文'},
      {type: 4, key: '诗词'},
      {type: 5, key: '新闻'},
      {type: 6, key: '广告'},
    ],
    titleValue: '',
    descriptionValue: '',
    contentValue: '',
    imgUrl: '',
    files: [
  //     {
  //     url: 'https://img.ivsky.com/img/tupian/pre/202006/30/jita-022.jpg',
  // }, 
  // {
  //     loading: true
  // }, {
  //     error: true
  // }
],
    // types: ['广告', '新闻', '诗词', '美文', '转载', '创新'],
    typeIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectFile: this.selectFile.bind(this),
      uplaodFile: this.uplaodFile.bind(this)
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
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      typeIndex: e.detail.value
    })
  },
  // 标题
  formInputChange(e) {
    this.setData({
      titleValue: e.detail.value
    })
  },
  release() {
    console.log(this.data.titleValue)
    console.log(this.data.imgUrl)
    console.log(this.data.descriptionValue)
    console.log(this.data.contentValue)
    console.log(this.data.types[this.data.typeIndex].type)
  },
  draft() {

  },
  descriptionValue(e) {
    this.setData({
      descriptionValue: e.detail.value
    })
  },
  contentValue(e) {
    this.setData({
      contentValue: e.detail.value
    })
  },
  chooseImage: function (e) {
    console.log(1)
    var that = this;
    wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.setData({
                files: that.data.files.concat(res.tempFilePaths)
            });
        }
    })
  },
  previewImage: function(e){
      wx.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
      })
  },
  selectFile(files) {
      console.log('files', files)
      // 返回false可以阻止某次文件上传
  },
  uplaodFile(files) {
      console.log('upload files', files)
      // 文件上传的函数，返回一个promise
      return new Promise((resolve, reject) => {
      wx.uploadFile({
        url: baseUrl + `uploadImg`, //服务器接口地址
        filePath: files.tempFilePaths[0],
        name: 'file',
        success: (res) => {
          console.log(res)
          let filePath = JSON.parse(res.data).filePath
          console.log(`${baseUrl + filePath}`)
          resolve({urls:[`http://116.62.41.47:5050/${filePath}`]})
          this.setData({
            imgUrl: `http://116.62.41.47:5050/${filePath}`
          })
        },
        fail: (err) => {
          console.log(err)
          reject('some error')
        }
      })
    })
  },
  uploadError(e) {
      console.log('upload error', e.detail)
  },
  uploadSuccess(e) {
      console.log('upload success', e.detail)
  }
})