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
  }

})
