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

const mainCounter = {
  value: 0
}

const counterArray = [
  {
    name: "Counter_1",
    counter: {
      value: 0
    } 
  },
  {
    name: "Counter_2",
    counter: {
      value: 0
    } 
  },
  {
    name: "Counter_3",
    counter: {
      value: 0
    } 
  }
]

const incrementCounter = (name) => {
  if(name) {
    const counter = findCounterByName(name)
    counter.value += 1
    return counter
  }
   return mainCounter.value += 1
}

const decrementCounter = (name) => {
  if(name) {
    const counter = findCounterByName(name)
    counter.value -= 1
    return counter
  }
  return mainCounter.value -= 1
}

const doubleCounter = (name) => {
  if(name) {
    const counter = findCounterByName(name)
    counter.value *= 2
    return counter
  }
  return mainCounter.value *= 2
}

const resetCounter = (name) => {
  if(name) {
    const counter = findCounterByName(name)
    counter.value = 0
    return counter
  }
  return mainCounter.value = 0
}

const setCounterTo = (newValue, name) => {
  if(name) {
    const counter = findCounterByName(name)
    counter.value = Number(newValue)
    return counter
  }
  return mainCounter.value = Number(newValue)
}

const findCounterByName = (name) => {
  const currentCounter = counterArray.find(item => item.name === name)
  return currentCounter.counter
}

app.get('/counter', (req, res) => {
  res.send(mainCounter)
})

app.get('/counter/:name', (req, res) => {
  const name = req.params.name
  const counter = findCounterByName(name)
  res.send(counter)
})

app.post('/counter/increment', (req, res) => {
  incrementCounter()
  res.send(mainCounter)
})

app.post('/counter/:name/increment', (req, res) => {
  const name = req.params.name
  const counter = incrementCounter(name)
  res.send(counter)
})

app.post('/counter/decrement', (req, res) => {
  decrementCounter()
  res.send(mainCounter)
})

app.post('/counter/:name/decrement', (req, res) => {
  const name = req.params.name
  const counter = decrementCounter(name)
  res.send(counter)
})

app.post('/counter/double', (req, res) => {
  doubleCounter()
  res.send(mainCounter)
})

app.post('/counter/:name/double', (req, res) => {
  const name = req.params.name
  const counter = doubleCounter(name)
  res.send(counter)
})

app.put('/counter', (req, res) => {
  const { value } = req.query
  setCounterTo(value)
  res.send(mainCounter)
})

app.put('/counter/:name', (req, res) => {
  const name = req.params.name
  const { value } = req.query
  const counter = setCounterTo(value, name)
  res.send(counter)
})

app.delete('/counter', (req, res) => {
  resetCounter()
  res.send(mainCounter)
})

app.delete('/counter/:name', (req, res) => {
  const name = req.params.name
  const counter = resetCounter(name)
  res.send(counter)
})


module.exports = app