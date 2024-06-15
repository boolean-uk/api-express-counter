// import express from "express";
const express = require("express");

const server = express();
server.use(express.json());

server.use("/health", (req, res) => {
	res.json("im alive");
});

let counter = 0;

const createResponse = (res, statusCode = 200) =>
	res.status(statusCode).json({ counter });

server.get("/counter", (req, res) => {
	return createResponse(res);
});

server.delete(() => {
	counter = 0;
	return createResponse(res);
});

server.post("/counter/increment", (req, res) => {
	counter++;
	return createResponse(res, 201);
});

server.post("/counter/decrement", (req, res) => {
	counter--;
	return createResponse(res, 201);
});

server.post("/counter/double", (req, res) => {
	counter = counter * 2;
	return createResponse(res,201);
});
module.exports = server;
