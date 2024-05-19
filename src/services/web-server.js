let express = require("express");
const http = require("http");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT;

// // Set up view engine
// app.set('view engine', 'ejs');
// app.set('views', './src/views');

//copy code from this github if it's necessary https://github.com/bradtraversy/chatcord

//const indexRoute = require('./routes/index.Route');

//db table add
const Users = require("../models/users");
const Admins = require("../models/admins");
const Counts = require("../models/counts");
const Invoices = require("../models/invoice");
const News = require("../models/news");
const Payment = require("../models/payments");
const Count_image = require("../models/count_image");

// const scheduler = require("./scheduler"); // устгаж болохгүй!!!
//uuganaaa
function initialize() {
  const app = express();
  app.use(morgan("dev"));
  //app.use(express.json());
  // app.use(express.urlencoded({ extended: false }));
  app.use(
    express.json({
      limit: "50mb",
    })
  );
  app.use(
    helmet.hidePoweredBy(),
    helmet.noSniff(),
    helmet.xssFilter(),
    helmet.contentSecurityPolicy(),
    helmet.crossOriginEmbedderPolicy(),
    helmet.frameguard()
  );
  app.use(cors());
  app.use(express.json());

  const loginRoute = require("../routes/login.Route");
  const newsRoute = require("../routes/news.Route");
  const userRoute = require("../routes/user.Route");
  const countsRoute = require("../routes/counts.Route");
  const invoiceRoute = require("../routes/invoice.Route");
  const uploadRoute = require("../routes/upload.Route");

  app.use("/auth", loginRoute);
  app.use("/news", newsRoute);
  app.use("/user", userRoute);
  app.use("/counts", countsRoute);
  app.use("/invoices", invoiceRoute);
  app.use("/uploads", uploadRoute);
  // app.get("/", (req, res) => {
  //   res.sendFile(path.join(__dirname, "../src/upload/index.html"));
  // });

  app.use("/public", express.static("public"));

  Admins.sync()
    .then(() => Users.sync())
    .then(() => Counts.sync())
    .then(() => Count_image.sync())
    .then(() => Invoices.sync())
    .then(() => News.sync())
    .then(() => Payment.sync());
  // .then(() => {
  //   ChatMessage.sync();
  //   allChat.sync();
  // });
  app.listen(process.env.PORT, function () {
    console.log("Server is ready at:" + process.env.PORT);
  });
}

function close() {}

module.exports.initialize = initialize;
module.exports.close = close;
