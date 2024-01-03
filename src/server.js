const express = require("express")
const morgan = require("morgan")
const cors = require("cors")


const app = express()

let count = 5

app.use(morgan("dev"), cors(), express.json())

app.get('/counter', (req, res) => {
    console.log(count)
    return res.json({"counter": count})
})

module.exports = app