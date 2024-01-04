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
  if (typeof num !== "number") {
    throw new Error("input should be a number");
  }

  if (isNaN(num)) {
    throw new Error("input should not be Not a Number");
  }

  let count = 0;
  let result = 0;

  while (count < num) {
    result += 2;
    count++;
  }

  return result;
}

/**
 * A function that returns the value of the named counter.
 *
 * @param { import('express').Request } req - Express request object
 * @returns { string } Named state set to 0 if named counter does not yet exist.
 */
function evalCounter(req) {
  const { name } = req.params;

  if (STATE[name] === undefined) {
    STATE[name] = 0;
  }

  return name;
}

let COUNTER = 0;

const STATE = {};

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

app.put("/counter", (req, res) => {
  COUNTER = Number(req.query.value);
  res.status(201).json({ counter: COUNTER });
});

app.get("/counter/:name", (req, res) => {
  const name = evalCounter(req);

  res.json({ counter: STATE[name] });
});

app.delete("/counter/:name", (req, res) => {
  const name = evalCounter(req);

  STATE[name] = 0;

  res.json({ counter: STATE[name] });
});

app.post("/counter/:name/increment", (req, res) => {
  const name = evalCounter(req);

  STATE[name] = STATE[name] + 1;

  res.status(201).json({ counter: STATE[name] });
});

app.post("/counter/:name/decrement", (req, res) => {
  const name = evalCounter(req);

  STATE[name] = STATE[name] - 1;

  res.status(201).json({ counter: STATE[name] });
});

app.put("/counter/:name", (req, res) => {
  const name = evalCounter(req);

  STATE[name] = Number(req.query.value);

  res.status(201).json({ counter: STATE[name] });
});

app.post("/counter/:name/double", (req, res) => {
  const name = evalCounter(req);

  STATE[name] = multiplyByTwoWithWhileLoop(STATE[name]);

  res.status(201).json({ counter: STATE[name] });
});

module.exports = app;
