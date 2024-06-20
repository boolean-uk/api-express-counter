const express = require("express");

const app = express();
app.use(express.json());

// Data
const counters = { counter1: 0 };

// Standard
app.get("/counter", (req, res) => {
  res.status(200).json({ counter: counters.counter1 });
});

app.post("/counter/increment", (req, res) => {
  counters.counter1++;
  res.status(201).json({ counter: counters.counter1 });
});

app.post("/counter/decrement", (req, res) => {
  counters.counter1--;
  res.status(201).json({ counter: counters.counter1 });
});

app.post("/counter/double", (req, res) => {
  counters.counter1 *= 2;
  res.status(201).json({ counter: counters.counter1 });
});

app.delete("/counter", (req, res) => {
  counters.counter1 = 0;
  res.status(200).json({ counter: counters.counter1 });
});

// Extension 1
app.put("/counter", (req, res) => {
  if (!req.query.value) {
    return res.status(400).json({
      message: "You should provied a value! ex: /counter?value=number",
    });
  }

  counters.counter1 = Number.parseInt(req.query.value, 10);
  res.status(201).json({ counter: counters.counter1 });
});

// Extension 2
app.get("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  const counter = counters[counterName];

  console.log(counter);
  if (counter === undefined) {
    counters[counterName] = 0;
    return res.status(200).json({ counter: 0 });
  }

  res.status(200).json({ counter });
});

app.post("/counter/:name/increment", (req, res) => {
  const counterName = req.params.name;
  const counter = counters[counterName];

  if (counter === undefined) {
    counters[counterName] = 0;
    counters[counterName]++;

    return res.status(201).json({ counter: counters[counterName] });
  }
  counters[counterName]++;
  res.status(201).json({ counter: counters[counterName] });
});

app.post("/counter/:name/decrement", (req, res) => {
  const counterName = req.params.name;
  const counter = counters[counterName];

  if (counter === undefined) {
    counters[counterName] = 0;
    counters[counterName]--;

    return res.status(201).json({ counter: counters[counterName] });
  }
  counters[counterName]--;
  res.status(201).json({ counter: counters[counterName] });
});

app.post("/counter/:name/double", (req, res) => {
  const counterName = req.params.name;
  const counter = counters[counterName];

  if (counter === undefined) {
    counters[counterName] = 0;
    return res.status(201).json({ counter: counters[counterName] });
  }
  counters[counterName] *= 2;
  res.status(201).json({ counter: counters[counterName] });
});

app.delete("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  counters[counterName] = 0;

  res.status(200).json({ counter: counters[counterName] });
});

app.put("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  const counter = counters[counterName];

  if (counter === undefined && req.query.value) {
    counters[counterName] = req.query.value;
    return res.status(201).json({ counter: counters[counterName] });
  }

  if (!req.query.value) {
    return res.status(400).json({
      message: "You should provied a value! ex: /counter?value=number",
    });

    counters[counterName] = req.query.value;
    res.status(200).json({ counter: counters[counterName] });
  }

  counters.counter1 = Number.parseInt(req.query.value, 10);
  res.status(201).json({ counter: counters.counter1 });
});
module.exports = app;
