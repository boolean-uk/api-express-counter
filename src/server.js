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
    counter: 0
}

// Read/GET
app.get('/counter', (req, res) => {
    return res.send(counter)
})

// Reset to zero
app.delete('/counter', (req, res) => {
    counter.counter = 0
    return res.send(counter)
})

// Increment
app.post('/counter/increment', (req, res) => {
    counter.counter += 1
    return res.send(counter)
})

// Decrement
app.post('/counter/decrement', (req, res) => {
    counter.counter -= 1
    return res.send(counter)
})

// Double
app.post('/counter/double', (req, res) => {
    counter.counter = 2 * counter.counter
    return res.send(counter)
})
module.exports = app