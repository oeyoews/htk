const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
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
