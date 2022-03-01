const { createProxyMiddleware } = require('http-proxy-middleware');
const BASE_API_PATH = "http://localhost:3001";

module.exports = function (app) {
	app.use(createProxyMiddleware("/*", { target: BASE_API_PATH }));
};