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

let counter = 0

// READ / GET
app.get('/counter', (req, res) => {
    return res.send({ counter })
  });

// CREATE / POST
app.post('/counter/increment', (req, res) => {
    counter += 1
    res.status(201).send({ counter })
})

// CREATE / POST
app.post('/counter/decrement', (req, res) => {
    counter -= 1
    res.status(201).send({ counter })
})

// CREATE / POST
app.post('/counter/double', (req, res) => {
    counter = counter * 2
    res.status(201).send({ counter })
})

// DELETE
app.delete('/counter', (req, res) => {
    counter = 0
    res.send({ counter })
})

app.put('/counter', (req, res) => {
    const value = req.query

    counter = value

    res.status(201).send({ counter })
})
module.exports = app
