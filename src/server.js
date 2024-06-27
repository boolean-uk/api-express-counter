const express = require("express");
const app = express();
const port = 3030;

let counter = 0;
app.get("/counter", (req, res) => {
  console.log(counter);
  res.status(200).json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  counter *= 2;
  res.status(201).json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  res.status(200).json({ counter: counter });
});

module.exports = app;
