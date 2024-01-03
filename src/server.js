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

    if (state.counter > 0) {
        state.counter --
    }

    return res.status(201).json(state)
})

module.exports = app