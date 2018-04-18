var app = getApp()
Page({
  data: {
    filePath: "/icon/Cache_1f6159585d8f3afb.png"

  },
  searchFile: function(e) {
    this.setData({
      filePath: e.detail.value
    });
    console.log(this.data.filePath);
  },

  onLoad: function() {
    console.log(this);
  },

  getLocalImage: function (e) {
    var that = this;
    wx.chooseImage(
      {
        success: function(res){
          that.setData({
            filePath: res.tempFilePaths
          });
          console.log(that.data.filePath);
        }
      }
    );
  },

})
