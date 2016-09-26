Page({
  data: {
    list:[],
    poster: 'http://pic.pimg.tw/pam86591/1408719752-3322564110_n.jpg',
    name: 'Sugar',
    author: 'Maroon 5',
    src:'',
    action:{
        method: 'play'
      }
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
  },
  playMusic: function(e){
    let src = 'http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash='+e.currentTarget.dataset.src
    var that = this
    // 发起请求
    wx.request({
      url: src,
      success: function(res) {
        console.log(res.data)
        that.setData({
            src:res.data.url
        })
        that.setData({
          action: {
            method: 'play'
          }
         })
      }
    })
  }
})