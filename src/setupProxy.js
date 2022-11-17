// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const BACK_URI = process.env.REACT_APP_BACKEND_URI
module.exports = function(app) {

  //CORS ERROR
    app.use(
        '/api',
        createProxyMiddleware({
          target: BACK_URI,
          changeOrigin: true,
        })
    );
      
    app.use(
        '/main/news',
        createProxyMiddleware({
            target: BACK_URI,
            changeOrigin: true,
        })
    );

    app.use(
        '/main/realtime',
        createProxyMiddleware({
            target: BACK_URI,
            changeOrigin: true,
        })
    );

    app.use(
        '/search',
        createProxyMiddleware({
            target: BACK_URI,
            changeOrigin: true,
        })
    );

    app.use(
        '/sector',
        createProxyMiddleware({
            target: BACK_URI,
            changeOrigin: true,
        })
    );
};