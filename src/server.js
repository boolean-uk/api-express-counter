const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const state = require("./counter.js");
const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("Welcome to a counter app");
});

app.get("/counter", (req, res) => {
    return res.status(200).json(state);
});

app.delete("/counter", (req, res) => {
    state.counter = 0;
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

app.post("/counter/double", (req, res) => {
    state.counter = state.counter * 2;
    return res.status(201).json(state);
});

app.put("/counter", (req, res) => {
    const changeNum = Number(req.query.value)

    state.counter = changeNum
    return res.status(201).json(state)
})

module.exports = app;
