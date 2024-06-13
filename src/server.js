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


    response.status(201).send(counter)
})

app.post('/counter/decrement', (request, response) => {
    counter.counter--

    
    response.status(201).send(counter)
})

app.post('/counter/double', (request, response) => {
    counter.counter = counter.counter * 2

    response.status(201).send(counter)
})

app.delete('/counter', (request, response) => {
    counter.counter = 0

    response.send(counter)
})

app.put('/counter', (request, response) => {
    const newValue = parseInt(request.query.value, 10)

    if (isNaN(newValue)) {
        return response.sendStatus(400)
    }

    counter.counter = newValue
    response.status(201).send(counter)
})

app.get('/counter/:name', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    response.send(requestedCounter)
})

app.post('/counter/:name/increment', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    requestedCounter.counter++
    response.status(201).send(requestedCounter)
})

app.post('/counter/:name/decrement', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    requestedCounter.counter--
    response.status(201).send(requestedCounter)
})

app.post('/counter/:name/double', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    requestedCounter.counter = requestedCounter.counter * 2
    response.status(201).send(requestedCounter)
})

app.delete('/counter/:name', (request, response) => {
    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    requestedCounter.counter = 0
    response.send(requestedCounter)
})

app.put('/counter/:name', (request, response) => {
    const newValue = parseInt(request.query.value, 10)

    if (isNaN(newValue)) {
        return response.sendStatus(400)
    }

    const requestedCounter = counters.get(request.params.name)
    
    if (!requestedCounter) {
        return response.sendStatus(404)
    }

    requestedCounter.counter = newValue
    response.status(201).send(requestedCounter)
})

module.exports = app
