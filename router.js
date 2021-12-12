const app = require("express").Router();

app.get("/", (req, res) => {
  res.send("This is root ! Welcome here");
});

module.exports = app;
