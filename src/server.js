
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())


const counter = [
    { counter: 1 }
]
    


app.get('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.delete('/counter', (req, res) => {
    res.status(200).json(counter)
})

app.post('/counter/increment', (req, res) => {
    let count = 0
    let getCount = counter.map((c) => {count = c.counter++})
    
    let newObj = {counter: count}
    counter.push(newObj)
    res.status(201).json(counter)
})

app.post('/counter/decrement', (req, res) => {
    res.status(201).json(counter)
    counter.counter--
})

app.post('/counter/double', (req, res) => {
    res.status(201).json(counter)
    counter.counter *= 2
})

app.put('/counter?value=:number', (req, res) => {
    const number = Number(req.params.number)
    res.status(201).json(counter)
})

module.exports = app