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

let counter = 0; // For the core criteria
// For the extensions
let counters = [
  { counterName: "counterOne", counterAmount: 10 },
  { counterName: "counterTwo", counterAmount: 0 },
];

app.get("/counter", (req, res) => {
  console.log("got request!");
  res.status(200).json({
    counter: counter,
  });
});

app.delete("/counter", (req, res) => {
  console.log("got request!");
  counter = 0;
  res.status(200).json({
    counter: counter,
  });
});

app.post("/counter/increment", (req, res) => {
  console.log("got request!");
  counter += 1;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/decrement", (req, res) => {
  console.log("got request!");
  counter -= 1;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/double", (req, res) => {
  console.log("got request!");
  counter = counter * 2;
  res.status(201).json({
    counter: counter,
  });
});

app.put("/counter", (req, res) => {
  let amount = req.query.amount;
  counter = amount;
  res.json({
    counter: counter,
  });
});

// Extension
app.get("/counter/:name", (req, res) => {
  let name = req.params.name;

  const counter = counters.filter((counter) => {
    if (counter.counterName === name) {
      return counter;
    }
  })[0];

  if (counter === undefined) {
    counters.push({ counterName: name, counterAmount: 0 });
    res.json({
      counter: 0,
    });
    return;
  }

  res.json({
    counter: counter.counterAmount,
  });
});
app.delete("/counter/:name", (req, res) => {
  let name = req.params.name;

  const counter = counters.filter((counter) => {
    if (counter.counterName === name) {
      counter.counterAmount = 0;
      return counter;
    }
  })[0];

  if (counter === undefined) {
    counters.push({ counterName: name, counterAmount: 0 });
    res.json({
      counter: 0,
    });
    return;
  }

  res.json({
    counter: counter.counterAmount,
  });
});

app.post("/counter/:name/increment", (req, res) => {
  let name = req.params.name;

  const counter = counters.filter((counter) => {
    if (counter.counterName === name) {
      counter.counterAmount += 1;
      return counter;
    }
  })[0];

  if (counter === undefined) {
    counters.push({ counterName: name, counterAmount: 0 });
    res.json({
      counter: 0,
    });
    return;
  }

  res.json({
    counter: counter.counterAmount,
  });
});

app.post("/counter/:name/decrement", (req, res) => {
  let name = req.params.name;

  const counter = counters.filter((counter) => {
    if (counter.counterName === name) {
      counter.counterAmount -= 1;
      return counter;
    }
  })[0];

  if (counter === undefined) {
    counters.push({ counterName: name, counterAmount: 0 });
    res.json({
      counter: 0,
    });
    return;
  }

  res.json({
    counter: counter.counterAmount,
  });
});

app.post("/counter/:name/double", (req, res) => {
  let name = req.params.name;

  const counter = counters.filter((counter) => {
    if (counter.counterName === name) {
      counter.counterAmount = counter.counterAmount * 2;
      return counter;
    }
  })[0];

  if (counter === undefined) {
    counters.push({ counterName: name, counterAmount: 0 });
    res.json({
      counter: 0,
    });
    return;
  }

  res.json({
    counter: counter.counterAmount,
  });
});

module.exports = app;
