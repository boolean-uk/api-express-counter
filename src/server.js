const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0;

app.get("/counter", function (req, res) {
  res.status(200).json({
    counter: counter,
  });
});

app.delete("/counter", function (req, res) {
    counter = 0;
  res.status(200).json({
    counter: counter
  });
});

app.post("/counter/increment", function (req, res) {
  counter++;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/decrement", function (req, res) {
  counter--;
  res.status(201).json({
    counter: counter,
  });
});

app.post("/counter/double", function (req, res) {
  counter *= 2;
  res.status(201).json({
    counter: counter,
  });
});

app.put("/counter/:value", function (req, res) {
  const value = parseInt(req.params.value, 10);
  counter = value;
  res.status(200).json({
    counter: counter,
  });
});

app.get("/counter/:name", function(req, res){
    const name =  req.params.name;
    counter =  name;
    res.status(200).json({
       counter: counter, 
    })
})
module.exports = app;
