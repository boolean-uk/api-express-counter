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

const data = { counter: 0 };

app.get("/counter", function (req, res) {
  res.json(data);
});

app.delete("/counter", function (req, res) {
  data.counter = 0;
  res.json(data);
});

app.post("/counter/increment", function (req, res) {
  data.counter++;
  res.status(201).json(data);
});
app.post("/counter/decrement", function (req, res) {
  data.counter--;
  res.status(201).json(data);
});

app.post("/counter/double", function (req, res) {
  data.counter = data.counter * 2;
  res.status(201).json(data);
});

app.put("/counter", function (req, res) {
  const value = Number(req.query.value);
  console.log(value);
  if (!isNaN(value)) {
    data.counter = value;
    res.status(201).json(data);
  } else {
    res.status(418).json("invalid");
  }
});

//Export our app so other files can run it
module.exports = app;
