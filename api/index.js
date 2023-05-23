/* import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs"; */

const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

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
      const html = `<div id="htk">${quote.text}</div>`;
      res.send(html);
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

// example
app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  res.json(quote);
});

export default app;
