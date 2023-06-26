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

const data = { counter: 0 };
const dataArr = [
  { name: "norik", counter: 0 },
  { name: "tom", counter: 0 },
  { name: "lee", counter: 0 },
  { name: "cars", counter: 0 },
];

const findName = (name) => {
  return dataArr.find((counter) => counter.name === name);
};

app.get("/counter", (req, res) => {
  return res.send(data);
});

app.post("/counter/increment", (req, res) => {
  data.counter += 1;
  return res.status(201).send(data);
});

app.post("/counter/decrement", (req, res) => {
  data.counter -= 1;
  return res.status(201).send(data);
});

app.post("/counter/double", (req, res) => {
  data.counter *= 2;
  return res.status(201).send(data);
});

app.delete("/counter", (req, res) => {
  data.counter = 0;
  return res.status(200).send(data);
});

app.put("/counter", (req, res) => {
  const num = req.query.value;
  data.counter = Number(num);
  return res.status(201).send({counter: data.counter});
});

app.get("/counter/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const foundName = findName(name);

  return typeof foundName !== "undefined"
    ? res.status(200).send({ counter: foundName.counter })
    : res.status(404).send("Not found");
});

app.delete("/counter/:name", (req, res) => {
  const name = req.params.name.toLowerCase();
  const findIndex = dataArr.findIndex((counter) => counter.name === name);

  return findIndex !== -1
    ? ((dataArr[findIndex].counter = 0),
      res.status(200).send({ counter: dataArr[findIndex].counter }))
    : res.status(404).send("Not found");
});

app.post("/counter/:name/increment", (req, res) => {
  const name = req.params.name.toLowerCase();
  const findIndex = dataArr.findIndex((counter) => counter.name === name);

  return findIndex !== -1
    ? (dataArr[findIndex].counter++,
      res.status(201).send({ counter: dataArr[findIndex].counter }))
    : res.status(404).send("Not found");
});

app.post("/counter/:name/decrement", (req, res) => {
  const name = req.params.name.toLowerCase();
  const findIndex = dataArr.findIndex((counter) => counter.name === name);

  return findIndex !== -1
    ? (dataArr[findIndex].counter--,
      res.status(201).send({ counter: dataArr[findIndex].counter }))
    : res.status(404).send("Not found");
});

app.post("/counter/:name/double", (req, res) => {
  const name = req.params.name.toLowerCase();
  const findIndex = dataArr.findIndex((counter) => counter.name === name);

  return findIndex !== -1
    ? ((dataArr[findIndex].counter *= 2),
      res.status(201).send({ counter: dataArr[findIndex].counter }))
    : res.status(404).send("Not found");
});

app.put("/counter/:name", (req, res) => {
  const num = Number(req.query.value);
  console.log(num)
  const name = req.params.name.toLowerCase();
  const findIndex = dataArr.findIndex((counter) => counter.name === name);

  return findIndex !== -1
    ? ((dataArr[findIndex].counter = num),
      res.status(201).send({ counter: dataArr[findIndex].counter }))
    : res.status(404).send("Not found");
});

module.exports = app;
