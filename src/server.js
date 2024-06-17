const express = require("express");

const app = express();
app.use(express.json());

const counter = { counter: 0 };

// the callback fn is call 'the route handler'
app.get("/counter", (req, res) => {
  res.status(200).send(counter);
});

app.post("/counter/increment", (req, res) => {
  counter.counter++;
  res.status(201).send(counter);
});

app.post("/counter/decrement", (req, res) => {
  if (counter.counter) counter.counter--;
  res.status(201).send(counter);
});

app.post("/counter/double", (req, res) => {
  if (counter.counter) counter.counter *= 2;
  res.status(201).send(counter);
});

app.delete("/counter", (req, res) => {
  counter.counter = 0;
  res.status(200).send(counter);
});

// Extension 1
app.put("/counter", (req, res) => {
  if (!req.query.value) {
    return res
      .status(400)
      .send("You should provied a value! e.g: /counter?value=number ");
  }

  counter.counter = Number.parseInt(req.query.value, 10);
  res.status(201).send(counter);
});

module.exports = app;
