// import express from "express"
// import morgan from "morgan"
// import cors from "cors"

const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

let counter = 0

//Retrieve current counter

app.get("/counter", (req, res) => {
	res.status(200).json({ counter: Number(counter) })
})


// Reset counter to 0

app.delete("/counter", (req, res) => {
	counter = 0
	res.status(200).json({ counter: Number(counter) })
})


// Increase counter by 1

app.post("/counter/increment", (req, res) => {
	counter += 1
	res.status(201).json({ counter: Number(counter) })
})


// Decrease counter by 1

app.post("/counter/decrement", (req, res) => {
	counter -= 1
	res.status(201).json({ counter: Number(counter) })
})


// Double the counter

app.post("/counter/double", (req, res) => {
	counter *= 2
	res.status(201).json({ counter: Number(counter) })
})




// export default app
module.exports = app
