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

// Retrieve the current counter

app.get("/counter", (req, res) => {
  return res.send({ counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  return res.send({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  return res.status(201).send({ counter: counter });
});
app.post("/counter/decrement", (req, res) => {
  counter--;
  return res.status(201).send({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  counter = counter * 2;
  return res.status(201).send({ counter: counter });
});

app.put("/counter", (req, res) => {
  const { value } = req.query;
  counter = Number (value)

  return res.status(201).send({ counter });
});
module.exports = app;
