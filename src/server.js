//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

let counter = 0;

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

app.get("/counter", function (req, res) {
  res.status(200).json({ counter: counter });
});

app.delete("/counter", function (req, res) {
  counter = 0;
  res.status(200).json({ counter: counter });
});

app.post("/counter/increment", function (req, res) {
  counter += 1;
  res.status(200).json({ counter: counter });
});

app.post("/counter/decrement", function (req, res) {
  counter -= 1;
  res.status(200).json({ counter: counter });
});

app.post("/counter/double", function (req, res) {
  counter = counter * 2;
  res.status(200).json({ counter: counter });
});

app.put("/counter", function (req, res) {
  counter = +req.query.value;
  res.status(200).json({ counter: counter });
});

//Export our app so other files can run it
module.exports = app;
