const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      target: "http://localhost:3000",
      changeOrigin: true,
      secure: true,
      headers: {
        "X-Forwarded-Proto": "https",
      },
      // pass the created key and certificate
      key: fs.readFileSync("localhost-key.pem", "utf8"),
      cert: fs.readFileSync("localhost.pem", "utf8"),
    })
  );
};
