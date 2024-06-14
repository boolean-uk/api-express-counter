const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const qs = require('qs')
app.set('query parser', function (str) {
  return qs.parse(str, { /* custom options */ })
})

const counter = {
    counter: 0
}

app.get('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.delete('/counter', (req, res) => {
    counter.counter = 0
    res.status(200).json(counter)
})

app.post('/counter/increment', (req, res) => {
    counter.counter++
    res.status(201).json(counter)
})

app.post('/counter/decrement', (req, res) => {
    counter.counter--
    res.status(201).json(counter)
})

app.post('/counter/double', (req, res) => {
    counter.counter *= 2
    res.status(201).json(counter)
})

app.put('/counter', (req, res) => {
    const number = Number(req.query.value)
    counter.counter = number
    res.status(201).json(counter)
})

module.exports = app