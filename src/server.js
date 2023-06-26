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

// CORE
const core = {
  counter: 0,
};

// Set counter to specific value
const setCounterValue = (value) => {
  return (core.counter = value);
};

// 1. Retrieve the current counter
app.get("/counter", (req, res) => {
  return res.send(core);
});

// 2. Reset counter to 0
app.delete("/counter", (re, res) => {
  core.counter = 0;
  return res.send(core);
});

// 3. Increment the counter
app.post("/counter/increment", (req, res) => {
  core.counter++;
  return res.status(201).send(core);
});

// 4. Decrement the counter
app.post("/counter/decrement", (req, res) => {
  core.counter--;
  return res.status(201).send(core);
});

// 5. Double the counter
app.post("/counter/double", (req, res) => {
  core.counter *= 2;
  return res.status(201).send(core);
});

// EXTENSION 1
const extension = [
  {
    name: "cars",
    counter: 0,
  },
  {
    name: "bicycles",
    counter: 0,
  },
];

const findCounterByName = (name) => {
  return extension.find((item) => item.name === name);
};

// 6. Set the counter to a specific value via a query parameter
app.put("/counter", (req, res) => {
  const { value } = req.query;
  setCounterValue(Number(value));
  return res.status(201).send(core);
  // return res.status(201).send({ counter: core.counter });
});

// Retrieve the current counter for the provided counter name
app.get("/counter/:name", (req, res) => {
  const { name } = req.params;
  const result = findCounterByName(name);
  return res.send({ counter: result.counter });
});

// Reset the counter for the provided name to 0
app.delete("/counter/:name", (req, res) => {
  const { name } = req.params;
  const result = findCounterByName(name);

  if (result) {
    result.counter = 0;
    return res.send({ counter: result.counter });
  } else {
    return res.status(404).send("Data not found");
  }
});

// Increment the counter for the provided name
app.post("/counter/:name/increment", (req, res) => {
  const { name } = req.params;
  const result = findCounterByName(name);

  if (result) {
    result.counter++;
    return res.status(201).send({ counter: result.counter });
  } else {
    return res.status(404).send("Data not found");
  }
});

// Decrement the counter for the provided name
app.post("/counter/:name/decrement", (req, res) => {
  const { name } = req.params;
  const result = findCounterByName(name);

  if (result) {
    result.counter--;
    return res.status(201).send({ counter: result.counter });
  } else {
    return res.status(404).send("Data not found");
  }
});

// Double the counter for the provided name
app.post("/counter/:name/double", (req, res) => {
  const { name } = req.params;
  const result = findCounterByName(name);

  if (result) {
    result.counter *= 2;
    return res.status(201).send({ counter: result.counter });
  } else {
    return res.status(404).send("Data not found");
  }
});

app.put("/counter/:name", (req, res) => {
  const { value } = req.query;
  const { name } = req.params;

  const result = findCounterByName(name);
  result.counter = value;

  return res.send({ counter: result.counter });
});

module.exports = app;
