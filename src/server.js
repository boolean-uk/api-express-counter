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

let count = 0;

app.get('/counter', (req, res) => {
  console.log('got request!');
  res.json({ counter: count });
});

app.post('/counter/increment', (req, res) => {
  count += 1;
  res.status(201).json({ counter: count });
});

app.post('/counter/decrement', (req, res) => {
  count -= 1;
  res.status(201).json({ counter: count });
});

app.delete('/counter', (req, res) => {
  count = 0;
  res.json({ counter: count });
});

app.post('/counter/double', (req, res) => {
  count *= 2;
  res.status(201).json({ counter: count });
});

module.exports = app;
