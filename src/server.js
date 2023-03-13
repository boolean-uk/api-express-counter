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


let counter = 0
//1. request query
//2. request parameters

// const counters = {
//    { id: 1, value: 5},
//    { id: 3, value:0 }
// }

app.get('/counter' , (req, res) => {
    //1.
    // console.log("get in the/counter")
    // console.log(req.query.value)
    // console.log(req.query.name)
    //http://localhost:3030/counter?value=100&name=michael
    res.json({counter: counter})
})


app.post('/counter/increment', (req, res) => {
    counter+=1
    //res.json({counter})
   // if you want you can change the status before json :
   res.status(201).json({counter})
})

//2.
// app.post('/counter/:id/increment', (req, res) => {
//     const id = req.params.id // think about data type string or integer?
//     //http://localhost:3030/counter/1/increment

//     //find the right counter
//     counter+=1
//     //res.json({counter})
//    // if you want you can change the status before json :
//    res.status(201).json({counter})
// })

// delete - counter
app.delete('/counter', (req, res) => {
    counter = 0
    res.json({counter})
})

// post - counter decrement
app.post('/counter/decrement', (req, res) => {
    counter-=1
    res.status(201).json({counter})
})

//post - counter double
app.post('/counter/double', (req, res) => {
    counter= counter*2
    res.status(201).json({counter})
})



module.exports = app