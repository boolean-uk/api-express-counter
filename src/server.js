// Import library/framworks
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Define express as 'app'
const app = express();

// Using frameworks with express
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const state = {
  counter: 0,
};

// Get request
app.get("/counter", (req, res) => {
  res.status(200).json(state);
});

app.post("/counter/increment", (req, res) => {
  state.counter++;
  res.status(201).json(state);
});

module.exports = app;
