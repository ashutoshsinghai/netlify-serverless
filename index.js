const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is root ! Welcome here");
});

module.exports = app;
