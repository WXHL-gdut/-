//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    swiperCurrent: 0,
    selectCurrent: 0,
    categories: [],
    activeCategoryId: 0,
    scrollTop: "0",
    duanziInfo:["影音","图片","文档","应用","其他"]

  },
  tabClick: function (e) {
    var that = this;
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    wx.request({
      url: app.globalData.Url + 'Case/casec',
      method: 'POST',
      data: {
        Id: app.globalData.Id,
        Num: '',
        Type: 3
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
        console.log(res.data.info.Forum)
        console.log(res.data.info.num)
        that.setData({
          duanziInfo: res.data.info.Forum,
          Num: res.data.info.num
        })
      }
    })
  },
  //事件处理函数
  swiperchange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: "" + e.currentTarget.dataset.id
    })
  },
  bindTypeTap: function (e) {
    this.setData({
      selectCurrent: e.index
    })
  },
  scroll: function (e) {
    var that = this, scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })

  },
  onLoad: function () {
    var that = this
    wx.request({
      url: app.globalData.Url + 'Case/casec',
      method: 'POST',
      data: {
        Id: app.globalData.Id,
        Num: '',
        Type: 3
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res)
        console.log(res.data.info.Forum)
        console.log(res.data.info.num)
        that.setData({
          duanziInfo: res.data.info.Forum,
          Num: res.data.info.num
        })
      }
    })

  }
})
