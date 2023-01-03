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

let value = 0;
app.get("/", (req, res) => {
  res.send("counter");
});
app.get("/counter", (req, res) => {
  res.json({ counter: value });
});
//increase counter
app.post("/counter/increment", (req, res) => {
  value++;
  res.status(201);
  res.json({ counter: value });
});
//decrease counter
app.post("/counter/decrement", (req, res) => {
  value--;
  res.status(201);
  res.json({ counter: value });
});
// double counter
app.post("/counter/double", (req, res) => {
  value = value * 2;
  res.status(201);
  res.json({ counter: value });
});
//reset counter to 0
app.delete("/counter", (req, res) => {
  value = 0;
  res.json({ counter: value });
});
//set counter to specic value
app.put("/counter", (req, res) => {
  value = parseInt(req.query.value);
  res.status(201);
  res.json({ counter: value });
});
module.exports = app;
