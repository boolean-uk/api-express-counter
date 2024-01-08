const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/counter", (req, res) => {
  res.json({ count: counter });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.json({ message: "Counter incremented", count: counter });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.json({ message: "Counter decremented", count: counter });
});

module.exports = app;
