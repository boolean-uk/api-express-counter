const express = require('express')
const app = express()


/*
const myCounters = [
    {
        counter: 1
    }
]

app.get('/counter', (request, response) => {
    myCounters[0].counter = 0
    response.json(myCounters)
})

app.post('/counter/increment', (request, response) => {
    myCounters[0].counter += 1
    response.status(201).json(myCounters)
})

app.post('/counter/decrement', (request, response) => {
    myCounters[0].counter -= 1
    response.status(201).json(myCounters)
})

app.post('/counter/double', (request, response) => {
    myCounters[0].counter *= 2
    response.status(201).json(myCounters)

})

app.delete('/counter/reset', (request, response) => {
    myCounters[0].counter = 0
    response.json(myCounters)
})

module.exports = app
*/


let counter = 0

//app.use(express.json())

app.get('/counter', (req, res) => {
    res.status(200).json({ counter })
})

app.post('/counter/increment', (req, res) => {
    counter++
    res.status(201).json({ counter })
})

app.post('/counter/decrement', (req, res) => {
    counter--
    res.status(201).json({ counter })
})

app.post('/counter/double', (req, res) => {
    counter *= 2
    res.status(201).json({ counter })
})

app.delete('/counter/reset', (req, res) => {
    counter = 0
    res.status(200).json({ counter })
})



module.exports = app
