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
    response.send(JSON.stringify(counter))
 })

 app.post("/counter", (request, response) => {
    counter.counter++
    
    response.send(JSON.stringify(counter))
 })
 
 app.delete("/counter", (request, response) => {
    counter.counter = 0
    
    response.send(JSON.stringify(counter))
 })





module.exports = app