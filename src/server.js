// Import library/framworks
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Define express as 'app'
const app = express();

// Using frameworks with express
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const state = {
  counter: 0,
};

app.get("/counter", (req, res) => {
  res.status(200).json(state);
});

app.post("/counter/increment", (req, res) => {
  state.counter++;
  res.status(201).json(state);
});

app.post("/counter/decrement", (req, res) => {
  state.counter--;
  res.status(201).json(state);
});

app.post("/counter/double", (req, res) => {
  state.counter *= 2;
  res.status(201).json(state);
});

app.delete("/counter", (req, res) => {
  state.counter = 0;
  res.status(200).json(state);
});

// Extension 1
app.put(`/counter`, (req, res) => {
  const newValue = Number(req.query.value);
  state.counter = newValue;
  res.status(201).json(state);
});

const counters = {};

app.get("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  if (!counters[counterName]) {
    counters[counterName] = 0;
  }

  res.json({ counter: counters[counterName] });
});

app.put("/counter/:name/set", (req, res) => {
  const counterName = req.params.name;
  const newValue = parseInt(req.query.value);

  if (!counters[counterName]) {
    counters[counterName] = 0;
  }

  if (!isNaN(newValue)) {
    counters[counterName] = newValue;
    res.json({ counter: counters[counterName] });
  } else {
    res.status(400).json({ error: "Invalid value provided." });
  }
});

module.exports = app;
