const express = require("express");
const morgan = require("morgan");
const router = require("./router/index");
const path = require("path");
var errorhandler = require("errorhandler");
const session = require("express-session");
const { sessionSecret } = require("./config/config.default");
require("./model");

const app = express();

// 配置session使用中间件
// 默认数据存储到内存当中
app.use(
  session({
    secret: sessionSecret, // 签发session id的秘钥
    resave: false,
    saveUninitialized: true,
    cookie: {
      // secure: true
      maxAge: 1000 * 60 // 过期时间
     },
  })
);

// 静态资源托管
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));

// 配置模版引擎
app.engine("html", require("express-art-template"));
app.set("view options", {
  debug: process.env.NODE_ENV !== "production",
});
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");

app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 3001;

// 挂在路由
app.use(router);

// 统一处理服务端错误中间件
if (process.env.NODE_ENV === "development") {
  // only use in development
  app.use(errorhandler());
}

app.listen(PORT, () => {
  console.log(`Server is running at http//localhost:${PORT}`);
});
