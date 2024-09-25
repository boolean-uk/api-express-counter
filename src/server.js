const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const state = {
    counter: 0
}

const stateExtension = [
    {
        name: "cars",
        counter: 0
    },
    {
        name:"usamna", counter: 0
    },
    {
        name:'john', counter: 0
    },
]

app.get('/counter', (req, res) => {
    console.log('you all good the api si working ')
    return res.status(200).json(state)
})

app.delete('/counter', (req, res) => {
    state.counter = 0
    console.log('ur about to delete something')
    res.status(200).json(state)
})

app.post('/counter/increment', (req, res) => {
    state.counter++
    return res.status(201).json(state)
})


app.post('/counter/decrement', (req, res) => {
    const param = req.params
    // if(state.counter <= 0){
    //     return res.json({"message": "the number is below 0nso it cant be decremented"})
    // }
    state.counter--
    return res.status(201).json(state)
})


app.post('/counter/double', (req, res) => {
    state.counter = state.counter * 2
    res.status(201).json(state)
})


app.put('/counter', (req, res) => {
    const {value} = req.query
    state.counter = Number(value)
    res.status(201).json(state)
})

app.put('/counter/:counterName', (req, res) => {
    const {value} = req.query
    const counterName = req.params
    const foundValue = stateExtension.find((item) => item.name === counterName.counterName)

    if(!foundValue) {
        return res.status(404).json({"message": "the name doesn't exist in our system"})
    }


    foundValue.counter = Number(value)
    res.status(201).json(foundValue)
})


app.get('/counter/:counterName', (req, res) => {
   const counterName = req.params
   const foundValue = stateExtension.find((item) => item.name === counterName.counterName)

   if(!foundValue) {
       return res.status(404).json({"message": "the name doesn't exist in our system"})
   }

   res.status(200).json(foundValue)
})

app.delete('/counter/:counterName', (req, res) => {
    const counterName = req.params
    const foundName = stateExtension.find((item) => item.name === counterName.counterName)

    if(!foundName) {
        return res.status(404).json({"message": "the name does'nt ring a bell to us"})
    }

    foundName.counter = 0
    return res.status(200).json(foundName)
})


app.post('/counter/:counterName/increment', (req, res) => {
    const counterName = req.params
    const foundName = stateExtension.find((item) => item.name === counterName.counterName)

    if(!foundName) {
        return res.status(404).json({"message": "the name does'nt ring a bell to us"})
    }

    foundName.counter++
    return res.status(201).json(foundName)
})

app.post('/counter/:counterName/decrement', (req, res) => {
    const counterName = req.params
    const foundName = stateExtension.find((item) => item.name === counterName.counterName)

    if(!foundName) {
        return res.status(404).json({"message": "the name does'nt ring a bell to us"})
    }

    foundName.counter--
    return res.status(201).json(foundName)
})


app.post('/counter/:counterName/double', (req, res) => {
    const counterName = req.params
    const foundName = stateExtension.find((item) => item.name === counterName.counterName)

    if(!foundName) {
        return res.status(404).json({"message": "the name does'nt ring a bell to us"})
    }

    foundName.counter = foundName.counter * 2
    return res.status(201).json(foundName)
})
module.exports = app
