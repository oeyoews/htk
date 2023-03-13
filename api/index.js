const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const fs = require("fs");

const quotes = [
  {
    text: "Success 🎉 ",
    author: "@oeyoews",
  },
];

app.use(cors());

// json file
app.get("/api/:id?", (req, res) => {
  const filePath = path.join(__dirname, "assets", "quotes.json");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const quotes = JSON.parse(data);
    let quote;
    if (req.params.id === "htk" || req.query.select === "#htk") {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quote = quotes[randomIndex];
      const html = `<html><body><div id="htk">Hello, this is the default quote.</div></body></html>`;
      const dom = new DOMParser().parseFromString(html, "text/html");
      const htkElement = dom.querySelector("#htk");
      htkElement.textContent = quote.text;
      res.send(dom.documentElement.outerHTML);
    } else {
      const selectedQuote = req.query.select;
      if (selectedQuote) {
        quote = quotes.find((q) => q.text === selectedQuote);
      } else {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quote = quotes[randomIndex];
      }
      const encodedQuote =
        req.query.encode === "js" ? JSON.stringify(quote) : quote;
      res.json(encodedQuote);
    }
  });
});

// test
app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  res.json(quote);
});

module.exports = app;
