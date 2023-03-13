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

//store the  counter outside the functions:
let counter = 0;

// routes below here
app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter += 1;
  res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter -= 1;
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

// Extension 1:
// :value = ":" maks it a dynamic
app.put("/counter", (req, res) => {
  // counter = req.query.value;
  counter = Number(req.query.value);
  res.status(201).json({ counter: counter });
});

// Extension 2:
const counters = [
  { name: "cars", value: 0 },
  { name: "2", value: 0 },
];

app.get("/counter/:name", (req, res) => {
  const name = req.params.name;
  const counter = counters.find((item) => item.name === name);
  //default is 200 so don't need to type it in
  res.json({ counter: Number(counter.value) });
});

app.delete("/counter/:name", (req, res) => {
  const name = req.params.name;
  const counter = counters.find((item) => item.name === name);
  //   if (!counter) {
  //     return res.status(404);
  //   }
  counter.value = 0;
  res.status(200).json({ counter: counter.value });
});

app.post("/counter/:name/increment", (req, res) => {
  console.log("req.params.name --line 76:", req.params.name);
  const counter = counters.find((item) => {
    return item.name === req.params.name;
  });
  console.log("counter post req.params.name --line 80:", counter);

  counter.value += 1;
  res.status(201).json({ counter: Number(counter.value) });
});

app.post("/counter/:name/decrement", (req, res) => {
  const name = req.params.name;
  const counter = counters.find((item) => item.name === name);
  counter.value -= 1;
  res.status(201).json({ counter: Number(counter.value) });
});

app.post("/counter/:name/double", (req, res) => {
  const name = req.params.name;
  const counter = counters.find((item) => item.name === name);
  counter.value *= 2;
  //   counter.value = counter.value === 0 ? 2 : counter.value * 2;
  res.status(201).json({ counter: counter.value });
});

app.put("/counter/:name", (req, res) => {
  const name = req.params.name;
  const counter = counters.find((item) => item.name === name);
  // counter = req.query.value;
  counter.value = Number(req.query.value);
  res.status(201).json({ counter: counter.value });
});

module.exports = app;
