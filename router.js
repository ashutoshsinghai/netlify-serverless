import { Router } from "express";
import fetch from "node-fetch";
// import cheerio from "cheerio";
// import request from "./fetch.js";

const app = Router();

app.get("/", (req, res) => {
  res.send("This is root ! Welcome here");
});

// app.get("/compare", (req, res) => {
//   const link = req.query.search;
//   request(`https://pricee.com/?q=${link}`)
//     .then((e) => e.text())
//     .then((r) => {
//       console.log(r);
//       const $ = cheerio.load(r);
//       const elems = $(".pd-detail");
//       console.log(cheerio);
//       console.log(elems);
//       const result = [];
//       const result = elems.map((elem) => {
//         const name = elem.find("[itemprop=name]");
//         console.log(name.text());
//         const price = elem.find(".pd-price");
//         const p = price.text().split(/[ ()]/);
//         return { name, price: p[1] };
//       });
//       const array = [...price.children[0].children[0].children[0].children].map(
//         (e) =>
//           e.innerText
//             .split("\n")
//             .map((e) => e.trim())
//             .slice(0, 2)
//       );
//       res.send(result);
//     });
// });

app.get("/prices", async (req, res) => {
  const { search, size = 10, page = 1 } = req.query;
  const result = await fetch(
    `https://pricee.com/api/v1/search.php?q=${search}&size=${size}&page=${page}&lang=en&vuid=0&platform=1`
  ).then((e) => e.json());
  res.json(
    result.data.map((e) => {
      return {
        title: e.title,
        name: e.source_display_name,
        price: e.source_display_name,
        image: e.image,
      };
    })
  );
});

app.get("/suggestions", async (req, res) => {
  const { search, size = 10, page = 1 } = req.query;
  const result = await fetch(
    `https://pricee.com/api/v1/suggest.php?q=${search}&lang=en`
  ).then((e) => e.json());
  res.json(result.data || []);
});

app.get("*", function (req, res) {
  res.send("No handler found for - " + req.path);
});

export default app;
