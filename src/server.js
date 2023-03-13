const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

const counters = [{ name: "cars", value: 0 }];

app.get("/counter", (req, res) => {
  res.send({ counter: counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  res.send({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  --counter;
  res.status(201).json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  counter = counter * 2;
  res.status(201).json({ counter: counter });
});

app.put("/counter", (req, res) => {
  counter = Number(req.query.value);
  res.status(201).json({ counter: counter });
});

app.get("/counter/:name", (req, res) => {
  const name = req.params.name;
  const target = counters.find((counter) => counter.name === name);
  res.send({ counter: target.value });
});

app.delete("/counter/:name", (req, res) => {
  const name = req.params.name;
  const target = counters.find((counter) => counter.name === name);
  target.value = 0;
  res.send({ counter: target.value });
});

app.post("/counter/:name/increment", (req, res) => {
  const name = req.params.name;
  const target = counters.find((counter) => counter.name === name);
  target.value++;
  res.status(201).json({ counter: target.value });
});

app.post("/counter/:name/decrement", (req, res) => {
  const name = req.params.name;
  const target = counters.find((counter) => counter.name === name);
  --target.value;
  res.status(201).json({ counter: target.value });
});

app.put("/counter/:name", (req, res) => {
  const name = req.params.name;
  const value = req.query.value;
  const target = counters.find((counter) => counter.name === name);
  target.value = value;
  res.status(201).json({ counter: target.value });
});

app.post("/counter/:name/double", (req, res) => {
  const name = req.params.name;
  const target = counters.find((counter) => counter.name === name);
  target.value = target.value * 2;
  res.status(201).json({ counter: target.value });
});

module.exports = app;
