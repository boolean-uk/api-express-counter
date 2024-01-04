const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

let counter = 0

app.get('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.post('/counter/increase', (req, res) => {
    counter++
    return res.status(201).json(counter)
})

app.post('/counter/decrease', (req, res) => {
    counter--
    return res.status(201).json(counter)
})

module.exports = app