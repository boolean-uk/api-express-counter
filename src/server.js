const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const state = require('./counter.js')
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json('Welcome to a counter app')
})

app.get('/counter', (req, res) => {
    res.json(state)
})

app.delete('/counter', (req, res) => {
    state.counter = 0
    res.json(state)
})

app.post('/counter/increment', (req, res) => {
    state.counter++
    res.json(state)
})



module.exports = app