// request is deprecated and replaced by htps which is built
// into express
//
const port = process.env.PORT || 3000;
const express = require("express");
// body-parser is replace by express.json
// const bodyParser = require("body-parser");
const https = require("https");
const ejs = require("ejs");
const app = express();

// Used to parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  const currentDay = today.getDay();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var day = days[currentDay];

  res.render("list", { kindOfDay: day });
});

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});
