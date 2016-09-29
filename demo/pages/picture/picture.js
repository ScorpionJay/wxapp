Page({
  data: {
    list:[],
    showUrl:'',
    showImgHidden:true,
    actionSheetHidden: true,
    actionSheetItems: [],
    id:'',
    page:1,
    rows:10
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
    // 发起请求
    wx.request({
      url: 'http://www.tngou.net/tnfs/api/list?id=' + that.data.id + "&page="+this.data.page + "&rows="+this.data.rows,
      success: function(res) {
        console.log(res.data)
        that.setData({'list':res.data.tngou})
      }
    })

    // 发起请求
    wx.request({
      url: 'http://www.tngou.net/tnfs/api/classify',
      success: function(res) {
        console.log(res.data)
        that.setData({'actionSheetItems':res.data.tngou})
        that.update()
      }
    })

    

  },
  showImg: function(e) {
    this.setData({
        showUrl:e.currentTarget.dataset.url,
        showImgHidden:false
    })
  },
  hideShowImg: function(){
    this.setData({
        showUrl:'',
        showImgHidden:true
    })
  },
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindItemTap:function(e){
    var that = this
    console.log('tap ' + e.currentTarget.dataset.id)
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden,
      id:e.currentTarget.dataset.id,
      page:1
    })

     // 发起请求
    wx.request({
      url: 'http://www.tngou.net/tnfs/api/list?id=' + that.data.id + "&page="+this.data.page + "&rows="+this.data.rows,
      success: function(res) {
        console.log(res.data)
        that.setData({'list':res.data.tngou})
        that.update()
      }
    })
  },
  lower: function(e) {
    var that = this
    that.setData({'page':that.data.page+1})
     // 发起请求
    wx.request({
      url: 'http://www.tngou.net/tnfs/api/list?id=' + that.data.id + "&page="+this.data.page + "&rows="+this.data.rows,
      success: function(res) {
        console.log(res.data)
        let data = that.data.list
        data = data.concat(res.data.tngou)
        that.setData({'list': data})
      }
    })
   
  },

 


})
