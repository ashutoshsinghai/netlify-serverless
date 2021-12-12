const app = require("express").Router();
const fetch = require("node-fetch");

app.get("/", (req, res) => {
  res.send("This is root ! Welcome here");
});

app.get("/compare", (req, res) => {
  const link = req.query.amazon;
  fetch(link)
    .then((e) => e.text())
    .then((r) => {
      res.send(r);
    });
});

app.get("*", function (req, res) {
  res.send("No handler found for - " + req.path);
});

module.exports = app;
