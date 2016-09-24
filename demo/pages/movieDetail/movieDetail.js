Page({
    data: {
        movie:""
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
            that.setData({'movie':res.data.data})
            that.update()
        }
        })
    }

    
})
