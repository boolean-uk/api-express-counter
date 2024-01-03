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

app.get("/counter", (req,res) => {
    res.status(200).json(state)
})

module.exports = app