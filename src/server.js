const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

let counter = 0;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Finally some API" });
});

app.get("/counter", (req, res) => {
  res.status(200).json({ counter: counter });
});
app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter: counter });
});

app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

module.exports = app;
