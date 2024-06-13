//Include the express library
const express = require('express')
//Include the morgan middleware
const morgan = require('morgan')
//Include the cors middleware
const cors = require('cors')

//Create a new express application
const app = express()

//Tell express we want to use the morgan library
app.use(morgan('dev'))
//Tell express we want to use the cors library
app.use(cors())
//Tell express to parse JSON in the request body
app.use(express.json())
const counter = {
    counter: 0,
}

const counters = new Map()

counters.set("cars", {counter:0})

app.get('/counter', (request, response) => {
    response.send(counter)
})

app.post('/counter/increment', (request, response) => {
    counter.counter++

    response.sendStatus(201)
    response.send(counter)
})

app.post('/counter/decrement', (request, response) => {
    counter.counter--

    response.sendStatus(201)
    response.send(counter)
})

app.post('/counter/double', (request, response) => {
    counter.counter = counter.counter * 2

    response.sendStatus(201)
    response.send(counter)
})

app.delete('/counter', (request, response) => {
    counter.counter = 0

    response.send(counter)
})

app.put('/counter', (request, response) => {
    const newValue = request.query.value
    
    if (newValue) {
        counter.counter = newValue
    }

    response.sendStatus(201)
    response.send(counter)
})

app.get('/counter/:name', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    response.send(requestedCounter)
})

app.post('/counter/:name/increment', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    requestedCounter.counter++

    response.sendStatus(201)
    response.send(requestedCounter)
})

app.post('/counter/:name/decrement', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    requestedCounter.counter--

    response.sendStatus(201)
    response.send(requestedCounter)
})

app.post('/counter/:name/double', (request, response) => {
    const requestedCounter = counters.get(request.params.name)

    requestedCounter.counter = requestedCounter * 2

    response.sendStatus(201)
    response.send(requestedCounter)
})

app.delete('/counter/:name', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    requestedCounter.counter = 0

    response.send(requestedCounter)
})

app.put('/counter/:name', (request, response) => {
    const newValue = request.query.value
    
    if (newValue) {
        counters.get(request.params.name).counter = newValue
    }

    response.sendStatus(201)
    response.send(counters.get(request.params.name))
})

module.exports = app
