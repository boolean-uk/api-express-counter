//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();
let counter = 1;

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

app.post("/increment", (req, res) => {
  counter += 1;
  res.json({ counter: counter });
});

app.post("/decrement", (req, res) => {
  counter -= 1;
  res.json({ counter: counter });
});
module.exports = app;
