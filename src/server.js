
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


const counter = {
    counter: 0
}

app.get('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.delete('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.post('/counter/increment', (req, res) => {
    res.status(201).json(counter)
    counter.counter++
})

app.post('/counter/decrement', (req, res) => {
    res.status(201).json(counter)
    counter.counter--
})

module.exports = app