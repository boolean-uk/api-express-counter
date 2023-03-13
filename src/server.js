//Include the express library
const express = require('express');
//Include the morgan middleware
const morgan = require('morgan');
//Include the cors middleware
const cors = require('cors');

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan('dev'));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

let counter = 0;

const counters = [
    { id: 'cars', value: 0 },
    { id: 1, value: 0 },
];

app.get('/counter', (req, res) => {
    res.json({ counter: counter });
});

app.post('/counter/increment', (req, res) => {
    counter++;
    res.status(201).json({ counter: counter });
});

app.post('/counter/decrement', (req, res) => {
    counter--;
    res.status(201).json({ counter: counter });
});

app.post('/counter/double', (req, res) => {
    counter = counter * 2;
    res.status(201).json({ counter: counter });
});

app.delete('/counter', (req, res) => {
    counter = 0;
    res.json({ counter: counter });
});

app.put('/counter', (req, res) => {
    counter = Number(req.query.value);
    res.status(201).json({ counter: counter });
});

app.get('/counter/:id', (req, res) => {
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    res.json({ counter: targetCounter.value });
});

app.put('/counter/:id', (req, res) => {
    const counterValue = Number(req.query.value);
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    targetCounter.value = counterValue;
    res.status(201).json({ counter: targetCounter.value });
});

app.post('/counter/:id/increment', (req, res) => {
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    targetCounter.value++;
    res.status(201).json({ counter: targetCounter.value });
});

app.post('/counter/:id/decrement', (req, res) => {
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    targetCounter.value--;
    res.status(201).json({ counter: targetCounter.value });
});

app.post('/counter/:id/double', (req, res) => {
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    targetCounter.value = targetCounter.value * 2;
    res.status(201).json({ counter: targetCounter.value });
});

app.delete('/counter/:id/', (req, res) => {
    const id = req.params.id;
    const targetCounter = counters.find((objs) => objs.id === id);
    targetCounter.value = 0;
    res.json({ counter: targetCounter.value });
});

module.exports = app;
