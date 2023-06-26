//Include the express library
const express = require("express")
//Include the morgan middleware
const morgan = require("morgan")
//Include the cors middleware
const cors = require("cors")

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan("dev"))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())

const counter = {
  "counter": 0
}

// Increment Counter
const incrementCounter = () => {
  return counter.counter += 1
}

// Decrement Counter
const decrementCounter = () => {
  return counter.counter -= 1
}

// Double Counter
const doubleCounter = () => {
  return counter.counter *= 2
}

// Reset Counter to 0
const resetCounter = () => {
  return counter.counter = 0
}

// Get current counter value
app.get("/counter", (req, res) => {
  return res.send(counter)
})

// Increment Counter
app.post("/counter/increment", (req, res) => {
  incrementCounter()
  return res.send(counter)
})

//Decrement Counter
app.post("/counter/decrement", (req, res) => {
  decrementCounter()
  return res.send(counter)
})

// Double the Counter
app.post("/counter/double", (req, res) => {
  doubleCounter()
  return res.send(counter)
})

// Reset Counter to 0
app.delete("/counter", (req, res) => {
  resetCounter()
  return res.send(counter)
})

// Set counter to specific value
const setCounterValue = (value) => {
  return (counter.counter = value);
};

// Extension 1
// Set counter to specific value
app.put("/counter", (req, res) => {
  const { value } = req.query;
  setCounterValue(Number(value));
  return res.send(counter);
});

// Extension 2
const counters = [
  {name: "counter1", value: 5},
  {name: "cars", value: 0}
]

// Get counter by name
app.get("/counter/:name", (req, res) => {
  const name = req.params.name
  const targetCounter = counters.find((item) => item.name === name)
  return res.send({ counter: targetCounter.value })
});

// Increment named counter
app.post("/counter/:name/increment", (req, res) => {
  const name = req.params.name
  const targetCounter = counters.find((item) => item.name === name)
  targetCounter.value += 1
  return res.send({ counter: targetCounter.value })
})

// Decrement named counter
app.post("/counter/:name/decrement", (req, res) => {
  const name = req.params.name
  const targetCounter = counters.find((item) => item.name === name)
  targetCounter.value -= 1
  return res.send({ counter: targetCounter.value })
})

// Double named counter
app.post("/counter/:name/double", (req, res) => {
  const name = req.params.name
  const targetCounter = counters.find((item) => item.name === name)
  targetCounter.value *= 2
  return res.send({ counter: targetCounter.value })
})

// Reset named counter
app.delete("/counter/:name", (req, res) => {
  const name = req.params.name
  const targetCounter = counters.find((item) => item.name === name)
  targetCounter.value = 0
  return res.send({counter: targetCounter.value})
})

// Set named counter to specific value
app.put("/counter/:name", (req, res) => {
  const name = req.params.name
  const { value } = req.query;
  const targetCounter = counters.find((item) => item.name === name)
  targetCounter.value = Number(value)
  return res.send({counter: targetCounter.value})
});

module.exports = app