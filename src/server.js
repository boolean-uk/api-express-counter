const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const state = {
    "counter": 0
}

// GET
app.get("/counter", (req, res) => {
    return res.status(200).json(state)
})

// POST - INCREMENT
app.post("/counter/increment", (req, res) => {

    state.counter ++

    return res.status(201).json(state)
})

// POST - DECREMENT
app.post("/counter/decrement", (req, res) => {

    state.counter --
    
    return res.status(201).json(state)
})

// DELETE
app.delete("/counter", (req, res) => {

    state.counter = 0
    return res.status(200).json(state)
})

// POST - DOUBLE COUNT
app.post("/counter/double", (req, res) => {

    state.counter *= 2

    return res.status(201).json(state)
})

// EXTENSION 1

app.put("/counter?", (req, res) => {

    const val = Number(req.query.value)
    const currentCount = state.counter

    if (val && typeof val === 'number')
        state.counter = val
    else {
        state.counter = currentCount
    }

    return res.status(201).json(state)
})

module.exports = app