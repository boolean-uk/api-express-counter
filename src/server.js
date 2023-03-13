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

const counter = { counter: 0 };

app.get("/counter", (req, res) => {
  res.status(200).json({ counter: counter.counter });
});

app.delete("/counter", (req, res) => {
  counter.counter = 0;
  res.status(200).json({ counter: counter.counter });
});

app.post("/counter/increment", (req, res) => {
  counter.counter++;
  res.status(201).json({ counter: counter.counter });
});

app.post("/counter/decrement", (req, res) => {
  counter.counter--;
  res.status(201).json({ counter: counter.counter });
});

app.post("/counter/double", (req, res) => {
  counter.counter = counter.counter * 2;
  res.status(201).json({ counter: counter.counter });
});

module.exports = app;
