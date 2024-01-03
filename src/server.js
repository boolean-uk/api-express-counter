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

let count = 0;

app.get("/", (req, res) => {
  res.status(201).json({ message: "Counter API" });
});

app.get("/counter", (req, res) => {
  const counter = {
    counter: count,
  };

  res.status(200).json(counter);
});

app.delete("/counter", (req, res) => {
  count = 0;
  const counter = {
    counter: count,
  };

  res.status(200).json(counter);
});

app.post("/counter/increment", (req, res) => {
  const counter = {
    counter: ++count,
  };

  res.status(201).json(counter);
});

app.post("/counter/decrement", (req, res) => {
  const counter = {
    counter: --count,
  };

  res.status(201).json(counter);
});

app.post("/counter/double", (req, res) => {
  const counter = {
    counter: (count *= 2),
  };

  res.status(201).json(counter);
});

app.put("/counter", (req, res) => {
  const query = req.query;

  const counter = {
    counter: query.value,
  };

  res.status(201).json(counter);
});

module.exports = app;
