//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
const req = require("express/lib/request");

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
  return res.send({ counter });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  return res.send({ counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  return res.status(201).send({ counter });
});

app.post("/counter/decrement", (req, res) => {
  --counter;
  return res.status(201).send({ counter });
});

app.post("/counter/double", (req, res) => {
  if (counter === 0) {
    return res.status(201).send({ counter });
  }
  counter = counter * 2;
  return res.status(201).send({ counter });
});

app.put("/counter", (req, res) => {
  counter = Number(req.query.value);
  res.status(201).send({ counter });
});

module.exports = app;
