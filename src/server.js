const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


const app = express()

let count = 0

app.use(morgan("dev"), cors(), express.json())

app.get('/counter', (req, res) => {
    return res.json({"counter": count})
})

app.delete('/counter', (req, res) => { 
    count = 0
    return res.json({"counter": count})
})

app.post('/counter/increment', (req, res) => {
    count++
    return res.json({"counter": count})
})

app.post('/counter/decrement', (req, res) => {
    count--
    return res.json({"counter": count})
})

module.exports = app