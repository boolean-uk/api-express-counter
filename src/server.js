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

const state = {
    counter: 0
  }
  
  // Global functions
  const checkCounterName = (counterName) => {
    if (!state[counterName]) {
      return (state[counterName] = 0)
    }
  
    return state[counterName]
  }
  
  app.get('/counter', (req, res, next) => {
    res.status(200).json({ counter: state.counter })
  })
  
  app.delete('/counter', (req, res, next) => {
    state.counter = 0
  
    res.status(200).json({ counter: state.counter })
  })
  
  app.post('/counter/increment', (req, res, next) => {
    res.status(201).json({ counter: ++state.counter })
  })
  
  app.post('/counter/decrement', (req, res, next) => {
    res.status(201).json({ counter: --state.counter })
  })
  
  
  app.post('/counter/double', (req, res, next) => {
    res.status(201).json({ counter: (state.counter *= 2) })
  })
  
  app.put('/counter', (req, res, next) => {
    res.status(201).json({ counter: (state.counter = Number(req.query.value)) })
  })
  
  app.get('/counter/:name', (req, res, next) => {
    const counter = checkCounterName(req.params.name)
  
    res.status(200).json({ counter })
  })
  
  app.delete('/counter/:name', (req, res, next) => {
    const counterName = req.params.name
  
    checkCounterName(counterName)
  
    state[counterName] = 0
  
    res.status(200).json({ counter: state[counterName] })
  })
  
  app.post('/counter/:name/increment', (req, res, next) => {
    const counterName = req.params.name
  
    checkCounterName(counterName)
  
    res.status(201).json({ counter: ++state[counterName] })
  })
  
  app.post('/counter/:name/decrement', (req, res, next) => {
    const counterName = req.params.name
  
    checkCounterName(counterName)
  
    res.status(201).json({ counter: --state[counterName] })
  })
  
  app.post('/counter/:name/double', (req, res, next) => {
    const counterName = req.params.name
  
    checkCounterName(counterName)
  
    res.status(201).json({ counter: (state[counterName] *= 2) })
  })
  app.put('/counter/:name', (req, res, next) => {
    const counterName = req.params.name
  
    checkCounterName(counterName)
  
    res
      .status(201)
      .json({ counter: (state[counterName] = Number(req.query.value)) })
  })


module.exports = app