const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


const app = express()

let count = 0

// CORE

app.use(morgan("dev"), cors(), express.json())

app.get('/counter', (req, res) => {
    return res.json({"counter": count})
})

app.delete('/counter', (req, res) => { 
    count = 0
    return res.json({"counter": count})
})

app.post('/counter/increment', (req, res) => {
    count++
    return res.status(201).json({"counter": count})
})

app.post('/counter/decrement', (req, res) => {
    count--
    return res.status(201).json({"counter": count})
})

app.post('/counter/double', (req, res) =>{
    count *= 2
    return res.status(201).json({"counter": count})
})

// EXTENSION 1

app.put('/counter',  (req, res) => {
    const newCount = parseInt(req.query.value)
    if (!newCount) return res.status(200).json({"counter": count})
    
    count = newCount
    return res.status(201).json({"counter": count})
})

// EXTENSION 2

let counters = [{name: 'cars', count: 0}, {name: 'students', count: 0}, {name: 'cats', count: 0}]

app.get('/counter/:name', (req, res) => {
    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    return res.json({"counter": foundCounter.count})
})

app.delete('/counter/:name', (req, res) => { 
    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    foundCounter.count = 0
    return res.json({"counter": foundCounter.count})
})

app.post('/counter/:name/increment', (req, res) => {
    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    foundCounter.count++
    return res.status(201).json({"counter": foundCounter.count})
})

app.post('/counter/:name/decrement', (req, res) => {
    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    foundCounter.count--
    return res.status(201).json({"counter": foundCounter.count})
})

app.put('/counter/:name',  (req, res) => {
    const newCount = parseInt(req.query.value)
    if (!newCount) return res.status(200).json({"counter": count})

    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    
    foundCounter.count = newCount
    return res.status(201).json({"counter": foundCounter.count})
})

app.post('/counter/:name/double', (req, res) =>{
    const { name } = req.params
    const foundCounter = counters.find((counter) => counter.name === name)
    console.log(foundCounter)
    foundCounter.count = foundCounter.count * 2
    return res.status(201).json({"counter": foundCounter.count})
})


module.exports = app