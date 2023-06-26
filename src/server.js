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

const data = [
    {"name": '', counter: 0}
]

app.get('/counter', (req, res) => {
    return res.send(data)
})

app.post('/counter/increment', (req, res) => {
    data.counter += 1

    return res.status(201).send(data)
})
app.post('/counter/decrement', (req, res) => {
    data.counter -= 1

    return res.status(201).send(data)
})
app.post('/counter/double', (req, res) => {
    data.counter *= 2

    return res.status(201).send(data)
})
app.delete('/counter', (req, res) => {
    data.counter = 0

    return res.status(200).send(data)
})
app.put('/counter', (req, res) => {
    const num = req.query.value
    data.counter = Number(num)
    return res.status(201).send(data)
})
module.exports = app