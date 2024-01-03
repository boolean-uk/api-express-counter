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

class Counter {
  constructor(name) {
    this.name = name
    this.value = 0
  }
}

const counterArr = []

const getCounter = (name) => {
  if (name) {
    return counterArr.find((counter) => counter.name === name)
  } else {
    return counterArr.find((counter) => counter.name === 'default')
  }
}

const checkCounterValue = (name) => getCounter(name).value
  
const counterExists = (name) => !!getCounter(name)

const addCounter = (name) => {
  if (!counterExists(name)) {
    counterArr.push(new Counter(name))
  }
}

const changeCount = (name, amount) => {
  const foundCounter = getCounter(name)
  foundCounter.value += amount
}

const setCount = (name, amount) => {
  const foundCounter = getCounter(name)
  foundCounter.value = amount
}

addCounter('default')

app.get('/counter', (req, res) => {
  const counter = checkCounterValue()
  res.json({ counter })
})

app.get('/counter/:name', (req, res) => {
  const { name } = req.params
  if ( counterExists(name) === false ) {
    addCounter( name )
  }
  const counter = checkCounterValue(name)
  res.json({ counter, name })
})

app.post('/counter/increment', (req, res) => {
  changeCount('', 1)
  const counter = checkCounterValue()
  res.status(201).json({ counter })
})

app.post('/counter/:name/increment', (req, res) => {
  const { name } = req.params
  if ( counterExists(name) === false ) {
    addCounter( name )
  }
  changeCount(name, 1)
  const counter = checkCounterValue(name)
  res.status(201).json({ counter })
})

app.post('/counter/decrement', (req, res) => {
  changeCount('', -1)
  const counter = checkCounterValue()
  res.status(201).json({ counter })
})

app.post('/counter/:name/decrement', (req, res) => {
  const { name } = req.params
  if ( counterExists(name) === false ) {
    addCounter( name )
  }
  changeCount(name, -1)
  const counter = checkCounterValue(name)
  res.status(201).json({ counter })
})

app.post('/counter/double', (req, res) => {
  setCount('', checkCounterValue() * 2)
  const counter = checkCounterValue()
  res.status(201).json({ counter })
})

app.post('/counter/:name/double', (req, res) => {
  // still fails because query setting value is not implemented yet
  const { name } = req.params
  if ( counterExists(name) === false ) {
    addCounter( name )
  }
  setCount(name, checkCounterValue(name) * 2)
  const counter = checkCounterValue(name)
  res.status(201).json({ counter })
})

app.delete('/counter', (req, res) => {
  setCount('', 0)
  const counter = checkCounterValue()
  res.json({ counter })
})

app.delete('/counter/:name', (req, res) => {
  const { name } = req.params
  if ( counterExists(name) === false ) {
    addCounter( name )
  }
  setCount(name, 0)
  const counter = checkCounterValue(name)
  res.json({ counter })
})


module.exports = app