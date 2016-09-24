Page({
    data: {
        imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 3000,
        duration: 1000
    },

    onLoad: function (e) {
        console.log('onLoad')
        var that = this
        console.log(e)

    }

    
})
