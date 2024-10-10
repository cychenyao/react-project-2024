const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
    // 配置一个代理,只要带/api的请求
    app.use("/api", createProxyMiddleware({ target: "http://localhost:8080", 
        changeOrigin: true, 
        pathRewrite: {"^/api":""} }))
}