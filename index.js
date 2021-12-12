const express = require("express");

const app = express();

app.use("/.netlify/functions/api", require("./router.js"));

app.get("*", function (req, res) {
  res.send("Hello world : Error - link - " + req.path);
});

module.exports = app;
