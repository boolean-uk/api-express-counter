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

// Ext 1(Set the counter to a specific value via a query parameter)
app.put("/counter", (req, res) => {
  counter = Number(req.query.value);
  res.status(201).json({ counter });
});

// Ext 2
// GET(Retrieve the current counter for the provided counter name)
let counterList = {
  cars: 0,
  planes: 50,
  rockets: 100,
};
app.get("/counter/:name", (req, res) => {
  res.json({ counter: counterList[req.params.name] });
});

// DELETE(Reset the counter for the provided name to 0)
app.delete("/counter/:name", (req, res) => {
  counterList[req.params.name] = 0;
  res.json({ counter: counterList[req.params.name] });
});

// Increment(Increment the counter for the provided name)
app.post("/counter/:name/increment", (req, res) => {
  counterList[req.params.name] += 1;
  res.status(201).json({ counter: counterList[req.params.name] });
});

// Decrement(Deccrement the counter for the provided name)
app.post("/counter/:name/decrement", (req, res) => {
  counterList[req.params.name] -= 1;
  res.status(201).json({ counter: counterList[req.params.name] });
});

// Double(Double the counter for the provided name)
app.post("/counter/:name/double", (req, res) => {
  counterList[req.params.name] *= 2;
  res.status(201).json({ counter: counterList[req.params.name] });
});

module.exports = app;
