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

let counters = {
	spaceMarines: 1000,
	orks: 10,
	cars: 0,
};

app.get("/counter", (req, res) => {
	res.json({ counter: counter });
});

app.post("/counter/increment", (req, res) => {
	counter += 1;
	res.status(201).json({ counter: counter });
});

app.post("/counter/double", (req, res) => {
	counter *= 2;
	res.status(201).json({ counter: counter });
});

app.post("/counter/decrement", (req, res) => {
	counter -= 1;
	res.status(201).json({ counter: counter });
});

app.delete("/counter", (req, res) => {
	counter = 0;
	res.json({ counter: counter });
});

// Ext.1

app.put("/counter", (req, res) => {
	counter = req.query.value;
	res.status(201).json({ counter: counter });
});

// Ext.2

app.get("/counter/:name", (req, res) => {
	const counterValue = counters[req.params.name];
	res.json({ counter: counterValue });
});

app.post("/counter/:name/increment", (req, res) => {
	counters[req.params.name] += 1;
	res.status(201).json({ counter: counters[req.params.name] });
});

app.post("/counter/:name/decrement", (req, res) => {
	counters[req.params.name] -= 1;
	res.status(201).json({ counter: counters[req.params.name] });
});

app.post("/counter/:name/double", (req, res) => {
	counters[req.params.name] *= 2;
	res.status(201).json({ counter: counters[req.params.name] });
});

app.delete("/counter/:name", (req, res) => {
	counters[req.params.name] = 0;
	res.json({ counter: counters[req.params.name] });
});

app.put("/counter/:name", (req, res) => {
	counters[req.params.name] = Number(req.query.value);
	res.status(201).json({ counter: counters[req.params.name] });
});

module.exports = app;
