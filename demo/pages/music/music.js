Page({
  data: {
    list:[],
    poster: 'http://pic.pimg.tw/pam86591/1408719752-3322564110_n.jpg',
    name: 'Sugar',
    author: 'Maroon 5',
    src:'http://qqma.tingge123.com:823/mp3/2015-06-13/1434188181.mp3'
  },
  audioPlay: function () {
    this.setData({
      action: {
        method: 'play'
      }
    })
  },
  audioPause: function () {
    this.setData({
      action: {
        method: 'pause'
      }
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	
    // 发起请求
    wx.request({
      url: 'http://mobilecdn.kugou.com/api/v3/search/song?keyword=%E5%BF%83%E8%B7%B3',
      success: function(res) {
        console.log(res.data.data.info)
        that.setData({'list':res.data.data.info})
        that.update()
      }
    })
  }
})