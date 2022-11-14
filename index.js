const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
const port = 3030

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}/`)
})

app.use(express.json())

let counter = 1

app.get("/counter", (req, res) => {
    res.json({ counter: counter })
})

// reset counter to 0
app.delete("/counter", (req, res) => {
    res.json({ counter: 0 })
})


app.post("/counter/increment", (req, res) => {
    // increment
    res.json({ counter: counter++ })
})

app.post("/counter/decrement", (req, res) => {
    // increment
    res.json({ counter: counter-- })
})

app.post("/counter/double", (req, res) => {
    // increment
    res.json({ counter: counter *= 2 })
})


app.post("/counter/double", (req, res) => {
    // increment
    res.json({ counter: counter *= 2 })
})


app.put("/counter", (req, res) => {
    console.log("counter is ", counter)
    counter = Number(req.query.value)
    res.json({ Counter: counter })
})

const specificCounter = [
    { name: "rock", counter: 3 },
    { name: "sheep", counter: 10 }
]

app.get("/counter/:name", (req, res) => {
    const { name } = req.params
    const counterExist = specificCounter.find((oneCounter) => oneCounter.name === name)
    if (!counterExist) {
        specificCounter.push({ name: name, counter: 0 })
        return res.json({ name: name, counter: 1 })
    }
    res.json({ ...counterExist })
})


app.delete("/counter/:name", (req, res) => {
    const { name } = req.params
    const counterExist = specificCounter.find((oneCounter) => oneCounter.name === name)
    console.log("something", specificCounter)
    if (counterExist) {
        res.json({ name: req.params.name, counter: 0 })
    }
})