// Include the express library
const express = require("express");
// Include the morgan middleware
const morgan = require("morgan");
// Include the cors middleware
const cors = require("cors");

// Create a new express application
const app = express();

// Tell express we want to use the morgan library
app.use(morgan("dev"));
// Tell express we want to use the cors library
app.use(cors());
// Tell express to parse JSON in the request body
app.use(express.json());

const counter = {
  counter: 0,
};
const counters = [{ name: "cars", counter: 0 }];
const findInCounters = (name) => {
  return counters.find((item) => item.name === name);
};
app.get("/counter", (req, res) => {
  return res.send(counter);
});
app.delete("/counter", (req, res) => {
  counter.counter = 0;
  return res.send(counter);
});
app.post("/counter/increment", (req, res) => {
  counter.counter += 1;
  return res.status(201).send(counter);
});
app.post("/counter/decrement", (req, res) => {
  counter.counter -= 1;
  return res.status(201).send(counter);
});
app.post("/counter/double", (req, res) => {
  counter.counter *= 2;
  return res.status(201).send(counter);
});
app.put("/counter", (req, res) => {
  const value = Number(req.query.value);
  counter.counter = value;
  return res.status(201).send(counter);
});
app.put("/counter/:name", (req, res) => {
  const value = Number(req.query.value);
  const foundCounter = findInCounters(req.params.name);
  foundCounter.counter = value;
  return res.status(201).send(foundCounter);
});
app.post("/counter/:name/increment", (req, res) => {
  const { name } = req.params;
  const foundCounter = findInCounters(name);
  if (foundCounter) {
    foundCounter.counter++;
    return res.status(201).send(foundCounter);
  } else {
    return res.status(404).send(`Counter ${name} not found`);
  }
});
app.get("/counter/:name", (req, res) => {
  const { name } = req.params;
  const foundCounter = findInCounters(name);
  if (foundCounter) {
    return res.status(200).send(foundCounter);
  } else {
    return res.status(404).send(`Counter ${name} not found`);
  }
});
app.delete("/counter/:name", (req, res) => {
  const { name } = req.params;
  const foundCounter = findInCounters(name);
  if (foundCounter) {
    foundCounter.counter = 0;
    return res.status(200).send(foundCounter);
  } else {
    return res.status(404).send(`Counter ${name} not found`);
  }
});
app.post("/counter/:name/decrement", (req, res) => {
  const { name } = req.params;
  const foundCounter = findInCounters(name);
  if (foundCounter) {
    foundCounter.counter--;
    return res.status(201).send(foundCounter);
  } else {
    return res.status(404).send(`Counter ${name} not found`);
  }
});
app.post("/counter/:name/double", (req, res) => {
  const { name } = req.params;
  const foundCounter = findInCounters(name);
  if (foundCounter) {
    foundCounter.counter *= 2;
    return res.status(201).send(foundCounter);
  } else {
    return res.status(404).send(`Counter ${name} not found`);
  }
});

module.exports = app;
