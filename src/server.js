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
// Initialize counter variable
let count = 0;

// Express route handling for root path
app.get("/", (req, res) => {
  // Respond with a welcome message
  res.status(201).json({ message: "Welcome to the counter app" });
});

// Express route handling for retrieving the counter value
app.get("/counter", (req, res) => {
  // Respond with the current counter value
  res.json({ counter: count });
});

module.exports = app;
