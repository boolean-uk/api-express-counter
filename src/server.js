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

let COUNTER = 0

app.get("/counter", (req, res) => {
  res.json({counter: COUNTER})
})

app.delete("/counter", (req, res) => {
  COUNTER = 0
  res.json({counter: COUNTER})
})

app.post("/counter/increment", (req, res) => {
  res.status(201).json({counter: ++COUNTER})
})

module.exports = app
