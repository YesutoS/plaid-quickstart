const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/api",
    proxy({
      /*target: process.env.REACT_APP_API_HOST || "https://8000-yesutos-plaidquickstart-twhy0wqwjtu.ws-us54.gitpod.io/",*/
      target: process.env.REACT_APP_API_HOST || "http://localhost:8000",
      changeOrigin: true
    })
  );
};