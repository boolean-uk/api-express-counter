const express = require("express");

const app = express();

const count = { counter: 0 };

app.get("/counter", (req, res) => {
  res.status(200).json(count);
});

app.post("/counter/increment", (req, res) => {
  count.counter += 1;
  res.status(201).json(count);
});

app.post("/counter/decrement", (req, res) => {
  count.counter -= 1;
  res.status(201).json(count);
});
app.post("/counter/double", (req, res) => {
  count.counter *= 2;
  res.status(201).json(count);
});
app.delete("/counter", (req, res) => {
  count.counter = 0;
  res.status(200).json(count);
});

module.exports = app;
