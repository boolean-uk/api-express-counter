const express = require("express")
const morgan = require("morgan")
const cors = require("cors")



const app = express()

app.get('/', (req,res) => {
    res.status(200).json({ message : "Finally some API"})
})
app.use(morgan("dev"))

app.use(cors())

app.use(express.json())

module.exports = app

