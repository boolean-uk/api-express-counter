//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
const { query } = require("express");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

let counter = 0;
let counters = [{ counterName: "counterOne", counterAmount: 2 }];

app.get("/counter", (req, res) => {
  console.log("got request!");
  res.status(200).json({
    counter: counter,
  });
});

app.delete("/counter", (req, res) => {
  console.log("got request!");
  counter = 0;
  res.status(200).json({
    counter: counter,
  });
});

app.post("/counter/increment", (req, res) => {
  console.log("got request!");
  counter += 1;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/decrement", (req, res) => {
  console.log("got request!");
  counter -= 1;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/double", (req, res) => {
  console.log("got request!");
  counter = counter * 2;
  res.status(201).json({
    counter: counter,
  });
});

app.put("/counter", (req, res) => {
  let amount = req.query.amount;
  counter = amount;
  res.json({
    counter: counter,
  });
});

app.get("/counter/:name", (req, res) => {
  let name = req.params.name;
  res.json({
    counter: name,
  });
});
module.exports = app;
