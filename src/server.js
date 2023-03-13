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
  { name: "cars", value: 0 },
  { name: "2", value: 0 },
];

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
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
  counter = counter * 2;

  res.status(201).json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;

  res.status(200).json({ counter: counter });
});

app.put(`/counter`, (req, res) => {
  counter = Number(req.query.value);

  res.status(201).json({ counter: counter });
});

app.get("/counter/:name", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);

  res.status(200).json({ counter: counter.value });
});

app.delete("/counter/:name", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);
  counter.value = 0;

  res.status(200).json({ counter: counter.value });
});

app.post("/counter/:name/increment", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);
  counter.value++;

  res.status(201).json({ counter: counter.value });
});

app.post("/counter/:name/decrement", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);
  counter.value--;

  res.status(201).json({ counter: counter.value });
});

app.put("/counter/:name", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);
  counter.value = Number(req.query.value);

  res.status(201).json({ counter: counter.value });
});

app.post("/counter/:name/double", (req, res) => {
  counter = counters.find((item) => item.name === req.params.name);
  counter.value = counter.value * 2;

  res.status(201).json({ counter: counter.value });
});

module.exports = app;
