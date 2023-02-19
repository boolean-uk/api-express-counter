//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
const { application } = require("express");

//Create a new express application
const app = express();
let counter = 0;

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
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

app.put("/counter", (req, res) => {
  counter = req.query.value;
  res.json({ counter: counter });
});
module.exports = app;
