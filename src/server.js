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
  { id: 1, value: 5 },
  { id: 2, value: 7 },
  { id: 3, value: 0 },
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

app.get("/counter/:id", (req, res) => {
  counter = counters.find((item) => item.id === Number(req.params.id));

  res.json({ counter: counter.value });
});

app.delete("/counter/:id", (req, res) => {
  counter = counters.find((item) => item.id === Number(req.params.id));
  counter.value = 0;

  res.status(200).json({ counter: counter.value });
});

app.post("/counter/:id/increment", (req, res) => {
  counter = counters.find((item) => item.id === Number(req.params.id));
  counter.value++;

  res.status(201).json({ counter: counter.value });
});

app.post("/counter/:id/decrement", (req, res) => {
  counter = counters.find((item) => item.id === Number(req.params.id));
  counter.value--;

  res.status(201).json({ counter: counter.value });
});

app.post("/counter/:id/double", (req, res) => {
  counter = counters.find((item) => item.id === Number(req.params.id));
  counter.value = counter.value * 2;

  res.status(201).json({ counter: counter.value });
});

module.exports = app;
