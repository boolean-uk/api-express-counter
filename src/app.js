const express = require('express');
const counterRoutes = require('./routes/counter');

const app = express();

app.use(express.json());
app.use('/counter', counterRoutes);

module.exports = app;
