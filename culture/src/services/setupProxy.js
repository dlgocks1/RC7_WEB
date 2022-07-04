const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
  app.use(
    createProxyMiddleware('/kakao', {
      target: 'https://kapi.kakao.com/',
      pathRewrite: {
        '^/kakao':''
      },
      changeOrigin: true
    })
  )
  
//   app.use(
//     createProxyMiddleware('/다른context', {
//       target: 'https://다른호스트',
//       pathRewrite: {
//         '^/지우려는패스':''
//       },
//       changeOrigin: true
//     })
//   )
  
};