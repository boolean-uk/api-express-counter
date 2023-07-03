//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body

let counter = 0;

app.get("/counter", (req, res) => {
  return res.status(200).json({ counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  return res.status(200).json({ counter });
});

app.post("/counter/increment", (req, res) => {
  counter += 1;
  return res.status(201).json({ counter });
});

app.post("/counter/decrement", (req, res) => {
  counter -= 1;
  return res.status(201).json({ counter });
});

app.post("/counter/double", (req, res) => {
  counter *= 2;
  return res.status(201).json({ counter });
});

module.exports = app;




