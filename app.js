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
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

// where to get our static resources from
app.use(express.static("public"));

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
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: date, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if ( req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  }
  else {
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});
