import express from "express";
const app = express();
const router = express.Router();
import fetch from "node-fetch";

app.use("/.netlify/functions/api", router);

router.get("/", (req, res) => {
  res.json({ name: "Ashutosh Singhai" });
});

router.get("/suggestions", async (req, res) => {
  const { search, size = 10, page = 1 } = req.query;
  const result = await fetch(
    `https://pricee.com/api/v1/suggest.php?q=${search}&lang=en`
  ).then((e) => e.json());
  res.json(result.data || []);
});

router.get("/prices", async (req, res) => {
    const { search, size = 10, page = 1 } = req.query;
    const result = await fetch(
      `https://pricee.com/api/v1/search.php?q=${search}&size=${size}&page=${page}&lang=en&vuid=0&platform=1`
    ).then((e) => e.json());
    res.json(
      result.data.map((e) => {
        return {
          title: e.title,
          name: e.source_display_name,
          price: e.source_price,
          image: e.image,
        };
      })
    );
  });

const serverless = require("serverless-http");
exports.handler = serverless(app);
