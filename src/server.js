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

const dataStore = 
    {
        counter: 0
    }

// GET
app.get('/counter', (req, res) => {
    return res.send(dataStore)
})


// DELETE
app.delete('/counter', (req, res) => {
    return res.send({counter: 0})
})


// POST / INCREMENT
app.post('/counter/increment', (req, res) => {
    const value = dataStore.counter += 1
    
    return res.status(201).send({counter: value})
})

// POST / DECREMENT
app.post('/counter/decrement', (req, res) => {
    const value = dataStore.counter -= 1
    return res.status(201).send({counter: value})
})

// POST / DOUBLE
app.post('/counter/double', (req, res) => {
    const value = dataStore.counter *= 2
    return res.status(201).send({counter: value})
})




module.exports = app