const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");
require("./database/mongodbinit");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

const allroutes = require("./routes/index");

app.use(allroutes);

app.get("/", (req, res, next) => {
  res.send("hello world");
});

/** catch 404 and forward to error handler */
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

app.use(function (err, req, res, next) {
  if (err.message) {
    res.status(400).send(err.message);
  } else {
    err.message = "internal server error";
    res.status(500).send(err.message);
  }
});

const PORT = process.env.Port || 8080;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
