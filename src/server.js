//include the express library
const express = require("express");
//include the morgan middleware
const morgan = require("morgan");
//include the cors middleware
const cors = require("cors");

//create a new express application
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const state = {
  counter: 0,
};

app.get("/counter", (req, res) => {
  return res.status(200).json(state);
});

app.post("/counter/increment", (req, res) => {
  state.counter++;
  return res.status(201).json(state);
});

app.post("/counter/decrement", (req, res) => {
  state.counter--;
  return res.status(201).json(state);
});

app.delete('/counter',(req,res)=>{
    state.counter = 0 
    return res.status(200).json(state)
})

app.post('/counter/double', (req,res)=>{
    state.counter *= 2
    return res.status(201).json(state)
})
module.exports = app;
