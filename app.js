// request is deprecated and replaced by htps which is built
// into express
//
const port = process.env.PORT || 3000;
const express = require("express");
// body-parser is replace by express.json
// const bodyParser = require("body-parser");
const https = require("https");
const app = express();

// Used to parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static("public"));

app.get("/", function (req, res) {
    var today = new Date();
    const day = today.getDay();

    res.write("<h1>Day of week</h1>")
    res.write("<p>It is day: "+day+"</p>");
    if (  day == 6 || day == 0 )
    {
        res.write("<p>yay, it's the weekend!</p>");
    }
    else {
        res.write("<p>boo, it's a workday!</p>");
    }
    res.send();
});

app.listen(port, function () {
  console.log("Server is listening on port: " + port);
});
