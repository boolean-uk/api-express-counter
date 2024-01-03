
// Import library/framworks
const express = require('express')
const morgan = require('morgan')
const cors = require("cors")

// Define express as 'app'
const app = express()

// Using frameworks with express
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

module.exports = app