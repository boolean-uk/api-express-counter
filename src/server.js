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
const counter= {
    counter: 0
 };

 app.get("/counter", (request, response) => {
    response.send(counter)
 })

 app.post("/counter/increment", (request, response) => {
    counter.counter++
    
    response.status(201)
    response.send(counter)
 })

 app.post("/counter/decrement", (request, response) => {
    counter.counter--
    
    response.status(201)
    response.send(counter)
 })
 
 app.post("/counter/double", (request, response) => {
    counter.counter = counter.counter * 2
    
    response.status(201)
    response.send(counter)
 })

 app.delete("/counter", (request, response) => {
    counter.counter = 0
    
    response.send(counter)
 })





module.exports = app