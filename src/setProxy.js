// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
const BACK_URI = process.env.REACT_APP_BACKEND_URI
const FRONT_URI = process.env.REACT_APP_FRONT_URI

module.exports = (app) => {
	app.use(
		createProxyMiddleware('/api', {
			target: BACK_URI, 
			changeOrigin: true,
		})
	);
};

// module.exports = function(app) {

//   //CORS ERROR
//     app.use(
//         '/api',
//         createProxyMiddleware({
//           target: BACK_URI,
//           changeOrigin: true,
//         })
//     );
      
//     app.use(
//         '/main',
//         createProxyMiddleware({
//             target: BACK_URI,
//             changeOrigin: true,
//         })
//     );

//     app.use(
//         '/search',
//         createProxyMiddleware({
//             target: BACK_URI,
//             changeOrigin: true,
//         })
//     );

//     app.use(
//         '/sector',
//         createProxyMiddleware({
//             target: BACK_URI,
//             changeOrigin: true,
//         })
//     );
// };