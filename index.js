import express from "express";
import router from "./router.js";

const app = express();

app.use("/.netlify/functions/api", router);

app.get("*", function (req, res) {
  res.send("No handler found for - " + req.path);
});

if (process.argv[2] === "local") {
  app.listen(9000);
}

export default app;
