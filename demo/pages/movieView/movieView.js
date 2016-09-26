var app = getApp()
Page({
  data: {
    url: ''
  },
  onLoad: function (e) {
        console.log('onLoad')
        var that = this
        console.log(e)
        this.setData({url:e.url})

        // todo
        // wx.setNavigationBarTitle({
        //     title: '当前页面'
        // })

  },
  videoErrorCallback: function(e) {
      console.log('视频错误信息:')
      console.log(e.detail.errMsg)
    }
  
})
