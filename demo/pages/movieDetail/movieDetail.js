Page({
    data: {
        movie:"",
        toastHidden:true
    },

    onLoad: function (e) {
        console.log('onLoad')
        var that = this
        console.log(e)

        wx.request({
            url: 'http://m.maoyan.com/movie/'+ e.id +'.json',
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)

                let str = res.data.data.MovieDetailModel.dra
                str = str.substring(3)
                str = str.substring( 0,str.length -4 )
                res.data.data.MovieDetailModel.dra = str

                that.setData({'movie':res.data.data})
                that.update()
            }
        })
    },

    tapWant: function(){
        console.log('want')
        this.setData({toastHidden: false})
    },
    tapScore: function(){
        console.log('score')
        this.setData({toastHidden: false})
    },
    toastChange: function(){
        this.setData({toastHidden: true})
    },
    tapmovie: function(e){
        console.log(e)
        console.log(e.currentTarget)
        console.log(e.currentTarget.dataset.url)
        url = e.currentTarget.dataset.url
        wx.navigateTo({
        url: '../movieView/movieView?url=' + url
        })
    }

    
})
