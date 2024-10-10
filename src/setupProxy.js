// 3. 创建 src/setupProxy.js
// 4. yarn add http-proxy-middleware
// 5. 配置代理
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/notes",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      pathRewrite: { "^/api": "" }, // remove /api prefix when requesting
    })
  );
};
