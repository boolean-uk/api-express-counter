const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const counter = {
    counter :0
}

const counterData = new Map()
counterData.set('counter', counter)

app.get('/counter', (req, res) => {
    res.status(200).json(counterData.get('counter'))
})

app.delete('/counter', (req, res) => {
    counter.counter = 0
    counterData.set('counter', counter)
    
    res.status(200).json(counterData.get('counter'))
})

app.post('/counter/increment', (req, res) => {
    counter.counter++
    counterData.set('counter', counter)

    res.status(201).json(counterData.get('counter'))
})

app.post('/counter/decrement', (req, res) => {
    counter.counter--
    counterData.set('counter', counter)

    res.status(201).json(counterData.get('counter'))
})

app.post('/counter/double', (req, res) => {
    counter.counter *= 2
    counterData.set('counter', counter)

    res.status(201).json(counterData.get('counter'))
})

app.put('/counter', (req, res) => {
    const number = Number(req.query.value)

    counter.counter = number
    counterData.set('counter', counter)

    res.status(201).json(counterData.get('counter'))
})

app.get('/counter/:name', (req, res) => {
    const name = req.params.name
    const foundCounter = counterData.get(name)

    if(!foundCounter) {
        counterData.set(name, counter)
    }

    res.status(200).json(counterData.get(name))
})

app.delete('/counter/:name', (req, res) => {
    const name = req.params.name

    counter.counter = 0
    counterData.set(name, counter)

    res.status(200).json(counterData.get(name))
})

app.post('/counter/:name/increment', (req, res) => {
    const name = req.params.name

    counter.counter++
    counterData.set(name, counter)

    res.status(201).json(counterData.get(name))
})

app.post('/counter/:name/decrement', (req, res) => {
    const name = req.params.name

    counter.counter--
    counterData.set(name, counter)

    res.status(201).json(counterData.get(name))
})

app.post('/counter/:name/double', (req, res) => {
    const name = req.params.name

    counter.counter *= 2
    counterData.set(name, counter)

    res.status(201).json(counterData.get(name))
})

app.put('/counter/:name', (req, res) => {
    const name = req.params.name
    const number = Number(req.query.value)

    counter.counter = number
    counterData.set(name, counter)

    res.status(201).json(counterData.get(name))
})


module.exports = app