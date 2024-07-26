const express = require("express");
require("express-async-errors");
const getENV = require("./config/env");

const expressLayouts = require("express-ejs-layouts");
var compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

console.log("NODE_ENV ===", `${getENV("NODE_ENV") == "development" ? "development" : "production"}`);

require("dotenv").config({
  path: `${getENV("NODE_ENV") == "development" ? "local.env" : ".env"}`,
});

const app = express();
const path = require("path");
const port = getENV("PORT") || 5000;

app.use(compression());

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true, limit: "5mb" }));

const server = require("http").createServer(app);

app.use(cors());

app.disable("x-powered-by");
app.set("etag", false);
app.use(express.json());
app.use(cookieParser());

app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  next();
});

// eslint-disable-next-line no-undef
app.use(`/static`, express.static(path.join(__dirname, "public")));

app.use(`/`, require("./routes/index"));
const errorHandler = require("./app/middlewares/error-handlers/error-handler");

app.use("*", function (req, res) {
  res.status(404).render("404", { layout: false });
});

app.use(errorHandler);

server.listen(port, () => {
  console.log("Listening on PORT -->", port);
});
