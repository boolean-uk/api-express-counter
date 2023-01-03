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

// GET(retrieve the current counter)
let counter = 0;
app.get("/counter", (req, res) => {
  res.json({ counter });
});

// Delete(reset the counter to 0)
app.delete("/counter", (req, res) => {
  counter = 0;
  res.json({ counter });
});

// POST(increment the counter)
app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter });
});

// POST(decrement the counter)
app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter });
});

// POST(double the counter)
app.post("/counter/double", (req, res) => {
  counter = counter * 2;
  res.status(201).json({ counter });
});

// Ext 1
app.put("/counter", (req, res) => {
  counter = Number(req.query.value);
  res.status(201).json({ counter });
});

module.exports = app;
