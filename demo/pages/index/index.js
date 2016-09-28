//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      {id:1,img:'http://onejay.top/images/1.jpg'},
      {id:2,img:'http://onejay.top/images/2.jpg'},
      {id:3,img:'http://onejay.top/images/3.jpg'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 100,
    items:[
      {name:"电影",url:"../movie/movie"},
      {name:"音乐",url:"../music/music"},
      {name:"地图",url:"../map/map"},
      {name:"滚动",url:"../scrollView/scrollView"},
      {name:"电影",url:"../movie/moive"},
      {name:"电影",url:"../movie/moive"}
    ]
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.id)
    id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../second/second?id=' + id
    })
  },
  
  onLoad: function () {
    console.log('onLoad')
    console.log(this)
   
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  tapLink: function(e) {
    console.log(e)
    console.log(e.currentTarget)
    console.log(e.currentTarget.dataset.url)
    id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})
