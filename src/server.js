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

app.get("/counter", (req, res) => {
  console.log("got request!");
  res.json({
    counter: counter,
  });
});

app.delete("/counter", (req, res) => {
  console.log("got request!");
  counter = 0;
  res.json({
    counter: counter,
  });
});

app.post("/counter/increment", (req, res) => {
  console.log("got request!");
  counter += 1;
  res.json({
    counter: counter,
  });
});

app.post("/counter/decrement", (req, res) => {
  console.log("got request!");
  counter -= 1;
  res.json({
    counter: counter,
  });
});

app.post("/counter/double", (req, res) => {
  console.log("got request!");
  counter = counter * 2;
  res.json({
    counter: counter,
  });
});

module.exports = app;
