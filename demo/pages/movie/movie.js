var app = getApp()
Page({
  data: {
    movies: [],
    page:0,
    pageSize:10
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
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset='+ (this.data.pageSize * this.data.page + 1) +'&limit=' + this.data.pageSize,
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
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
    var that = this
    that.setData({'page':that.data.page+1})
    // 发起请求
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json?type=hot&offset='+ (that.data.pageSize * that.data.page + 1) +'&limit=' + that.data.pageSize,
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        let data = that.data.movies
        data = data.concat(res.data.data.movies)
        that.setData({'movies':data})
        that.update()
      }
    })
  },
  scroll: function(e) {
    //console.log(e)
  }
})
