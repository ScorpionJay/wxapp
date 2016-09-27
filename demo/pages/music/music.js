Page({
  data: {
    list:[],
    poster: 'http://pic.pimg.tw/pam86591/1408719752-3322564110_n.jpg',
    name: 'Sugar',
    author: 'Maroon 5',
    src:'',
    action:{
        method: 'play'
    },
    keyword:''
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
  search: function(e){
    console.log('1111',e.detail.value)
   this.setData({
      keyword: e.detail.value
    })
  },
  tapSearch: function(){
     console.log('search...')
     var that = this
    // 发起请求
    wx.request({
      url: 'http://mobilecdn.kugou.com/api/v3/search/song?keyword=' + this.data.keyword,
      success: function(res) {
        console.log(res.data.data.info)
        that.setData({'list':res.data.data.info})
        that.update()
      }
    })
  },
  playMusic: function(e){

    let src = 'http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash='+e.currentTarget.dataset.hash
    var that = this
    // 发起请求
    wx.request({
      url: src,
      success: function(res) {
        console.log(res.data)
        that.setData({
            src:res.data.url,
            name: e.currentTarget.dataset.songname,
            author: e.currentTarget.dataset.singername,
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