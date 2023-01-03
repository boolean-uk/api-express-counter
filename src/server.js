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

let counters = [
  { counterName: "counterOne", counterAmount: 10 },
  { counterName: "counterTwo", counterAmount: 0 },
];

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

module.exports = app;
