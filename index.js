//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");
//Include the utils function(s)
const findCounterByName = require("./utils/utils.js");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

//Start up our server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

//Initialise counter
let counter = 0;

//GET

app.get("/counter", (req, res) => {
  res.json({ counter: counter });
});

// DELETE

app.delete("/counter", (req, res) => {
  counter = 0;
  res.status(201).json({ counter: counter });
});

//POST

app.post("/counter/increment", (req, res) => {
  // increment
  counter++;
  res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
  // decrement
  counter--;
  res.status(201).json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
  // double
  counter *= 2;
  res.status(201).json({ counter: counter });
});

//EXTENSION 1

app.put("/counter", (req, res) => {
  counter = Number(req.query.value);
  res.status(201).json({ counter: counter });
});

//EXTENSION 2

const namedCounters = [];

app.get("/counter/:name", (req, res) => {
  // Get named counter or create a new one
  const { name } = req.params;
  const foundCounter = namedCounters.find((n) => n.name === name);
  if (!foundCounter) {
    namedCounters.push({ name: name, counter: 0 });
    console.log("created new counter with name: " + name);
    return res.status(201).json({ name: name, counter: 0 });
  }
  res.json({ ...foundCounter });
});

app.delete("/counter/:name", (req, res) => {
  // Delete named counter
  const { name, index, foundCounter } = findCounterByName(req, res, namedCounters);
  namedCounters.splice(index, 1);
  res.json({...foundCounter});
});

app.post("/counter/:name/increment", (req, res) => {
  // Increment named counter
  const { foundCounter } = findCounterByName(
    req,
    res,
    namedCounters
  );
  foundCounter.counter++;
  res.status(201).json({ ...foundCounter });
});

app.post("/counter/:name/decrement", (req, res) => {
  // Decrement named counter
  const { foundCounter } = findCounterByName(
    req,
    res,
    namedCounters
  );
  foundCounter.counter--;
  res.status(201).json({ ...foundCounter });
});

app.post("/counter/:name/double", (req, res) => {
  // Double named counter
  const { foundCounter } = findCounterByName(
    req,
    res,
    namedCounters
  );
  foundCounter.counter *= 2;
  res.status(201).json({ ...foundCounter });
});
