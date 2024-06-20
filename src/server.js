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

app.get('/counter', (request, respond) => {
    respond.status(200).json({ counter })
})

app.post('/counter/increment', (request, respond) => {
    counter++
    respond.status(201).json({ counter })
})

app.post('/counter/decrement', (request, respond) => {
    counter--
    respond.status(201).json({ counter })
})

app.post('/counter/double', (requst, respond) => {
    counter *= 2
    respond.status(201).json({ counter })
})

app.delete('/counter', (request, respond) => {
    counter = 0
    respond.status(200).json({ counter })
})



module.exports = app
