const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/fact', {        //请求地址的前缀
        target: 'https://vp.fact.qq.com/',  // 代理的服务器
        changeOrigin: true, // 是否切换域名
        pathRewrite: {  // 地址改写
            '^/fact': ''
        }    
    }));
    app.use(proxy('/wechat', { 
        target: 'https://wechat.wecity.qq.com/',
        changeOrigin: true,
        pathRewrite: {
            '^/wechat': ''
        }    
    }));
    app.use(proxy('/inews', { 
        target: 'https://view.inews.qq.com/' ,
        changeOrigin: true,
        pathRewrite: {
            '^/inews': ''
        }    
    }));
};