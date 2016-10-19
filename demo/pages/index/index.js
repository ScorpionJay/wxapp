//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      {id:1,img:'http://onejay.top/images/1.jpg',link:'../movie/movie'},
      {id:2,img:'http://onejay.top/images/2.jpg',link:'../music/music'},
      {id:3,img:'http://onejay.top/images/3.jpg',link:'../picture/picture'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 100,
    items:[
      {name:"电影",url:"../movie/movie",color:'#E9990B'},
      {name:"音乐",url:"../music/music",color:'#EE5B1F'},
      {name:"美图",url:"../picture/picture",color:'#6C39D9'},
      {name:"地图",url:"../map/map",color:'#F52F62'},
      {name:"滚动",url:"../scrollView/scrollView",color:'#52A5E0'},
      {name:"...",url:"../movie/moive",color:'#D90A13'},
      {name:"...",url:"../movie/moive",color:'#D90A13'},
      {name:"...",url:"../movie/moive",color:'#D90A13'}
    ]
  },
  //事件处理函数
  bindViewTap: function(e) {
    console.log(e)
    console.log(e.currentTarget)
    wx.navigateTo({
      url:  e.currentTarget.dataset.link
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
    // id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  }
})
