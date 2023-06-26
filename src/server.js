//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

const counter = {
  counter: 0,
};

// Reset Counter
const resetCounter = () => {
  return (counter.counter = 0);
};

// Increment Counter
const incrementCounter = () => {
  return counter.counter++;
};

// Decrement Counter
const decrementCounter = () => {
  return counter.counter--;
};

// Double Counter
const doubleCounter = () => {
  return (counter.counter *= 2);
};

// Set counter to specific value
const setCounterValue = (value) => {
  return (counter.counter = value);
};

// 1. Retrieve the current counter
app.get("/counter", (req, res) => {
  return res.send(counter);
});

// 2. Reset counter to 0
app.delete("/counter", (re, res) => {
  resetCounter();
  return res.send(counter);
});

// Increment the counter
app.post("/counter/increment", (req, res) => {
  incrementCounter();
  return res.status(201).send(counter);
});

// Decrement the counter
app.post("/counter/decrement", (req, res) => {
  decrementCounter();
  return res.status(201).send(counter);
});

// Double the counter
app.post("/counter/double", (req, res) => {
  doubleCounter();
  return res.status(201).send(counter);
});

// EXTENSION 1
// Set the counter to a specific value via a query parameter
app.put("/counter", (req, res) => {
  const { value } = req.query;
  console.log("Query Value", value);
  setCounterValue(Number(value));
  return res.send(counter);
});

module.exports = app;
