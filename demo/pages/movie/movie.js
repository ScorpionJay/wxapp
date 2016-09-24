var app = getApp()
Page({
  data: {
    movies: []
  },
  onButtonTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	
    // 发起请求
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({'movies':res.data.data.movies})
        that.update()
      }
    })
  },
  bindViewTap: function(e) {
    id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../movieDetail/movieDetail?id=' + id
    })
  },
})
