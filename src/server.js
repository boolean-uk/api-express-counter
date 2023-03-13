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

let counter = 0;

const counters = [
  { counter: 1, value: 0 },
  { name: "cars", value: 0 },
];

//  GET: RETRIEVE THE CURRENT COUNTER
/* Response should look like this:
{
  "counter": 0
} 
*/
app.get("/counter", (req, res) => {
  res.json({ counter });
});

// DEL: Reset the counter to 0
app.delete("/counter", (req, res) => {
  counter = 0;
  res.json({ counter });
});

// POST: Increment the counter
app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter });
});

// POST: Decrement the counter
app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter });
});

// POST: Double the counter
app.post("/counter/double", (req, res) => {
  counter *= 2;
  res.status(201).json({ counter });
});

// EXTENSIONS

// PUT - REQUEST QUERY: Set the counter to a specific value via a query parameter
app.put("/counter", (req, res) => {
  const taskCounter = Number(req.query.value);
  counter = taskCounter;
  res.status(201).json({ counter: taskCounter });
});

// PUT  - Set the counter to a specific value via a query paramter for the specific name
app.put("/counter/:name", (req, res) => {
  const numberToBeSet = Number(req.query.value);
  const counterName = req.params.name;
  const taskCounter = counters.find((item) => item.name === counterName);
  taskCounter.value = numberToBeSet;
  res.status(201).json({ counter: taskCounter.value });
});

// GET - Retrieve the current counter for the provided counter name
app.get("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  counter = counters.find((item) => item.name === counterName);
  res.json({ counter: counter.value });
});

// DELETE - Reset the counter for the provided name to 0
app.delete("/counter/:name", (req, res) => {
  const counterName = req.params.name;
  const taskCounter = counters.find((item) => item.name === counterName);
  taskCounter.value = 0;
  res.json({ counter: taskCounter.value });
});

// POST - Increment the counter for the provided name
app.post("/counter/:name/increment", (req, res) => {
  const counterName = req.params.name;
  const taskCounter = counters.find((item) => item.name === counterName);
  taskCounter.value += 1;
  res.status(201).json({ counter: taskCounter.value });
});

// POST - Decrement the counter for the provided name
app.post("/counter/:name/decrement", (req, res) => {
  const counterName = req.params.name;
  const taskCounter = counters.find((item) => item.name === counterName);
  taskCounter.value -= 1;
  res.status(201).json({ counter: taskCounter.value });
});

// POST - Double the counter for the provided name
app.post("/counter/:name/double", (req, res) => {
  const counterName = req.params.name;
  const taskCounter = counters.find((item) => item.name === counterName);
  taskCounter.value *= 2;
  res.status(201).json({ counter: taskCounter.value });
});
module.exports = app;
