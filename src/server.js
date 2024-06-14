const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;
let cars = 0;

app.get("/counter", (req, res) => {
  res.status(200).json({ counter: Number(counter) });
});

app.post("/counter/increment", (req, res) => {
  counter++;
  res.status(201).json({ counter: Number(counter) });
});

app.post("/counter/decrement", (req, res) => {
  counter--;
  res.status(201).json({ counter: Number(counter) });
});

app.post("/counter/double", (req, res) => {
  counter *= 2;
  res.status(201).json({ counter: Number(counter) });
});

app.delete("/counter", (req, res) => {
  counter = 0;
  res.status(200).json({ counter: Number(counter) });
});

app.put("/counter", (req, res) => {

  counter = req.query.value;
  res.status(201).json({ counter: Number(counter) });
});

// NAMED COUNTER FUNCTIONS

app.get("/counter/:name", (req, res) => {
  if ((req.params.name = "cars")) {
    res.status(200).json({ counter: Number(cars) });
  } else {
    res.status(404);
  }
});

app.delete("/counter/:name", (req, res) => {
  if ((req.params.name = "cars")) {
    cars = 0;
    res.status(200).json({ counter: Number(cars) });
  } else {
    res.status(404);
  }
});

app.post("/counter/:name/increment", (req, res) => {
  if ((req.params.name = "cars")) {
    cars++;
    res.status(201).json({ counter: Number(cars) });
  } else {
    res.status(404);
  }
});

app.post("/counter/:name/decrement", (req, res) => {
  if ((req.params.name = "cars")) {
    cars--;
    res.status(201).json({ counter: Number(cars) });
  } else {
    res.status(404);
  }
});

app.put("/counter/:name", (req, res) => {
    if ((req.params.name = "cars")) {
      cars = Number(req.query.value);
      res.status(201).json({ counter: cars });
    } else {
      res.status(404);
    }
  });


app.post("/counter/:name/double", (req, res) => {
  if ((req.params.name = "cars")) {
    cars *= 2;
    res.status(201).json({ counter: Number(cars) });
  } else {
    res.status(404);
  }
});



module.exports = app;
