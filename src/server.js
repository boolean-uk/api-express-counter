const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//define express as app
const app = express()

//Using framworks as server
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


const initailState = {
    "counter": 0
  }

app.get('/counter', (req, res)=>{
res.status(200).json(initailState)
})

app.post('/counter/increment', (req, res)=>{
    initailState.counter ++
    res.status(201).json(initailState)
})


module.exports = app

