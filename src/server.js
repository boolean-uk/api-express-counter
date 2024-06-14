const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const count = { counter: 0 }
const newCount = {}

app.get('/counter', (req, res) => {
    res.status(200).json(count)
})

app.delete('/counter', (req, res) => {
    count.counter = 0
    res.status(200).json(count)
})

app.post('/counter/increment', (req, res) => {
    count.counter += 1
    res.status(201).json(count)
})

app.post('/counter/decrement', (req, res) => {
    count.counter -= 1
    res.status(201).json(count)
})

app.post('/counter/double', (req, res) => {
    count.counter *= 2
    res.status(201).json(count)
})

app.put('/counter', (req, res) => {
    count.counter = Number(req.query.value)
    res.status(201).json(count)
})

app.get('/counter/:name', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    res.status(200).json(newCount[counterName])
})

app.delete('/counter/:name', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    newCount[counterName].counter = 0
    res.status(200).json(newCount[counterName])
})

app.post('/counter/:name/increment', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    newCount[counterName].counter += 1
    res.status(201).json(newCount[counterName])
})

app.post('/counter/:name/decrement', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    newCount[counterName].counter -= 1
    res.status(201).json(newCount[counterName])
})

app.post('/counter/:name/double', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    newCount[counterName].counter *= 2
    res.status(201).json(newCount[counterName])
})

app.put('/counter/:name', (req, res) => {
    const counterName = req.params.name

    if (!newCount[counterName]) {
        newCount[counterName] = { counter: 0 }
    }

    newCount[counterName].counter += Number(req.query.value)
    res.status(201).json(newCount[counterName])
})

module.exports = app
