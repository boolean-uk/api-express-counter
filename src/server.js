const express = require('express')
const counterRouter = require('./routers/counterRouter.js')
const app = express()

let counter = 200

app.use('/counter', counterRouter)

// app.get('/counter', (req, res) => {
//   res.status(200).json(counter)
// })

app.delete('/counter', (req, res) => {
  counter = 0
  res.status(200).json(counter)
})

app.post('/counter/increment', (req, res) => {
  counter++
  res.status(201).json(counter)
})

app.post('/counter/decrement', (req, res) => {
  counter--
  res.status(201).json(counter)
})

app.post('/counter/double', (req, res) => {
  counter *= 2
  res.status(201).json(counter)
})

module.exports = app




// const express = require('express')

// const app = express()

// const myUsers = [
//     { id: 1, username: 'vherus' },
//     { id: 2, username: 'muse' }
// ]

// app.get('/users', (request, response) => { // client goes to http://localhost:3000/users
//     response.send(myUsers)
// })

// app.get('/users/:id', (req, res) => { // client goes to http://localhost:3000/users/2
//     const id = Number(req.params.id)

//     const foundUser = myUsers.find(u => u.id === id)

//     if (!foundUser) {
//         res.status(404).json({
//             message: 'User not found'
//         })
//         return;
//     }

//     res.status(201).json({
//         data: foundUser
//     })
// })

// module.exports = app
