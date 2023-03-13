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
app.get("/api", (req, res) => {
  const filePath = path.join(__dirname, "assets", "quotes.json");
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
      return;
    }
    const quotes = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    res.json(quote);
  });
});

// example
app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  res.json(quote);
});

module.exports = app;
