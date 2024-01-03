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

/**
 * A function that multiplies a number by 2 using a while loop.
 * 
 * @param {number} num - The number to be multiplied by 2.
 * @returns {number} The result of the multiplication.
 * @throws {Error} Throws an error if the input is not a valid number.
 */
function multiplyByTwoWithWhileLoop(num) {
  if (typeof num !== 'number') {
    throw new Error('input should be a number');
  }

  if (isNaN(num)) {
    throw new Error('input should not be Not a Number');
  }

  let count = 0;
  let result = 0;

  while (count < num) {
    result += 2;
    count++;
  }

  return result;
}

let COUNTER = 0;

app.get("/counter", (req, res) => {
  res.json({ counter: COUNTER });
});

app.delete("/counter", (req, res) => {
  COUNTER = 0;
  res.json({ counter: COUNTER });
});

app.post("/counter/increment", (req, res) => {
  res.status(201).json({ counter: ++COUNTER });
});

app.post("/counter/decrement", (req, res) => {
  res.status(201).json({ counter: --COUNTER });
});

app.post("/counter/double", (req, res) => {
  COUNTER = multiplyByTwoWithWhileLoop(COUNTER);
  res.status(201).json({ counter: COUNTER });
});

module.exports = app;
