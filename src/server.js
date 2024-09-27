//Include the express library
const express = require("express");
//Include the morgan middleware
const morgan = require("morgan");
//Include the cors middleware
const cors = require("cors");

//Create a new express application
const app = express();

//Tell express we want to use the morgan library
app.use(morgan("dev"));
//Tell express we want to use the cors library
app.use(cors());
//Tell express to parse JSON in the request body
app.use(express.json());

let counter = 0;

app.get('/', (req, res) => {
    res.status(201).json({ message: 'Hello World!!' })
  })

app.get('/counter', (req, res) => {
    res.json({ counter: counter })
});

// POST route to increment the counter
app.post('/counter/increment', (req, res) => {
    counter += 1; // increment the counter
    res.status(201).json({ counter: counter });
});

// POST route to decrement the counter
app.post('/counter/decrement', (req, res) => {
    counter -= 1; // decrement the counter
    res.status(201).json({ counter: counter });
});

// POST route to double the counter
app.post('/counter/double', (req, res) => {
    counter = counter * 2;
    res.status(201).json({ counter: counter });
});

app.delete('/counter', (req, res) => {
    counter = 0;
    res.status(200).json({ counter: counter });
});

module.exports = app;
