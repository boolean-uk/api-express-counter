//Include the express library
const express = require('express')
//Include the morgan middleware
const morgan = require('morgan')
//Include the cors middleware
const cors = require('cors')

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan('dev'))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())

// Initialization of state
const state = {
  counter: 0
}

// GET counter
app.get('/counter', (req, res, next) => {
  res.status(200).json({ counter: state.counter })
})

// DELETE reset counter to 0
app.delete('/counter', (req, res, next) => {
  state.counter = 0

  res.status(200).json({ counter: state.counter })
})

// POST Increment counter
app.post('/counter/increment', (req, res, next) => {
  res.status(201).json({ counter: ++state.counter })
})

// POST Decrement counter
app.post('/counter/decrement', (req, res, next) => {
  res.status(201).json({ counter: --state.counter })
})

// POST Double counter
app.post('/counter/double', (req, res, next) => {
  res.status(201).json({ counter: (state.counter *= 2) })
})

// PUT set the counter to a special value via a query parameter
app.put('/counter', (req, res, next) => {
  state.counter = 0

  res.status(201).json({ counter: (state.counter += Number(req.query.value)) })
})

module.exports = app
