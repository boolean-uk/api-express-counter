const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

let counter = 0

app.get('/counter', (req, res) => {
    res.status(200).json({counter: counter})
})

app.post('/counter/increment', (req, res) => {
    counter++
    res.status(201).json({counter: counter})
})

app.post('/counter/decrement', (req, res) => {
    counter--
    res.status(201).json({counter: counter})
})

app.post('/counter/double', (req, res) => {
    counter *= 2
    res.status(201).json({counter: counter})
})

app.delete('/counter', (req, res) => {
    counter = 0
    res.status(200).json({counter: counter})
})



module.exports = app;
